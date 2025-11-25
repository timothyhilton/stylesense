using Microsoft.AspNetCore.Mvc;
using Clerk.BackendAPI;
using Clerk.BackendAPI.Models.Components;

namespace StyleSense.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class HealthController : ControllerBase
{
    [HttpGet]
    public IActionResult Get()
    {
        return Ok(new { status = "healthy", timestamp = DateTime.UtcNow });
    }
}