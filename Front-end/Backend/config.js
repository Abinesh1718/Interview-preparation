const mongoose=require("mongoose")


const connectDatabase = () => {
mongoose.connect(process.env.DB_CONNECT).then(data=>console.log("Database Connectedddd")
).catch(err=>console.error(err)
)
  };
  
  module.exports = connectDatabase;