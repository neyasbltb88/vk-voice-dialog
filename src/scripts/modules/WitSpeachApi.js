import config from '../config';
import Xhr from './xhr';


export default class WitSpeachApi {

    uri = `https://api.wit.ai/speech`;

    constructor(url) {
        this.audioUrl = url;
        this.XHR = new Xhr();
        this.init();
    }
    getTextByAudio = async (audioUrl = this.audioUrl) => {

        const response = await fetch(audioUrl);
        const content = await response.blob();

        const data = new FormData();
        data.append('body', content);
        let text = await this.XHR.request(this.uri, {
            body: data,
            headers: {
                'Accept': 'audio/x-mpeg-3',
                'Authorization': `Bearer ` + config.witToken,
                'content-type': 'audio/mpeg'
            },
            method: 'POST',
        })
        
        console.log(JSON.parse(text.target.response));
    }
    init = async () => {
        await this.getTextByAudio();
    }
}