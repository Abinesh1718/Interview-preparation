const { Pool } = require('pg')

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'users',
    password: 'Abinesh@1728',
    port: 5432
})


pool.connect().then(() => console.log("Pg Connected")
).catch((err) => console.log(err)
)

module.exports = pool