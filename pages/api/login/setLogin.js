import { connectionMongoDB } from "@/src/libs/mongoConnection"
import Login from "../../../src/models/login"

export default async function handler (req, res){
    if(req.method !== "POST"){
        res.status(405).send({msg: "Only Post request are accepted"})
    }
    const {task} = req.body

    try{
        await connectionMongoDB()
        Login.create({task}).then((data) =>{
            console.log(data)
            res.status(201).send(data)
        })
    }catch(err){
        console.log(err)
        res.status(500).send({msg: "Some thing is wrong"})
    }
}