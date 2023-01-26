
const express = require("express")
const bodyParser = require("body-parser")
const app = express();

const pageContacts = require("./view/contacts")
const aboutME = require("./view/about_me")
const shop = require("./view/shop")
const sponsors = require("./view/sponsors")


app.get('/', (request, response) => {

    res.send(`<h1>Привет я заголовок</h1>`)
})

app.get('/studend', (request, response) => {
    response.send(shop)
})




app.listen(8000, () => {
    console.log("Сервер запущен на порту 8000.")
})
