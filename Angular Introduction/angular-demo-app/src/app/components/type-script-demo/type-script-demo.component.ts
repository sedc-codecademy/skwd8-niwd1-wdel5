import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { myName, importedFunction, Car, DriveCar } from './file';

@Component({
    selector: 'app-type-script-demo',
    template: `
                <h2>Hello from type script demo component!</h2>
                <button (click)="testFunction2()">Click me!</button>
                <input type="text" (change)="functionForInput($event)">
              `,
    styles: ["h2 {color: red;}"]               
}) 
export class TypeScriptDemoComponent implements OnInit,OnDestroy,DoCheck {

    //decalring properties
    //types: string, number, boolean, Array, object, any

    importedFunction2 = importedFunction

    testProperty: string = "some random text"

    testObject: object = {}

    testArray: Array<string> = ["one", "two"]

    constructor() {}
    
    

    ngOnInit(): void {
        console.log("result: ", this.testFunction3())
        console.log(myName)
        this.importedFunction2()
    }

    ngOnDestroy(): void {}

    ngDoCheck(): void {}

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

class SmallCar extends Car implements DriveCar {
    services: Array<string>

    Drive(): void {
        console.log("car is driving")
    }

    MilesLeft(): number {
        return 150
    }
    
}

let newCar = new SmallCar()
newCar.name = "BWM 3"
newCar.fuelType = "Diesel"

newCar.Drive()
console.log(newCar.MilesLeft())

newCar.DriveInRellyMode()
