using Sustainable_Buildings.Models;

namespace Sustainable_Buildings.Services
{
    public interface IBuildingService
    {
        object GetBuildingAnalysis();
        object ProcessBuildingData(Data designData);


    }
}
