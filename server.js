const express = require('express')

const hbs = require('hbs')

var app = express()

hbs.registerPartials(__dirname + "/views/partials")
app.set('view engine', 'hbs')

app.use(express.static(__dirname + "/public"))

app.get('/', (req,res)=>{
    res.render('home.hbs',{
        pageTitle: "How to become a communist.",
        welcomeMessage: "Click here to learn the ways of rejecting filthy capitalists."
    })
})

app.get('/communistGuide', (req,res)=>{
    res.render('communism.hbs',{
        pageTitle: "Welcome to the capitolist free communism guide.",
        welcomeMessage: "Communism is miles superior to inferior capitalists."
    })
})

app.listen(666, ()=>{
    console.log(`Server up on Port 666`)
})