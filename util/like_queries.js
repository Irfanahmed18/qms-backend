const sql_queries = require('./db-connection');

const like_queries = {
    insert_in_like: async ({user_id, answer_id}) => {
        const insert_like = `insert into vote values (${answer_id}, ${user_id}, DEFAULT)`;
        console.log(insert_like);
        await sql_queries.insert_query(insert_like);
    },
    delete_in_like: async ({user_id, answer_id}) => {
        const delete_like = `delete from vote where answer_id = ${answer_id} and user_id = ${user_id};`;
        console.log(delete_like);
        await sql_queries.delete_query(delete_like);
    }
}

module.exports = like_queries;
