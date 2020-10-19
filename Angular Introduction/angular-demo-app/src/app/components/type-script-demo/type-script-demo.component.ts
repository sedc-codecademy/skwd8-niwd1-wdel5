import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
    selector: 'app-type-script-demo',
    template: `
                <h2>Hello from type script demo component!</h2>
                <button (click)="testFunction2()">Click me!</button>
                <input type="text" (change)="functionForInput($event)">
              `
}) 
export class TypeScriptDemoComponent implements OnInit,OnDestroy {

    //decalring properties
    //types: string, number, boolean, Array, object, any

    testProperty: string = "some random text"

    testObject: object = {}

    testArray: Array<string> = ["one", "two"]

    constructor() {}
    

    ngOnInit(): void {
        console.log("result: ", this.testFunction3())
    }

    ngOnDestroy(): void {}

    //declaring methods
    testFunction() {
        console.log("hello from test function")
    }

    testFunction2() :void {
        //accesing property value (must use THIS!)
        console.log(this.testProperty)
    }

    testFunction3() :number {
        let result = this.functionWithParameters(5, 10)
        return result
    }

    functionWithParameters(number1: number, number2: number) :number {
        return number1 + number2
    }

    functionForInput(event) {
        console.log(event.target.value)
    }

}