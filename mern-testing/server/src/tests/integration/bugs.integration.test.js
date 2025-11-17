const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../../src/index');
const Bug = require('../../src/models/bugModel');

beforeAll(async () => {
  await mongoose.connect('mongodb://localhost:27017/bugtracker_test', { useNewUrlParser:true, useUnifiedTopology:true });
});

afterAll(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
});

test('POST /api/bugs creates a bug', async () => {
  const res = await request(app).post('/api/bugs').send({title:'Bug1'});
  expect(res.statusCode).toBe(201);
  expect(res.body.title).toBe('Bug1');
});
