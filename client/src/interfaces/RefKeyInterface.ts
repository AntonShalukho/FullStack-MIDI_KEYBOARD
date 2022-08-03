export default interface RefKeyInterface {
    ref: React.MutableRefObject<HTMLDivElement | null>,
    audio: HTMLAudioElement | null,
    type: string,
    name: string
}