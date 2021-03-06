const express=require('express')
const app=express()
const task=require('./routes/task')
const connectDb= require('./db/connect')
require('dotenv').config()
const notFound=require('./middleware/not_found')
const errorHandlerMiddleWare=require('./middleware/errorhandler')
//middleware
app.use(express.static('./public'))
app.use(express.json())
app.use('/api/v1/tasks',task)
app.use(notFound);
app.use(errorHandlerMiddleWare);

const port =3000;

const start=async ()=>{
try{
  await connectDb(process.env.MONGO_URL)
  app.listen(port,console.log(`server is listening on port ${port}`))
}
catch(err){
  console.log(err)  
}
}
start()


//app.get('api/v1/tasks')        -get all the tasks
//app.post('api.v1/tasks')       -create a new task
//app.get('api/v1/tasks/:id')    -get single task
//app.patch('api/v1/tasks:id)    -update task
//app.delete('api/v1/tasks/id')  -delete task