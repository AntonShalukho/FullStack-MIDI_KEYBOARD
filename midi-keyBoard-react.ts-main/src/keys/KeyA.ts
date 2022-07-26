export abstract class Keys {
    abstract keyClass: string
    abstract keyStyle: string 
    abstract keyName: string 
    abstract name:  string 
    abstract keyCode: string 
    abstract audio: object 
    abstract key: string 

    play(audio: HTMLAudioElement): void {
        audio.play()
    }  
    load(audio: HTMLAudioElement): void {
        audio.load()
    }  
}


class KeyA extends Keys {
    keyClass = 'key';
    keyStyle = '0%';
    keyName = 'A (До)';
    name = 'KeyA';
    keyCode = 'keyDo1';
    audio = new Audio('../audio/right_piano/do1.mp3');
    key = 'A';
}

export default KeyA