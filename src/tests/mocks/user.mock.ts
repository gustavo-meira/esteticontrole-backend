const validUser = {
  email: 'test@test.com',
  password: 'test-password',
  name: 'test-name',
};

const userWithoutName = {
  email: 'test@test.com',
  password: 'test-password',
};

const userWithEmailInvalid = {
  email: 'test',
  password: 'test-password',
  name: 'test-name',
};

const userCreated = {
  id: 'test-id',
  email: 'test@test.com',
  password: 'test-password',
  name: 'test-name',
};

export {
  validUser,
  userWithoutName,
  userWithEmailInvalid,
  userCreated,
};
