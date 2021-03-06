require('dotenv').config()

const PORT = process.env.PORT

// Baza podataka
const password = process.env.ATLAS_PASS
const dbname = 'poruke-api'
const DB_URI = `mongodb+srv://IvnaVukovic:${password}@cluster0.zhmhj.mongodb.net/${dbname}?retryWrites=true&w=majority`

module.exports = {PORT, DB_URI}