using Sustainable_Buildings.Models;

namespace Sustainable_Buildings.Services
{
    public class BuildingService : IBuildingService
    {

        private readonly ILogger<BuildingService> _logger;

        public BuildingService(ILogger<BuildingService> logger)
        {
            _logger = logger;
        }

        public object GetBuildingAnalysis()
        {
            return new { sunlightExposure = 80, windComfort = 70 };

        }

        public object ProcessBuildingData(Data designData)
        {

            _logger.LogDebug($"Processing building data: {designData}");

            return new
            {
                sunlightExposure = designData.SunlightExposure,
                windComfort = designData.WindComfort,
                message = "Data received successfully and processed."
            };

        }
    }
}
