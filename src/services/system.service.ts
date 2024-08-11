import prisma from '../client';

const getServerAvailability = async () => {
  const settings = await prisma.system.findFirst();
  if (settings) {
    return !settings.waitUpdateDemoData;
  }
  return true;
};

export default { getServerAvailability };
