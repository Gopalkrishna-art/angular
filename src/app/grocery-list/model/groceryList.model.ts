export class GroceryList {
    id: number;
    item: string;
    unit: number;
    unitprice: number;
    totalprice: number;
    grandtotal: number;
    constructor() {
        this.id = 0,
            this.item = ''
        this.unit = 0
        this.unitprice = 0
        this.totalprice = 0
        this.grandtotal = 0
    }
}