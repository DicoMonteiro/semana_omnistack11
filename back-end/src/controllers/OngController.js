// importando uma biblioteca nativa do JS para criptografar
const crypto = require('crypto');
// importando as Conexões de banco de dados para poder persistir os dados
const connection = require('../database/connection');

// Contole da gestão das ONGs criadas e listadas
module.exports = {

    async get_all(request, response) {
        const ongs = await connection('ongs').select('*');

        return response.json(ongs);
    },
    
    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body;

        const id = crypto.randomBytes(4).toString('HEX');

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })
        return response.json({ id, name, email, whatsapp, city, uf });
    }
}