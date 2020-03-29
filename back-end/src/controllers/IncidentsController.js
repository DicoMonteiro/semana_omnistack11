// importando uma biblioteca nativa do JS para criptografar
// const crypto = require('crypto');
// importando as Conexões de banco de dados para poder persistir os dados
const connection = require('../database/connection');

// Controle para os Incidentes (Casos) na aplicação
module.exports = {

    async get_all(request, response) {

        // Total de registro que contém na tabela Incidents
        const [count] = await connection('incidents').count();

        // Inserindo o controle de casos (incidents) a serem exibidos por páginas
        const { page = 1 } = request.query;

        const incidents = await connection('incidents')
            .join('ongs', 'ongs.id', '=', 'incidents.ong_id') // Como no SQL fazer relação com outra tabela e verificar os dados
            .limit(5)
            .offset((page -1) * 5)
            .select([
                'incidents.*', 
                'ongs.name', 
                'ongs.email', 
                'ongs.whatsapp', 
                'ongs.city', 
                'ongs.uf'
            ]);

        // Retornando no Header da resposta o total de casos (incidents) registrado
        response.header('X-Total-Count', count['count(*)']);

        return response.json(incidents);
    },
    
    async create(request, response) {
        const { title, description, value } = request.body;

        // const id = crypto.randomBytes(4).toString('HEX');

        const ong_id = request.headers.authorization;

        // Se quiser somente pegar o ID dda inserção
        // const [id] = await connection('incidents').insert({
        //     title,
        //     description,
        //     value,
        //     ong_id,
        // })
        // return response.json({ id });

        // Como ele ID é gerado automaticamente, pelo increments, passando para ele receber o [id]
        // gerado, ele pode ser exibido na saida do json.
        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id,
        })
        // return response.json({ id, ong_id, title, description, value });
        return response.status(201).send({ id, ong_id, title, description, value });
    },

    async delete(request, response) {
        const { id } = request.params;

        const ong_id = request.headers.authorization;

        const incident = await connection('incidents')
            .where('id', id)
            .select('ong_id')
            .first();

        if (incident.ong_id !== ong_id) {
            return response.status(401).json({ error: 'Operation not permissed.' });
        }

        await connection('incidents').where('id', id).delete();

        return response.status(202).send();
    }
}