import RefKeyInterface from "../interfaces/RefKeyInterface";

export default class AutoPlay {
    idArray: Array<number> = [];
    ref: Array<RefKeyInterface | null>

    constructor(ref: Array<RefKeyInterface | null>) {
        this.ref = ref
    }

    clearApi() {
        for (let i of this.idArray) {
            clearTimeout(i)
        }
        this.ref.forEach(el => {
            if(el?.type === 'white' && el.ref.current !== null && el.audio !== null) {
                this.changeWhiteKeyStyle(el)
            } else if(el !== null) (
                this.changeBlackKeyStyle(el)
            )
        })
        this.idArray = []
    }

    changeWhiteKeyStyle(el: RefKeyInterface) {
        if (el.ref.current !== null && el.audio !== null) {
            el.ref.current.style.backgroundColor = `white`;
            el.ref.current.style.border = `1px solid black`;
            el.ref.current.style.height = `90%`; 
            el.ref.current.style.width = `6.6%`; 
            el.audio.load(); 
        }
    }
    changeWhiteKeyDownStyle(el: RefKeyInterface) {
        if (el.ref.current !== null && el.audio !== null) {
            el.ref.current.style.backgroundColor = `bisque`;
            el.ref.current.style.border = `3px solid black`;
            el.ref.current.style.height = `91%`; 
            el.ref.current.style.width = `6.36%`; 
            el.audio.play(); 
        }
    }
    changeBlackKeyStyle(el: RefKeyInterface) {
        if (el.ref.current !== null && el.audio !== null) {
            el.ref.current.style.borderBottom = `solid 0.8rem black`;
            el.ref.current.style.borderLeft = `solid 0.3rem black`;
            el.ref.current.style.height = `50%`; 
            el.audio.load();
        }
    }
    changeBlackKeyDownStyle(el: RefKeyInterface) {
        if (el.ref.current !== null && el.audio !== null) {
            el.ref.current.style.borderBottom = `solid 0rem black`;
            el.ref.current.style.borderLeft = `solid 0rem black`;
            el.ref.current.style.height = `53.5%`; 
            el.audio.play();
        }
    }

    playSong(song: string) {
        this.clearApi();
        const acc = song.split(' ');
        let time1 = 0;

        acc.forEach(item => {
            this.ref.forEach(el => {
                if (item === el?.name) {
                    if(el.type === 'white') {
                        let id = window.setTimeout(() => {
                            if(this.ref !== null) this.changeWhiteKeyDownStyle(el)
                    
                            let id2 = setTimeout(() => {
                                if(this.ref !== null) this.changeWhiteKeyStyle(el)
                            }, 500)
                            this.idArray.push(id2);
                        }, time1);
                        this.idArray.push(id)
                        time1 += 600;
                    } else if(el.type === 'black') {
                        let id = window.setTimeout(() => {
                            if(this.ref !== null) this.changeBlackKeyDownStyle(el)
                    
                            let id2 = setTimeout(() => {
                                if(this.ref !== null) this.changeBlackKeyStyle(el)
                            }, 500)
                            this.idArray.push(id2);
                        }, time1);
                        this.idArray.push(id)
                        time1 += 600;
                    }
                }
            })
        })
    }
}

// function clearApi() {
//     for (let i of idArray) {
//         clearTimeout(i)
//     }
//     for (let obj in whiteKeys) {
//         whiteKeys[obj].keyCode.style.backgroundColor = `white`;
//         whiteKeys[obj].keyCode.style.border = `1px solid black`;
//         whiteKeys[obj].keyCode.style.height = `90%`; 
//         whiteKeys[obj].keyCode.style.width = `6.6%`; 
//         whiteKeys[obj].audio.load(); 
//     }
//     for (let obj in blackKeys) {
//         blackKeys[obj].keyCode.style.borderBottom = `solid 0.8rem black`;
//         blackKeys[obj].keyCode.style.borderLeft = `solid 0.3rem black`;
//         blackKeys[obj].keyCode.style.height = `50%`; 
//         blackKeys[obj].audio.load(); 
//     }
//     idArray = [];
// }

// function choiceSongForPlay(event) {
//     if (event.target == buttPlay) {
//         if (song1Text.style.display == 'flex') {
//             playSong(song1TextContent)
//         }
//         if (song2Text.style.display == 'flex') {
//             playSong(song2TextContent)
//         }
//         if (song3Text.style.display == 'flex') {
//             playSong(song3TextContent)
//         }
//     }
// }
// let idArray = [];

// function playSong(song) {
//     clearApi()
//     const acc = song.split(' ');
//     let time1 = 0;

//     acc.forEach(item => {
        
//         for (let i in whiteKeys) {
//             if (item == whiteKeys[i].keyName) {
//                 let id = window.setTimeout(() => {
//                     whiteKeys[i].keyCode.style.backgroundColor = `bisque`;
//                     whiteKeys[i].keyCode.style.border = `3px solid black`;
//                     whiteKeys[i].keyCode.style.height = `91%`; 
//                     whiteKeys[i].keyCode.style.width = `6.36%`; 
//                     whiteKeys[i].audio.play();
    
//                     let id2 = setTimeout(() => {
//                         whiteKeys[i].keyCode.style.backgroundColor = `white`;
//                         whiteKeys[i].keyCode.style.border = `1px solid black`;
//                         whiteKeys[i].keyCode.style.height = `90%`; 
//                         whiteKeys[i].keyCode.style.width = `6.66%`; 
//                         whiteKeys[i].audio.load();
//                     }, 500)
//                     idArray.push(id2);
//                 }, `${time1}`);
//                 idArray.push(id)
//                 time1 += 600; 
//             }
//         }
//     })
// }