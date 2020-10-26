  
# ASP.NET Core Web Api Introduction💣

## What is ASP.NET Core🔹

ASP.NET Core is a cross-platform, high-performance, open-source framework for building modern, cloud-enabled, Internet-connected apps. With ASP.NET Core, you can:

* Build web apps and services, Internet of Things (IoT) apps, and mobile backends.
* Use your favorite development tools on Windows, macOS, and Linux.
* Deploy to the cloud or on-premises.
* Run on .NET Core.

ASP.NET Core supports creating RESTful services, also known as web APIs, using C#. To handle requests, a web API uses controllers. Controllers in a web API are classes that derive from ControllerBase. 

## Controllers🔹

**Controllers are the brain of an ASP.NET Core application**. They process incoming requests from some client, perform operations on Model data and returning some data to the client. Controllers are stored inside the Controllers folder in the root of the web application. They are basically C# classes whose Public methods are called as Action Methods. These Action Methods **handles the HTTP request** and prepares the response to be sent to the client.

A web API consists of one or more controller classes that derive from [ControllerBase](https://docs.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.mvc.controllerbase). The web API project template provides a starter controller:

```c#
[ApiController] 
[Route("[controller]")]  
public class WeatherForecastController : ControllerBase
```
Don't create a web API controller by deriving from the Controller class. Controller derives from ControllerBase and adds support for views, so it's for handling web pages, not web API requests. There's an exception to this rule: if you plan to use the same controller for both views and web APIs, derive it from Controller.

## Attributes🔹

The Microsoft.AspNetCore.Mvc namespace provides attributes that can be used to configure the behavior of web API controllers and action methods. The following example uses attributes to specify the supported HTTP action verb and any known HTTP status codes that could be returned:

```c#
[HttpPost] 
[Route("Create")]
public ActionResult<Pet> Create(Pet pet) 
{ 
	pet.Id = _petsInMemoryStore.Any() ?
		 _petsInMemoryStore.Max(p => p.Id) + 1 : 1; 
	_petsInMemoryStore.Add(pet); 
	return CreatedAtAction(nameof(GetById), new { id = pet.Id }, pet); 
}
```
## Models🔹
A model is a set of classes that represent the data that the app manages.

```c#
public  class  TodoItem 
{ 
	public  int Id { get; set; } 
	public  string Name { get; set; } 
	public  bool IsComplete { get; set;} 
}
```

## HTTP Requests and Responses🔹

### HTTP Methods 

Every request must have a purpose. What does it require of the machine that it is receiving it, get something, add something delete or change? These actions are communicated with HTTP methods. Every time we write a request we must specify first what method would the request use. Some of the most used methods are:

-   GET - require some data or information
-   POST - insert some new data
-   PUT - replace already existing data on the machine
-   DELETE - delete already existing data

### Status Codes

When we send a request to a server we always get some info about what happened with our request. This info is in the form of a Status Code. Status codes represent what happened with our request in the form of a 3 digit number. There are two parts of a status code:

-   First digit - Representing the category of the Status
-   Other two digits - Representing a specific type result from that category  Status Code

### Responses examples

* Status: 200 - OK
* Status: 400 - Bad Request
* Status: 401 - Unauthorized
*  Status: 403 - Forbidden
*  Status: 404 - Not found
* Status: 405 - Method Not Allowed
* Status: 406 - Not Acceptable
* Status: 408 - Request Timeout
* Status: 415 - Unsupported Media Type
* Status: 429 - Too Many Requests
* Status: 500 - Internal Server Error
* Status: 503 - Service Unavailable


## Source

To dive deep in to this topic, please continue exploring the official [ASP.NET Core Web Api ](https://docs.microsoft.com/en-us/aspnet/core/web-api/?view=aspnetcore-3.1) documentation.