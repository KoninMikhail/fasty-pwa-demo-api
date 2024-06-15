import { faker } from '@faker-js/faker';

function generateUsers() {
  return Array.from({ length: 10 }).map((_, index) => ({
    id: index + 1,
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email()
  }));
}
