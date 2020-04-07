import { Item } from "./Item";


export class CasualItem extends Item implements UpdateState {

    constructor(
        name: string,
        sellIn: number,
        quality: number,
        public sellable: boolean = false){
            super(name,sellIn,quality);
        }

    updateState(): void {
    }

}