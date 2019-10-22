import TaskLauncher from './task-launcher';
import NavWatcher from './nav-watcher';
import MessagesWatcher from './MessagesWatcher';

export default class VoiceDialog {
    constructor() {
        console.log('%c%s', window.log_color ? window.log_color.blue : '', 'VoiceDialog');

        this.navWatcher = new NavWatcher();
        this.messagesWatcher = new MessagesWatcher();
    }
}
