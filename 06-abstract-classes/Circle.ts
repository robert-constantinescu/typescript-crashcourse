import {Shape} from "./Shape";

export class Circle extends Shape {


    constructor(x: number, y: number, private _radius: number) {
        super(x, y);
    }

    public get radius(): number {
        return this._radius;
    }

    public set radius(value: number) {
        this._radius = value;
    }

    calculateArea(): number {
        return Math.PI * Math.pow(this._radius, 2);
    }

    getInfo(): string {
        return super.getInfo() + `, radius= ${this._radius}`
    }
}
