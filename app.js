const express=require('express');
const mongoose=require('mongoose');
const PORT=8900;
const app=express();


app.set('view engine','ejs');
app.set('views','./views');
app.use(express.json());

app.use(express.urlencoded({extended:false}));
// db connection
const connectionString="mongodb://127.0.0.1:27017/mongocrud10";
mongoose
  .connect(connectionString)
  .then(res=> console.log("Database connected"))
  .catch(err=> console.log("Error : "+err))
//db end 
const mainRoutes=require('./index');
app.use("/",mainRoutes);
app.listen(PORT,(err)=>{
    if(err) throw err;
    else console.log(`Work On ${PORT}`)
})