import { faker, tr } from '@faker-js/faker';
import { Contact, DeliveryState, Prisma, PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import prismaRandom from 'prisma-extension-random';

import addresses from './adresses';
import subways from './subways';
import {
  generateRandomNumber,
  getDates,
  getRandomElement,
  getRandomGender,
  getRandomTimeInterval
} from './utils';
import { contents } from './contents';
import { comments } from './comments';

const prisma = new PrismaClient().$extends(prismaRandom());

async function usersSeed() {
  try {
    console.log('-- User seeding...');
    console.log('\x1b[32m%s\x1b[0m', 'Deleting all users');
    await prisma.user.deleteMany();

    console.log(' -- Creating user: courier@demo.com');

    await prisma.user.create({
      data: {
        email: 'courier@demo.com',
        password: bcrypt.hashSync('ItsCourierDemo!', 8),
        firstName: faker.person.firstName('male'),
        lastName: faker.person.lastName('male'),
        gender: 'male',
        role: 'COURIER',
        language: 'en',
        active: true,
        avatar_src: faker.image.avatar(),
        phone: faker.string.numeric(11)
      }
    });

    console.log(' -- Creating managers');

    const managers = Array.from({ length: 10 }).map((_, index) => {
      const gender = index % 2 === 0 ? 'male' : 'female';
      return {
        email: faker.internet.email(),
        password: faker.internet.password(),
        firstName: faker.person.firstName(gender),
        lastName: faker.person.lastName(gender),
        gender: gender,
        role: 'MANAGER',
        language: 'en',
        active: false,
        avatar_src: faker.image.avatar(),
        phone: faker.string.numeric(11)
      } as Prisma.UserCreateInput;
    });
    await prisma.user.createMany({
      data: managers
    });

    console.log('-- Seed users complete -- 🚀');
  } catch (e) {
    console.log('\x1b[31m%s\x1b[0m', 'Seed users failed');
    console.error(e);
  }
}

async function subwayStationsSeed() {
  try {
    console.log('-- Subway stations seeding...');
    console.log('\x1b[32m%s\x1b[0m', 'Deleting all subway stations');
    await prisma.subwayStation.deleteMany();

    console.log('\x1b[32m%s\x1b[0m', 'Start seeding subway stations...');

    await prisma.subwayStation.createMany({
      data: subways
    });
    process.stdout.write('\r\x1b[K');
    console.log('-- Seed subway stations complete -- 🚀');
  } catch (e) {
    console.log('\x1b[31m%s\x1b[0m', 'Seed subway stations failed');
    console.error(e);
  }
}

async function addressesSeed() {
  try {
    console.log('-- Address seeding...');
    console.log('\x1b[32m%s\x1b[0m', 'Deleting all addresses');
    await prisma.address.deleteMany();

    console.log(' -- Creating addresses');

    for (const address of addresses) {
      const foundSubway = await prisma.subwayStation.findFirst({
        where: {
          name: address.station
        }
      });

      if (foundSubway) {
        await prisma.address.create({
          data: {
            address: address.address,
            latitude: address.latitude,
            longitude: address.longitude,
            city: address.city,
            subway: {
              connect: foundSubway
            }
          }
        });
      } else {
        console.log(`No subway station found with name: ${address.station}`);
      }
    }
    console.log('-- Seed addresses complete -- 🚀');
  } catch (e) {
    console.log('\x1b[31m%s\x1b[0m', 'Seed addresses failed');
    console.error(e);
  }
}

async function contactsSeed() {
  try {
    console.log('-- Contact seeding...');
    console.log('\x1b[32m%s\x1b[0m', 'Deleting all contacts');
    await prisma.contact.deleteMany();

    console.log(' -- Creating contacts');

    const contacts = Array.from({ length: 150 }).map(() => {
      const sex = getRandomGender();
      return {
        name: faker.person.fullName({ sex }),
        job: faker.person.jobTitle(),
        phone: faker.string.numeric(11),
        email: faker.internet.email()
      } as Prisma.ContactCreateManyInput;
    });

    await prisma.contact.createMany({
      data: contacts
    });
  } catch (e) {
    console.log('\x1b[31m%s\x1b[0m', 'Seed contacts failed');
    console.error(e);
  }
}

async function clientsSeed() {
  try {
    console.log('-- Clients with Contacts seeding...');
    console.log('\x1b[32m%s\x1b[0m', 'Deleting all clients');
    await prisma.client.deleteMany();

    console.log(' -- Creating clients');

    for (let index = 0; index < 50; index++) {
      const clientType = index % 2 === 0 ? 'personal' : 'organization';

      if (clientType === 'personal') {
        const randomContact = await prisma.contact.findRandom({
          select: {
            id: true,
            name: true
          }
        });

        if (!randomContact) {
          return;
        }

        const randomAddress = await prisma.address.findRandom({
          select: {
            id: true
          }
        });

        const client = await prisma.client.create({
          select: { id: true },
          data: {
            name: randomContact.name,
            type: 'personal'
          }
        });

        await prisma.client.update({
          where: {
            id: client.id
          },
          data: {
            contacts: {
              connect: {
                id: randomContact?.id
              }
            },
            addresses: {
              connect: {
                id: randomAddress?.id
              }
            }
          }
        });
      }

      if (clientType === 'organization') {
        const randomContacts = await prisma.contact.findManyRandom(3, {
          select: {
            id: true,
            name: true,
            job: true,
            phone: true,
            email: true
          },
          custom_uniqueKey: 'email'
        });
        if (!randomContacts) {
          console.log('No contacts found');
          return;
        }

        const randomAddresses = await prisma.address.findManyRandom(3, {
          select: {
            id: true
          }
        });

        const client = await prisma.client.create({
          select: {
            id: true
          },
          data: {
            name: faker.company.name(),
            type: 'organization',
            contacts: {
              connect: randomContacts
            }
          }
        });

        await prisma.client.update({
          where: {
            id: client.id
          },
          data: {
            contacts: {
              connect: randomContacts
            },
            addresses: {
              connect: randomAddresses
            }
          }
        });
      }
    }

    console.log('-- Seed clients complete -- 🚀');
  } catch (e) {
    console.log('\x1b[31m%s\x1b[0m', 'Seed clients failed');
    console.error(e);
  }
}

async function deliveriesSeed() {
  let deliveryId = 1;

  try {
    console.log('-- Deliveries seeding...');
    console.log('\x1b[32m%s\x1b[0m', 'Deleting all deliveries');
    await prisma.delivery.deleteMany();

    console.log(' -- Creating deliveries');

    const dates = getDates(90);
    const managersList = await prisma.user.findMany({
      select: {
        id: true
      },
      where: {
        role: 'MANAGER'
      }
    });
    const clientsList = await prisma.client.findMany({
      select: {
        id: true,
        type: true,
        addresses: true,
        contacts: true
      }
    });

    function createDelivery(date: string) {
      const randomClient = getRandomElement(clientsList);
      const randomClientAddress = getRandomElement(randomClient.addresses);
      const randomClientContact = getRandomElement(randomClient.contacts);
      const randomManager = getRandomElement(managersList);
      const deliveryDate = new Date(date);
      const deliveryTime = getRandomTimeInterval(deliveryDate, '8:30', '18:00');

      deliveryId++;

      return {
        car: Math.random() < 0.4,
        deliveryId,
        express: Math.random() < 0.3,
        comment: Math.random() < 0.3 ? getRandomElement(comments) : '',
        contents: getRandomElement(contents),
        date: deliveryDate,
        state: 'created' as DeliveryState,
        time_end: deliveryTime.endTime,
        time_start: deliveryTime.startTime,
        weight: generateRandomNumber(),
        client_id: randomClient.id,
        address_id: randomClientAddress.id,
        manager_id: randomManager.id,
        contact_id: randomClientContact.id
      };
    }

    for (const date of dates) {
      const deliveriesQuantity = Math.floor(Math.random() * 5) + 1;
      const deliveries = Array.from({ length: deliveriesQuantity }).map(() => createDelivery(date));
      await prisma.delivery.createMany({
        data: deliveries
      });
    }

    console.log('-- Seed deliveries complete -- 🚀');
  } catch (e) {
    console.log('\x1b[31m%s\x1b[0m', 'Seed deliveries failed');
    console.error(e);
  }
}

async function assingDeliveriesWithCourier() {
  try {
    console.log('-- Assigning deliveries with courier...');
    const courier = await prisma.user.findFirst({
      select: {
        id: true
      },
      where: {
        role: 'COURIER'
      }
    });
    const randomDeliveries = await prisma.delivery.findManyRandom(5, {
      select: {
        id: true
      }
    });

    for (const delivery of randomDeliveries) {
      await prisma.delivery.update({
        where: {
          id: delivery.id
        },
        data: {
          courier_id: courier?.id
        }
      });
    }
  } catch (e) {
    console.log('\x1b[31m%s\x1b[0m', 'Assigning deliveries with courier failed');
    console.error(e);
  }
}

async function main() {
  await usersSeed();
  await subwayStationsSeed();
  await addressesSeed();
  await contactsSeed();
  await clientsSeed();
  await deliveriesSeed();
  await assingDeliveriesWithCourier();
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
