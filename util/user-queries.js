const sql_queries = require('./db-connection');

const user_queries = {
    insert_in_user_table: async ({firstName, lastName, password, email, date_of_birth, city, state, country, profile}) => {
        const insert_in_user = `Insert into user values (DEFAULT, '${firstName}','${lastName}','${password}', '${email}', '${date_of_birth}','${city}','${state}','${country}', DEFAULT, '${profile}')`;
        console.log(insert_in_user)
        return await sql_queries.insert_query(insert_in_user)
    }
}

module.exports = user_queries;
