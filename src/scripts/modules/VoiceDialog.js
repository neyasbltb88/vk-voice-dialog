import TaskLauncher from './task-launcher';
import NavWatcher from './nav-watcher';
import MessagesWatcher from './MessagesWatcher';

export default class VoiceDialog {
    constructor() {
        // Класс, следящий за переходами между страницами вк
        this.navWatcher = new NavWatcher();
        // Подписываемся на события переходов
        this.navWatcher.on('location', this.handlerNav);

        // Класс, следящий за новыми сообщениями
        this.messagesWatcher = new MessagesWatcher();
        // Подписываемся на события новых сообщений
        this.messagesWatcher.on('message', this.handlerMessage);

        // Объект таска, который запустит инициализацию MessagesWatcher, когда сообщения будут загружены в диалог
        this.navToDialogTask = {
            name: 'navToDialogTask',
            condition: () => {
                let chatEl = document.querySelector('.im-page-chat-contain');
                return chatEl && chatEl.childElementCount > 0;
            },
            callback: () => {
                this.messagesWatcher.init(document.querySelector('.im-page-chat-contain'));
            }
        };

        // Класс, вызывающий коллбеки при наступлении определенных условий
        this.taskLauncher = new TaskLauncher([this.navToDialogTask]);
        window.taskLauncher = this.taskLauncher;

        this.init();
    }

    // Этот метод вызывается при каждом переходе между страницами вк
    handlerNav = objLoc => {
        console.log('handlerNav: ', objLoc);

        // При любом переходе сначала отключаем слежение за сообщениями
        this.messagesWatcher.destroy();

        // Если переход в диалог
        if (objLoc[0] === 'im' && objLoc.sel !== undefined) {
            // Запуск ожидания готовности диалога
            this.taskLauncher.run('navToDialogTask');
        }
    };

    handlerMessage = message => {
        console.log('messagesWatcher: ', message);
    };

    init() {
        console.log('-VoiceDialog-');
        this.navWatcher.init();
    }

    destroy() {
        this.navWatcher.destroy();
        this.messagesWatcher.destroy();
    }
}
