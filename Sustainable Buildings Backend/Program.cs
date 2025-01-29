using Sustainable_Buildings.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.



builder.Services.AddScoped<IBuildingService, BuildingService>();
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp",
        policy => policy.WithOrigins("http://localhost:5173")
                        .AllowAnyMethod()
                        .AllowAnyHeader()
                        .AllowCredentials());
});


//logging
builder.Logging.ClearProviders();
builder.Logging.AddConsole();   // Logs to console
builder.Logging.AddDebug();     // Logs to Debug window
builder.Logging.AddEventLog();  // Logs to Windows Event Viewer (on Windows)



builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

app.UseCors("AllowReactApp");

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.Use(async (context, next) =>
{
    var logger = context.RequestServices.GetRequiredService<ILogger<Program>>();
    logger.LogInformation($"Received request: {context.Request.Method} {context.Request.Path}");
    await next();
    logger.LogInformation($"Response sent: {context.Response.StatusCode}");
});

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
