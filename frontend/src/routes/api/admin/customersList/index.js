import faker from 'faker';

const generateUsers = () =>
  [...Array(10)].map(() => {
    const firstName = faker.name.firstName();    
    const lastName = faker.name.lastName();
    const company = faker.company.companyName();
    const userEmail = faker.internet.email();
    const phone = faker.phone.phoneNumber();
    return {
        firstName,
        lastName,
        userEmail,
        phone,
        company,
    };
  });

export async function get() {
  return {
    body: generateUsers(),
  };
}
