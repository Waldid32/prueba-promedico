import { createPool } from 'mysql2/promise'

const pool = createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    port: process.env.NEXT_PUBLIC_PORT,
    database: process.env.DATABASE,
})

export { pool }


