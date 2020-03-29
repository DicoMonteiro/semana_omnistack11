// importando as Conexões de banco de dados para poder persistir os dados
const connection = require('../database/connection');

// Metodo utilizado para exibir somente os casos específicos de cada ONG
module.exports = {
    async get_id(request, response) {
        const ong_id = request.headers.authorization;

        const incidents = await connection('incidents')
            .where('ong_id', ong_id)
            .select('*')

        return response.json(incidents);
    }
}