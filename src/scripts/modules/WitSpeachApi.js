import config from '../config';
import Xhr from './xhr';


export default class WitSpeachApi {

    apiUri = `https://api.wit.ai/speech`;

    constructor() {
        this.XHR = new Xhr();
    }

    getBlobAudio = async (audioUrl) => {
        const response = await fetch(audioUrl);
        return response.blob();
    }
    getTextByAudio = async (audioUrl) => {

        console.time('Скачивание голосового файла');
        console.timeLog('Скачивание голосового файла');
        const audio = await this.getBlobAudio(audioUrl);
        console.timeEnd('Скачивание голосового файла');

        const data = new FormData();
        data.append('body', audio);
        let text = await this.XHR.request(this.apiUri, {
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
}