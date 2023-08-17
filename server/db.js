const mongoose = require('mongoose') ;

const database_link = 'mongodb+srv://admin:adityasoni1017@cluster0.4mitqeh.mongodb.net/?retryWrites=true&w=majority' ;


const connectDB  = () =>{
    mongoose.connect(database_link)
  .then(function(db){
    console.log("db connected ") ;
   

})
.catch(function(err){
    console.log(err) ;

})
} ;

module.exports  = connectDB;