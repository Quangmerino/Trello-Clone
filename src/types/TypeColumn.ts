import { TypeCardItem } from "./TypeCardItem";

export interface TypeColumn extends TypeCardItem {
    id: string,
    boardId: string,
    title: string,
    cardOrder: string[],
    cards: object[]
}