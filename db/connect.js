const mongoose=require('mongoose')

const connectionString='mongodb+srv://Elias:mamaye123@cluster0.9opoi.mongodb.net/03-TASK-MANAGER?retryWrites=true&w=majority'
const connectDb=(url)=>{
return mongoose.connect(connectionString,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false,
    useUnifiedTopology:true

})
}

module.exports=connectDb

