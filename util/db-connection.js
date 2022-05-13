const mysql = require('mysql')
const util = require('util')

const get_connection1 = () => mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'pwd12345',
    database: 'question_management_system'
});

const get_connection = () => mysql.createConnection({
    host: 'qms.cmi6nmr1ncfr.us-east-1.rds.amazonaws.com',
    user: 'root',
    password: '8sXajzEGGz9RG74',
    database: 'question_management_system'
});

const sql_queries = {
    insert_query : async (query) => {
        const connection = get_connection();
        const myQuery = util.promisify(connection.query).bind(connection);
        try {
            const data = await myQuery(query);
            return data;
        } catch (err) {
            return err;
        }
        finally {
            connection.end();
        }
    },
    delete_query : async (query) => {
        const connection = get_connection();
        const myQuery = util.promisify(connection.query).bind(connection);
        try {
            const data = await myQuery(query);
            return data;
        } catch (err) {
            return err;
        }
        finally {
            connection.end();
        }
    },
    select_query : async (query) => {
        const connection = get_connection();
        const myQuery = util.promisify(connection.query).bind(connection);
        let result = [];
        try {
            const rows = await myQuery(query);
            result.push(...rows);
            return result;
        }
        finally {
            connection.end();
        }
    }
}

module.exports = sql_queries