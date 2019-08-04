import Xhr from './xhr';

export default class TestSpeachApi {
    constructor() {
        console.log('%c%s', (window.log_color) ? window.log_color.blue : '', 'TestSpeachApi');

        this.XHR = new Xhr();
        this.testMsgUrl = 'https://psv4.userapi.com/c852436//u281986614/audiomsg/d8/fddec1089c.mp3';

        this.test();
    }

    async test() {
        let res = await this.XHR.request(this.testMsgUrl, {
            responseType: 'arraybuffer',
        });

        console.log(res);

    }
}