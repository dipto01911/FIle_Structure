
 const express=require('express')
 const app=express()
 app.use(express.json())
 const Routes=require('./src/routes/route')

 app.use('/api/v1/user',Routes)
 module.exports=app