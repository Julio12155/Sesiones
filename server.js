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
    if (req.session.usuario){
        res.send(`Bienvenido ${req.session.usuario} al panel`)
    }else{
        res.status(401).send(`No tienenes sesion activa`)
    }
})

app.post('login',(req,res)=>{
    const{ usuario,password}=req.body
    if(usuario==='admin'&& password==='1234'){
        res.send('Inicio de sesion correcto')
    }else{
        res.status(401).send('Credenciales incorrectas')
    }
})
app.get('cerrar',(req,res)=>{
    req.session.destroy(err=>{
        if(err)return res.status(500).send('Error al cerrar sesion')
            res.send('sesion cerrada correctamente')
    })

})
app.listen(PORT,()=>console.log('Servidor escuchando en el puerto 3000'))