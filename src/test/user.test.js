const request = require('supertest');

const app = require('../../src/app');

test('Deve listar os usuarios', ()=>{
    return request(app).get('/users')
    .then((res) =>{
        expect(res.status).toBe(200);
        expect(res.body).toHaveLength(1);
        expect(res.body[0]).toHaveProperty('name', 'Jhon Doe'); 
    });
});

test('Deve inserir o usuario com sucesso', () => {
    return request(app).post('/users')
    .send({name:'Neto Siqueira', email:'neto@mail.com'})
    .then((res) =>{
        expect(res.status).toBe(201);
        expect(res.body.name).toBe('Neto Siqueira');
    });
});