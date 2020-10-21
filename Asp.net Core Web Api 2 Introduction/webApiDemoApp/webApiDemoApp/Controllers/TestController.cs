using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using webApiDemoApp.Models;

namespace webApiDemoApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TestController : ControllerBase
    {
        [HttpGet("alive")]
        public IActionResult Ping() 
        {
            return Ok();
        }

        [HttpGet("getName")]
        public IActionResult GetNameFromQuery([FromQuery] string nameFromQuery) 
        {
            return Ok(nameFromQuery);
        }

        [HttpGet("getNames")]
        public IActionResult GetNamesFromQuery([FromQuery] string nameFromQuery,
                                               [FromQuery] string secondnameFromQuery)
        {
            var names = $"{nameFromQuery}, - {secondnameFromQuery}";   
            return Ok(names);
        }

        [HttpPost("postUser")]
        public IActionResult PostUsers([FromBody] UserRequestModel requestModel) 
        {
            return Ok(requestModel);
        }

    }
}
