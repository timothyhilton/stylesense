using Clerk.BackendAPI.Helpers.Jwks;
using Microsoft.Extensions.Configuration; // Add this using directive
using System;
using System.Net.Http;
using System.Threading.Tasks;

public class AuthService
{
    private readonly IConfiguration _configuration;

    public AuthService(IConfiguration configuration)
    {
        _configuration = configuration;
    }

    public async Task<bool> IsSignedInAsync(HttpRequest request)
    {
        var secretKey = _configuration["CLERK_SECRET_KEY"];

        var options = new AuthenticateRequestOptions(
            secretKey: secretKey,
            authorizedParties: new string[] { "http://localhost:5173" }
        );

        var requestState = await AuthenticateRequest.AuthenticateRequestAsync(request, options);

        return requestState.IsAuthenticated;
    }
}