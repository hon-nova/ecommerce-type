import express, {Request, Response} from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import cors from "cors"

const app = express()
const port=3333
// Use CORS middleware
app.use(cors());
app.use(cors({
   origin: 'http://localhost:8080', // Frontend URL
}));


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

app.get('/',(req:Request,res:Response)=>{
   res.sendFile(path.join(__dirname,'../frontend/public/index.html'))
})

app.listen(port,()=>{
   console.log(`server is running at url:: http://localhost:${port}`)
})