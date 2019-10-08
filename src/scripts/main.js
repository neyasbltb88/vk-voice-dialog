import VoiceDialog from './modules/VoiceDialog';
window.voiceDialog = new VoiceDialog();

import MessagesWatcher from './modules/MessagesWatcher';
const callback = element => {
    console.log(element);
};
window.messagesWatcher = new MessagesWatcher();
messagesWatcher.init(document.querySelector('.im-page-chat-contain'), callback);
