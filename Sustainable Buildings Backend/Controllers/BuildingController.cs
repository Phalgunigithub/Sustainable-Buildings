using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Sustainable_Buildings.Models;
using Sustainable_Buildings.Services;

namespace Sustainable_Buildings.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BuildingController : ControllerBase
    {

        private readonly IBuildingService _buildingService;
        private readonly ILogger<BuildingController> _logger;

        public BuildingController(IBuildingService buildingService, ILogger<BuildingController> logger)
        {
            _buildingService = buildingService;
            _logger = logger;
        }

        [HttpGet]
        public IActionResult GetBuildings()
        {

            _logger.LogInformation("fetching building analysis data");

            var analysisData = _buildingService.GetBuildingAnalysis();

            if (analysisData == null)
            {
                _logger.LogWarning("No building analysis data found");
                return NotFound("No data available");
            }

            _logger.LogInformation("building analysis data retrieved");

            return Ok(analysisData);

        }

        [HttpPost]
        public IActionResult PostBuildings([FromBody] Data designData)
        {

            _logger.LogInformation("Received new building data for processing...");



                 if (designData == null)
            {
                _logger.LogError("Received null design data!");
                return BadRequest("Invalid data.");
            }
            // Process the data (you can save it to a database, analyze it, etc.)
            var analysisResult = _buildingService.ProcessBuildingData(designData);

            _logger.LogInformation("Building data processed successfully.");
            // Return a response to the React app
            return Ok(analysisResult);
        }

    }
}
