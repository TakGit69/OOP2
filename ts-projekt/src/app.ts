const h = document.querySelector("header") as HTMLDivElement;
h.style.color = "rgb(200,30,60)";

export class NumberHandler{
    private _x: number;
    private _y: number;

    constructor(a: number, b:number){
        this._x = a;
        this._y = b;
    }

    static help(){
        console.log("Összeadás: +, kivonás: -, szorzás: *, osztás: /");
    }

    sum(){
        return this._x + this._y
    }

    multiply(): number{
        return this._x * this._y;
    }

    get x(){
        return this.x;
    };

    set x(v:number){
        if(v > 0) this.x = v;
    }

    get y(){
        return this._y;
    }
}

const numberObj = new NumberHandler(5,9);
numberObj.x = 100;
console.log(numberObj.x, numberObj.multiply(), numberObj.sum());
NumberHandler.help();