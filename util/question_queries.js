const sql_queries = require('./db-connection');

const question_queries = {
    insert_in_question_query: async ({user_id, question, description, topic_id}) => {
        const insert_in_question = `Insert into question values (DEFAULT, ${user_id}, ${topic_id},'${question}', '${description}', DEFAULT)`;
        console.log(insert_in_question);
        return await sql_queries.insert_query(insert_in_question);
    },
    get_all_questions_answers: async () => {
        const get_questions_answers = `select question_user_join.id as id_question, question_user_join.*, answer_user_join.* from
            (select q.*, u.first_name as question_posted_by_first_name, u.last_name as question_posted_by_last_name from question q, user u where q.user_id = u.id) as question_user_join left outer join
            (select a.*, u.first_name as answer_posted_by_first_name, u.last_name as answer_posted_by_last_name from answer a, user u where a.user_id = u.id) as answer_user_join
            on question_user_join.id = answer_user_join.question_id`;

        console.log(get_questions_answers);
        return await sql_queries.select_query(get_questions_answers);
    },
    get_user_questions_answers: async ({user_id}) => {
        const get_user_questions_answers = `select question_user_join.id as id_question, question_user_join.*, answer_user_join.* from
            (select q.*, u.first_name as question_posted_by_first_name, u.last_name as question_posted_by_last_name from question q, user u where q.user_id = u.id) as question_user_join left outer join
            (select a.*, u.first_name as answer_posted_by_first_name, u.last_name as answer_posted_by_last_name from answer a, user u where a.user_id = u.id) as answer_user_join
            on question_user_join.id = answer_user_join.question_id where question_user_join.user_id = ${user_id} or answer_user_join.user_id = ${user_id}`;

        console.log(get_user_questions_answers);
        return await sql_queries.select_query(get_user_questions_answers);
    }
}

module.exports = question_queries;
