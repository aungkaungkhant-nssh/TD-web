import { Pool, QueryResult } from 'pg';


const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});


export const query = <T extends QueryResult>(
    text: string,
    params?: unknown[]
): Promise<QueryResult<T>> => {
    return pool.query<T>(text, params);
};
