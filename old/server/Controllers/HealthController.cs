using Microsoft.AspNetCore.Mvc;
using Clerk.BackendAPI;
using Clerk.BackendAPI.Models.Components;

namespace StyleSense.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class HealthController : ControllerBase
{
    private readonly AuthService _authService;

    public HealthController(AuthService authService)
    {
        _authService = authService;
    }

    [HttpGet]
    public async Task<IActionResult> Get()
    {
        bool isAuthenticated = await _authService.IsSignedInAsync(Request);
        if(!isAuthenticated) { return Unauthorized(); }
        return Ok(new { status = "healthy", timestamp = DateTime.UtcNow });
    }
}
