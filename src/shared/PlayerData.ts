export type Size = { width: number, height: number }
export type Pos = { x: number, y: number }

export default class PlayerData {

    id: number = 0
    nickname: string = ''
    color: string = ''
    speed: number = Math.floor(Math.random() * 4) + 4
    position: Pos = { x: 100, y: 100}
    size: Size = { width: 24, height: 24}

}