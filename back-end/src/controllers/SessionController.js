// importando as Conexões de banco de dados para poder persistir os dados
const connection = require('../database/connection');

// Método de controle de acesso ao Login na aplicação
module.exports = {
    async create(request, response) {
        const { id } = request.body;

        const ong = await connection('ongs')
            .where('id', id)
            .select('name')
            .first();

        if (!ong) {
            return response.status(400).json({ error: 'No ONG found with this ID' });
        }

        return  response.status(201).json(ong);
    }

}