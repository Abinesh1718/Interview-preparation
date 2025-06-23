const express = require('express')
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt')
const pool = require('./db')
const jwt = require('jsonwebtoken')

const jwt_key = "Abinesh@1728   "
const app = express()
app.use(bodyParser.json())

app.post('/users/create', async (req, res) => {
    const { name, email, password, age } = req.body;
    const saltRunds = 10
    const hashedPassword = await bcrypt.hash(password, saltRunds)
    try {
        const result = await pool.query('INSERT INTO "user" (name , email, password , age) VALUES ($1,$2,$3,$4) RETURNING *', [name, email, hashedPassword, age])
        res.status(200).send(result.rows[0])
    } catch (error) {
        console.log(error);
    }
})


app.post('/users/login', async (req, res) => {
    const { email, password } = req.body

    const response = await pool.query('SELECT * FROM "user" WHERE email =$1', [email])
    if (response.rows.length === 0) return res.status(401).send("User Not Found")
    const user = response.rows[0];
    const isMatch = await bcrypt.compare(password, user.password)
    console.log(isMatch);
    if (!isMatch) return res.status(401).send("Invalid User")
    const token = await jwt.sign({
        id: user.id, email: user.email
    }, jwt_key, { expiresIn: '1hr' })
    res.status(200).json({ token: token })

})

const middleware = async (req, res, next) => {
    const authHeader = req.headers['authorization']
    console.log(authHeader);


    if (!authHeader) return res.status(401).send('Token Missing')
    const token = authHeader.split(' ')[1]

    try {
        const decode = jwt.verify(token, jwt_key)
        req.user = decode
        next()

    } catch (error) {
        return res.status(403).json({ error: 'Invalid or expired token' });

    }
}


app.get('/users/list', middleware, async (req, res) => {

    try {

        const result = await pool.query('SELECT * FROM "user" ')
        res.status(200).send(result.rows)
    } catch (error) {
        console.log(error)
    }
})


app.post('/users/search', middleware, async (req, res) => {
    const { search } = req.body
    try {
        const result = await pool.query('SELECT name , email,age FROM "user" WHERE name ILike $1', [`${search}%`])
        return res.status(200).send(result.rows)

    } catch (error) {
        return res.send(error)
    }
})



app.listen(8080, () => console.log("Server Stated"))