import { faker } from '@faker-js/faker';

export const create_user = () => {
  const User = {
    password: faker.internet.password(),
    email: faker.internet.email(),
    phoneNumber: faker.phone.number(),
    lastName: faker.lastName(),
    firstName: faker.firstName(),
    _id: faker.database.mongodbObjectId(),
  };
  return User;
};

export const create_company = () => {
  const Company = {
    _id: faker.database.mongodbObjectId(),
    name: faker.company.name(),
    address: {
      street: faker.location.streetAddress(),
      city: faker.location.city(),
      state: faker.location.state(),
      zipcode: faker.location.zipCode(),
      country: faker.location.country(),
    },
  };
  return Company;
};
