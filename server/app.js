const express = require('express')
const app = express()
require('./Database/connection')
const port = process.env.PORT || 3000;
const loginSchema = require('./Models/login')
app.use(express.json())

const createUser =  ()=>{
    app.post('https://backend-production-a13b.up.railway.app/user',async (req,res)=>{
        try{
            const user = new loginSchema(req.body)
            const createU = await user.save()
            res.status(201)
            res.send(createU)
        }
        catch (e){
            res.status(400)
            res.send(e)
        }
    })
}
const getUser = ()=>{
    app.get("/login",async (req,res)=>{
        try{
            const userData = await loginSchema.find({})
            console.log(userData)
            res.send(userData)
            res.status(200)
        }
        catch (e) {
            res.send(e)
            res.status(400)
        }
    })
}
const deleteUser = ()=>{

}

getUser()
createUser()
app.listen(port, "0.0.0.0", function () {
    // ...
    console.log("listening on the port" + port);
});
