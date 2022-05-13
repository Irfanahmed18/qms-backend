const sql_queries = require('./db-connection');

const answer_queries = {
    insert_in_answer: async ({user_id, question_id, answer}) => {
        const insert_answer = `insert into answer values (DEFAULT, ${user_id}, ${answer}, 0, FALSE, DEFAULT, ${question_id})`;
        console.log(insert_answer);
        await sql_queries.insert_query(insert_answer);
    }
}

module.exports = answer_queries;
