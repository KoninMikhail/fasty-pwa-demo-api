import catchAsync from '../utils/catchAsync';
import { subwayService } from '../services';
import exclude from '../utils/exclude';

const getAllStationsList = catchAsync(async (req, res) => {
  const stations = await subwayService.getAllAvailableStations();
  const stationsWithoutId = stations.map((station) => exclude(station, ['id']));
  res.send(stationsWithoutId);
});

export default {
  getAllStationsList
};
