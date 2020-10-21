import { Component } from '@angular/core';

@Component({
    selector: 'app-demo-component',
    templateUrl: './demo.component.html',
    styleUrls: ['./demo.component.css']            
}) 
export class DemoComponent {

    shoudDisplay: boolean = false

    arrayOfObjects: Array<object> = [
        {
            name: "Viktor",
            age: 31
        },
        {
            name: "Gordon",
            age: 32
        }
    ]

    constructor() {}

    showHideFunction() {
        if (this.shoudDisplay === true) {
            this.shoudDisplay = false  
        } else {
            this.shoudDisplay = true
        }
    }

    getValueFromChild(value: any) {
        console.log(value)
    }

}