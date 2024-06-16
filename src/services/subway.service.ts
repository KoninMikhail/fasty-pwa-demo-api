import prisma from '../client';

const getAllAvailableStations = async () => {
  return prisma.subwayStation.findMany();
};

export default {
  getAllAvailableStations
};
