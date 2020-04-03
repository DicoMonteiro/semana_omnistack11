const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    })

    afterAll(async () => {
        await connection.destroy();
    })

    it('should be able to create a new ONG', async () => {
        const response = await request(app)
            .post('/ongs')
            .send({
                name: "Teste Adriano",
                email: "contato_adriano@teste.com.br",
                whatsapp: "71998712890",
                city: "Salvador",
                uf: "BA"
            })
        console.log(response.body);
        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });

    it('should be able to create a new ONG version one', function(done){
        request(app)
            .post('/ongs')
            .send({
                name: "Teste Adriano One",
                email: "contato_adriano@teste.com.br",
                whatsapp: "71998712890",
                city: "Salvador",
                uf: "BA"
            })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(201)
            .end(function(err, res) {
                if (err) return done(err);
                done();
            });
    });

    it('should be able to create a new ONG version two', function() {
        request(app)
            .post('/ongs')
            .send({
                name: "Teste Adriano Two",
                email: "contato_adriano@teste.com.br",
                whatsapp: "71998712890",
                city: "Salvador",
                uf: "BA"
            })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(201)
            .then(response => {
                expect(response.body.email).toBe('contato_adriano@teste.com.br');
                expect(response.body.name).toBe('Teste Adriano Two');
            })
    });

})