import express, {Request, Response} from 'express'
import path from 'path'
import bodyParser from 'body-parser'

const app = express()
const port=3333

app.use(express.static(path.join(__dirname,'../../dist')))

app.use(bodyParser.json())

app.post('/register',(req:Request,res:Response)=>{
   const {username,email,password}=req.body
   console.log(`username::${username}`)
   console.log(`email::${email}`)
   //save data into the db here

   // test
  
   res.json({ message: `Registration successful with username::${username}, email::${email}!` });
})
app.get('/',(req,res)=>{
   res.sendFile(path.join(__dirname,'../../index.html'))
})

app.listen(port,()=>{
   console.log(`server is running at url:: http://localhost:${port}`)
})