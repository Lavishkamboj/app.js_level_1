let express=require("express")
let {MongoClient}=require("mongodb")
let app=express();
let port=process.env.PORT||8000;
require('dotenv').config()
let path=require('path')
let user_data;

let bodyParser=require('body-parser')
app.use(bodyParser.urlencoded({extended:true}));
//checking if get request is running properly
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'));
})
//listening the post request
app.listen(port,()=>{
    console.log("server is running on port "+port);
})

//connction with mongo db
let uri="mongodb+srv://lavishkamboj16:lavishkamboj16...@cluster0.1dmvo.mongodb.net/demo_data_1?retryWrites=true&w=majority&appName=Cluster0"

async function main(){
    let client=new MongoClient(uri);

        await client.connect();
        console.log("Connected to MongoDB");
        // await  listDatabases(client);
        let db=client.db("demo_data_1");
        let collection=db.collection("smartphones_demo_data")
        collection.insertMany([user_data])
        // let data=await collection.find({}).toArray()
        // console.log(data[0].transactions[0].amount);

    }


app.use(express.json())
app.post("/form_data",(req,res)=>{
console.log("i am handling post reqquest in express")
main();
user_data=req.body
console.log(user_data);
})