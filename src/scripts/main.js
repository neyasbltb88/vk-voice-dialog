import VoiceDialog from './modules/VoiceDialog';
window.voiceDialog = new VoiceDialog();

import TestClass from './modules/TestClass';
window.testClass = new TestClass();

// import WitSpeachApi from './modules/WitSpeachApi';
// window.witSpeachApi = new WitSpeachApi();
// witSpeachApi.getTextByAudio('https://psv4.userapi.com/c853024//u281890215/audiomsg/d12/568a46c30c.mp3');

import MessagesWatcher from './modules/MessagesWatcher';
window.messagesWatcher = new MessagesWatcher();
const callback = (element) => {
    console.log(element.textContent);
}
messagesWatcher.watcher(document.querySelector('.im-page-chat-contain'), callback);