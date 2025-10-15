const express=require('express')
const SESSION=REQUIRE('express-session')

const app=express()
const PORT=3000

app.use(express.json())

app.use(session({
    secret:'miclave',
    resave:false,
    saveUnitialized:true,
    cookie:{secure:false}
}))
app.get('/inicio',(req,res)=>{
    if
    req.session
})