import {connectDB} from "@/util/database";
import {ObjectId} from "mongodb";

export default async function handler(request, response) {
    const db = (await connectDB).db("forum")
    console.log(request)
    console.log(request.body)
    await db.collection('post').deleteOne({
        _id : new ObjectId(request.body._id)
    })
    response.status(200)
}