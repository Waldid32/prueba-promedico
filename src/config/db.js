import { createPool } from 'mysql2/promise'

const pool = createPool({
    host: 'localhost',
    user: 'promedico',
    password: 'Promedico23*',
    port: 3306,
    database: 'prueba-promedico'
})

export { pool }


