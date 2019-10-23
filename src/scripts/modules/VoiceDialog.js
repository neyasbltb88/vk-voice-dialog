import TaskLauncher from './task-launcher';
import NavWatcher from './nav-watcher';
import MessagesWatcher from './MessagesWatcher';

export default class VoiceDialog {
    constructor() {
        // Класс, следящий за переходами между страницами вк
        this.navWatcher = new NavWatcher();
        // Сразу подписываемся на события переходов
        this.navWatcher.on('location', this.handlerNav);

        // Класс, следящий за новыми сообщениями
        this.messagesWatcher = new MessagesWatcher();

        // Объект таска, который запустит инициализацию MessagesWatcher, когда сообщения будут загружены в диалог
        this.navToDialogTask = {
            name: 'navToDialogTask',
            condition: () => {
                let chatEl = document.querySelector('.im-page-chat-contain');
                return chatEl && chatEl.childElementCount > 0;
            },
            callback: () => {
                this.messagesWatcher.init(document.querySelector('.im-page-chat-contain'), e => {
                    console.log('messagesWatcher: ', e);
                });
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

        // Если переход в диалог
        if (objLoc[0] === 'im' && objLoc.sel !== undefined) {
            // Запуск ожидания готовности диалога
            this.taskLauncher.run('navToDialogTask');

            // Если переход не в диалог, то это может быть выход из диалога,
            // поэтому останавливаем слежение за сообщениями
        } else {
            this.messagesWatcher.destroy();
        }
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
