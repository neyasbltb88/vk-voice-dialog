import VoiceDialog from './modules/VoiceDialog';
window.voiceDialog = new VoiceDialog();

import TestSpeachApi from './modules/TestSpeachApi';
window.testSpeachApi = new TestSpeachApi();

import WitSpeachApi from './modules/WitSpeachApi';
window.witSpeachApi = new WitSpeachApi('https://psv4.userapi.com/c853024//u281890215/audiomsg/d12/568a46c30c.mp3');