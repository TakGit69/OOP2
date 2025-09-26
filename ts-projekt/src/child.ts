import { NumberHandler } from './app.js';

export class child extends NumberHandler{
    private _s: number;
    private _array: number[];
    constructor(a: number, b:number, s:number){
        super(a, b);
        this._s = s;
        this._array = Array.from({length: s}, (_, i) => i+1);
    }

    getArray = () => this._array;

    override multiply(): number {
        if((this.x) === 0) this.x = 1;
    }
}