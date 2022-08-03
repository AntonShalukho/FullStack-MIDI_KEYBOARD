import do1 from '../audio/right_piano/do1.mp3'

export default class KeyA {

    keyClass: string = 'key';
    keyStyle: string = '0%';
    keyName: string = 'A (До)';
    name: string = 'KeyA';
    keyCode: string = 'keyDo1';
    audio: HTMLAudioElement;
    key: string = 'A';

    constructor() {
        this.audio = do1
    }

}

