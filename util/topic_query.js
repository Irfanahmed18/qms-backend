const sql_queries = require('./db-connection');

const topic_queries = {
    get_topics: async () => {
        const selectFromTopic = `Select * from topic`;
        return await sql_queries.select_query(selectFromTopic)
    }
}

module.exports = topic_queries;
