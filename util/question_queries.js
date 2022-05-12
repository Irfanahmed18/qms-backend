const sql_queries = require('./db-connection');

const question_queries = {
    insert_in_question_query: async ({user_id, question, description, topic_id}) => {
        const insert_in_question = `Insert into question values (DEFAULT, ${user_id}, ${topic_id},'${question}', '${description}', DEFAULT)`;
        console.log(insert_in_question)
        await sql_queries.insert_query(insert_in_question)
    }
}

module.exports = question_queries;
