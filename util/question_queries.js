const sql_queries = require('./db-connection');

const question_queries = {
    insert_in_question_query: async ({user_id, question, description, topic_id}) => {
        const insert_in_question = `Insert into question values (DEFAULT, ${user_id}, ${topic_id},'${question}', '${description}', DEFAULT)`;
        console.log(insert_in_question);
        return await sql_queries.insert_query(insert_in_question);
    },
    get_all_questions_answers: async () => {
        const get_questions_answers = `select q.*, a.answer_text, a.votes_count, a.user_id as anwered_by from question q left outer join answer a on q.id = a.question_id`;
        console.log(get_questions_answers);
        return await sql_queries.select_query(get_questions_answers);
    },
    get_user_questions_answers: async ({user_id}) => {
        const get_user_questions_answers = `select * from question left join answer a on question.id = a.question_id where question.user_id = ${user_id}`;
        console.log(get_user_questions_answers);
        return await sql_queries.select_query(get_user_questions_answers);
    }
}

module.exports = question_queries;
