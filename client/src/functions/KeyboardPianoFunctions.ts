import { RefObject } from "react";

type PropsKey = {
    ref: RefObject<HTMLDivElement | null>,
    audio: HTMLAudioElement | null
}

export function changeKeyUp(ref, audio): void {
    ref.current.style.backgroundColor = `white`;
    ref.current.style.border = `1px solid black`;
    ref.current.style.height = `90%`;
    ref.current.style.width = `6.6%`;
    audio?.load()
}
export function changeKeyDown(ref, audio): void {
    ref.current.style.backgroundColor = `bisque`;
    ref.current.style.border = `3px solid black`;
    ref.current.style.height = `91%`;
    ref.current.style.width = `6.3%`;
    audio?.play()
}
export function changeBlackKeyUp(ref, audio): void {
    ref.current.style.borderBottom = `solid 0.8rem black`;
    ref.current.style.borderLeft = `solid 0.3rem black`;
    ref.current.style.height = `50%`;
    audio?.load()
}
export function changeBlackKeyDown(ref, audio): void {
    ref.current.style.borderBottom = `solid 0rem black`;
    ref.current.style.borderLeft = `solid 0rem black`;
    ref.current.style.height = `53.5%`;
    audio?.play()
}

// function pushKeyDown(event: KeyboardEvent) {
//     forWhite:
//     for (let i in whiteKeys) {
//         if (whiteKeys[i].keyCode == event.target || i == event.code) {
//             whiteKeys[i].keyCode.style.backgroundColor = `bisque`;
//             whiteKeys[i].keyCode.style.border = `3px solid black`;
//             whiteKeys[i].keyCode.style.height = `91%`; 
//             whiteKeys[i].keyCode.style.width = `6.3%`; 
//             whiteKeys[i].audio.play(); 
//             break forWhite
//         }
//     }
//     forBlack:
//     for (let i in blackKeys) {
//         if (blackKeys[i].keyCode == event.target || i == event.code) {
//             blackKeys[i].keyCode.style.borderBottom = `solid 0rem black`;
//             blackKeys[i].keyCode.style.borderLeft = `solid 0rem black`;
//             blackKeys[i].keyCode.style.height = `53.5%`; 
//             blackKeys[i].audio.play(); 
//             break forBlack
//         }
//     }

//     whiteKeys.forEach(key => {
//         if (key.name === event.code) {
//             Key.id === 
//         }
//     })
// }

// function pushKeyUp(event: KeyboardEvent) {
//     forWhite:
//     for (let i in whiteKeys) {
//         if (whiteKeys[i].keyCode == event.target || i == event.code) {
//             whiteKeys[i].keyCode.style.backgroundColor = `white`;
//             whiteKeys[i].keyCode.style.border = `1px solid black`;
//             whiteKeys[i].keyCode.style.height = `90%`; 
//             whiteKeys[i].keyCode.style.width = `6.6%`; 
//             whiteKeys[i].audio.load(); 
//             break forWhite
//         }
//     }
//     forBlack:
//     for (let i in blackKeys) {
//         if (blackKeys[i].keyCode == event.target || i == event.code) {
//             blackKeys[i].keyCode.style.borderBottom = `solid 0.8rem black`;
//             blackKeys[i].keyCode.style.borderLeft = `solid 0.3rem black`;
//             blackKeys[i].keyCode.style.height = `50%`; 
//             blackKeys[i].audio.load(); 
//             break forBlack
//         }
//     }
// }
