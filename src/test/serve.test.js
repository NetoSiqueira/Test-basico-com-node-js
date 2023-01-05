const supertest = require('supertest');

const request = supertest('http://localhost:3001');

test('Deve responder na posrta 3001', ()=>{
// acessar a url http://localhost:3001
    return request.get('/')
    .then(res => expect(res.status).toBe(200));

// verificar que a respota foi 200
});