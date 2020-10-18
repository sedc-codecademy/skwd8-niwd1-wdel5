
# Angular Introduction💣

## What is Angular🔹

Angular is a platform and **framework for building single-page client applications using HTML and TypeScript**. Angular is written in TypeScript. It implements core and optional functionality as a set of TypeScript libraries that you import into your apps.

## Angular Architecture🔹

### Modules
Basic building blocks are NgModules, which provide a compilation context for components. Angular app is defined by a set of NgModules. An app always has at least a root module that enables bootstrapping, and typically has many more feature modules.

* **Feature Module:** A feature module is an organizational best practice, as opposed to a concept of the core Angular API. A feature module delivers a cohesive set of functionality focused on a specific application need such as a user workflow, routing, or forms. While you can do everything within the root module, feature modules help you partition the app into focused areas. A feature module collaborates with the root module and with other modules through the services it provides and the components, directives, and pipes that it shares.

### Components
Every Angular application has at least one component, the root component(App-component) that connects a component hierarchy with the page document object model (DOM). Each component defines a class that contains application data and logic, and is associated with an HTML template that defines a view to be displayed in a target environment.

### Decorators
Modules, components and services are classes that use decorators. These decorators mark their type and provide metadata that tells Angular how to use them. The ***@Component()*** decorator identifies the class immediately below it as a component, and provides the template and related component-specific metadata. 

The metadata for a component class associates it with a template that defines a view. A template combines ordinary HTML with Angular directives and binding markup that allow Angular to modify the HTML before rendering it for display.

The metadata for a service class provides the information Angular needs to make it available to components through dependency injection (DI).

### Services and dependency injection
 For data or logic that isn't associated with a specific view, and that you want to share across components, you create a service class. A service class definition is immediately preceded by the ***@Injectable()*** decorator. The decorator provides the metadata that allows other providers to be injected as dependencies into your class. Dependency injection (DI) lets you keep your component classes lean and efficient. They don't fetch data from the server, validate user input, or log directly to the console, they delegate such tasks to services.

### Directives
Angular templates are dynamic. When Angular renders them, it transforms the DOM according to the instructions given by directives. A directive is a class with a ***@Directive()*** decorator. Angular has few pre-defined  directives as **NgFor, NgIf, ngSwitch, ngStyle and  ngClassThere** and also give possibility to define  some custom directives using the ***@Directive()*** decorator. **There are two types of directives:**

* **Structural directives:** Structural directives alter layout by adding, removing, and replacing elements in the DOM. The example template uses two built-in structural directives to add application logic to how the view is rendered.         
```html
<li *ngFor="let item of items"></li>
<div *ngIF="isTrue">some content</div>
```
* **Attribute directives:** Attribute directives alter the appearance or behavior of an existing element. In templates they look like regular HTML attributes, hence the name.         
```html
<input [(ngModel)]="hero.name">
```
The ngModel directive, which implements two-way data binding, is an example of an attribute directive. ngModel modifies the behavior of an existing element by setting its display value property and responding to change events.

### Pipes
Angular pipes let you declare display-value transformations in your template HTML. A class with the ***@Pipe*** decorator defines a function that transforms input values to output values for display in a view. Angular defines various pipes, such as the date pipe, currency pipe and other pipes briefly explained in the Angular documentation. You can also define new custom pipes. 
```html
<p>Today is {{today | date}}</p>
<!-- Default format: output 'Jun 15, 2015'--> 
```
### Routing
The Angular Router NgModule provides a service that lets you define a navigation path among the different application states and view hierarchies in your app. It is modeled on the familiar browser navigation conventions:

* Enter a URL in the address bar and the browser navigates to a corresponding page.
* Click links on the page and the browser navigates to a new page.
* Click the browser's back and forward buttons and the browser navigates backward and forward through the history of pages you've seen.

The router maps URL-like paths to views instead of pages. When a user performs an action, such as clicking a link, that would load a new page in the browser, the router intercepts the browser's behavior, and shows or hides view hierarchies. If the router determines that the current application state requires particular functionality, and the module that defines it hasn't been loaded, the router can lazy-load the module on demand

### Template and views

You define a component's view with its companion template. A template is a form of HTML that tells Angular how to render the component. Views are typically arranged hierarchically, allowing you to modify or show and hide entire UI sections or pages as a unit. A template looks like regular HTML, except that it also contains Angular template syntax, which alters the HTML based on your app's logic and the state of app and DOM data. Your template can use data binding to coordinate the app and DOM data, pipes to transform data before it is displayed, and directives to apply app logic to what gets displayed.

### Data Binding

Without a framework, you would be responsible for pushing data values into the HTML controls and turning user responses into actions and value updates. Writing such push and pull logic by hand is tedious, error-prone, and a nightmare to read, as any experienced front-end JavaScript programmer can attest. Angular supports two-way data binding, a mechanism for coordinating the parts of a template with the parts of a component. Add binding markup to the template HTML to tell Angular how to connect both sides.

### Lifecycle Hooks
A component instance has a lifecycle that starts when Angular instantiates the component class and renders the component view along with its child views. The lifecycle continues with change detection, as Angular checks to see when data-bound properties change, and updates both the view and the component instance as needed. The lifecycle ends when Angular destroys the component instance and removes its rendered template from the DOM. Directives have a similar lifecycle, as Angular creates, updates, and destroys instances in the course of execution. In other words, lifecycle hooks are simply functions that get called at specific points of a component's life in our Angular apps and Angular provide us visibility into these key life moments and ability to act when they occur. Angular executes hook methods in the following sequence. You can use them to perform the following kinds of operations. These are the lifecycle hooks:

* ngOnChanges() 
* ngOnInit() 
* ngDoCheck()
*	ngAfterContentInit()
*	ngAfterContentChecked()
*	ngAfterViewInit()
*	ngAfterViewChecked()
*	ngOnDestroy()      

## Source

To dive deep in to this topic, please continue exploring the official [Angular Documentation](https://drive.google.com/file/d/1GjxpXz2uikzPr192BU9JEl0BrqpN6nCn/view?fbclid=IwAR2juYCaGw9mKzfjdUA5D-DjObTbdHmbYIKwQ6Qb_kuOEksGWxbdK6pXUqk).