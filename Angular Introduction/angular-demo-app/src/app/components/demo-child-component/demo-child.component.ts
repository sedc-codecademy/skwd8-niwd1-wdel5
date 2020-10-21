import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-demo-child-component',
    templateUrl: './demo-child.component.html'          
}) 
export class DemoChildComponent {

    @Input() names: Array<object>

    @Output() outputPropertyName = new EventEmitter()

    constructor() {}


    eventEmitterFunction() {
        this.outputPropertyName.emit("hello from child component")
    }

}