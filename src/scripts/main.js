import VoiceDialog from './modules/VoiceDialog';

if (window.top === window) {
    window.voiceDialog = new VoiceDialog();

    // import MessagesWatcher from './modules/MessagesWatcher';
    // const callback = element => {
    //     console.log(element);
    // };
    // window.messagesWatcher = new MessagesWatcher();
    // messagesWatcher.init(document.querySelector('.im-page-chat-contain'), callback);
}

if (module.hot) {
    module.hot.accept();
}
