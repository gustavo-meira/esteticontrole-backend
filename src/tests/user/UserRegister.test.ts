import 'dotenv/config';
import chai from 'chai';
import sinon from 'sinon';
import chaiHttp from 'chai-http';
import { App } from '../../app';
import { UserRepository } from '../../repositories/prisma/UserRepository';
import { userCreated, userWithEmailInvalid, userWithoutName, validUser } from '../mocks/user.mock';

chai.use(chaiHttp);

const { expect } = chai;
const { app } = new App();

describe('Route POST /users/register', () => {
  beforeEach(() => {
    sinon.stub(UserRepository.prototype, 'create')
    .returns(userCreated as any);

    sinon.stub(UserRepository.prototype, 'readByEmail')
      .returns(null as any);
  })

  afterEach(() => {
    sinon.restore();
  });

  it('should return 201 when user is created', async () => {
    const response = await chai.request(app)
      .post('/users/register')
      .send(validUser);

    expect(response.status).to.equal(201);
    expect(response.body).to.be.an('object');
    expect(response.body).to.have.property('token');
    expect(response.body.token).to.be.a('string');
  });

  it('should return 409 when user is already registered', async () => {
    (UserRepository.prototype.readByEmail as sinon.SinonStub).returns(true);

    const response = await chai.request(app)
      .post('/users/register')
      .send(validUser);

    expect(response.status).to.equal(409);
    expect(response.body).to.be.an('object');
    expect(response.body).to.have.property('message');
    expect(response.body.message).to.be.equal('"email" already in use');
  });

  it('should return 400 when there is a missing field', async () => {
    const response = await chai.request(app)
      .post('/users/register')
      .send(userWithoutName);

    expect(response.status).to.equal(400);
    expect(response.body).to.be.an('object');
    expect(response.body).to.have.property('message');
    expect(response.body.message).to.be.equal('"name" is required');
  });

  it('should return 400 when there is a wrong field', async () => {
    const response = await chai.request(app)
      .post('/users/register')
      .send(userWithEmailInvalid);

    expect(response.status).to.equal(400);
    expect(response.body).to.be.an('object');
    expect(response.body).to.have.property('message');
    expect(response.body.message).to.be.equal('"email" must be a valid email');
  });
});