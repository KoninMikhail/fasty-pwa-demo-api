import { DeliveryState, PrismaClient, Role } from '@prisma/client';
import prismaRandom from 'prisma-extension-random';
import { getDates, getRandomElement, getRandomTimeInterval } from './utils';

const prisma = new PrismaClient().$extends(prismaRandom());

const setSystemAvailability = async (availability: boolean) => {
  const settings = await prisma.system.findFirst();
  if (!settings) {
    await prisma.system.create({
      data: {
        waitUpdateDemoData: !availability
      }
    });
  } else {
    await prisma.system.update({
      where: {
        id: settings.id
      },
      data: {
        waitUpdateDemoData: !availability
      }
    });
  }
};

const removeAllTokens = async () => {
  await prisma.token.deleteMany();
};

const setDefaultUserData = async () => {
  await prisma.user.update({
    where: {
      email: 'courier@demo.com'
    },
    data: {
      password: '$2a$08$JwfGcvZak3Fevf/Mt0Vkzuo8JCWuq2ymRPk2RrZXlpOqG/VSLCOYW',
      avatar_src: '/uploads/default_avatar.jpg'
    }
  });
};

const resetDeliveries = async () => {
  const allDeliveries = await prisma.delivery.findMany();

  for (const entry of allDeliveries) {
    const availableDates = getDates(90);
    const randomDay = getRandomElement(availableDates);
    const entryDeliveryDate = new Date(randomDay);
    const deliveryTime = getRandomTimeInterval(entryDeliveryDate, '8:30', '18:00');

    await prisma.delivery.update({
      where: {
        id: entry.id
      },
      data: {
        date: randomDay,
        time_start: deliveryTime.startTime,
        time_end: deliveryTime.endTime,
        state: DeliveryState.created,
        courier_id: null
      }
    });
  }

  await prisma.delivery.updateMany({
    data: {
      state: DeliveryState.created,
      courier_id: null
    }
  });
};

const assignDeliveries = async (count = 3) => {
  const courier = await prisma.user.findFirst({
    where: {
      email: 'courier@demo.com'
    }
  });

  if (!courier) {
    throw new Error('Courier not found');
  }

  const randomDeliveries = await prisma.delivery.findManyRandom(count, {
    select: {
      id: true
    }
  });

  for (const entry of randomDeliveries) {
    await prisma.delivery.update({
      where: {
        id: entry.id
      },
      data: {
        state: DeliveryState.delivering,
        courier_id: courier.id
      }
    });
  }
};

const makeHistoryDeliveries = async () => {
  const randomDeliveries = await prisma.delivery.findManyRandom(3, {
    select: {
      id: true
    }
  });

  const courier = await prisma.user.findFirst({
    where: {
      email: 'courier@demo.com'
    }
  });

  if (!courier) {
    throw new Error('Courier not found');
  }

  for (const entry of randomDeliveries) {
    await prisma.delivery.update({
      where: {
        id: entry.id
      },
      data: {
        state: DeliveryState.done,
        courier_id: courier.id
      }
    });
  }
};

const main = async () => {
  await removeAllTokens();
  await setSystemAvailability(false);
  await setDefaultUserData();
  await resetDeliveries();
  await assignDeliveries();
  await makeHistoryDeliveries();
  await setSystemAvailability(true);
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
