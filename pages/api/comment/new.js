import {connectDB} from "@/util/database";
import {ObjectId} from "mongodb";
import {authOptions} from "@/pages/api/auth/[...nextauth]";
import {getServerSession} from "next-auth";

export default async function handler(request, response) {
    let session = await getServerSession(request, response, authOptions)
    if (request.method == 'POST') {
        // console.log(JSON.parse(request.body))
        // 세션없을때, 빈칸처리
        let comment = {
            content : request.body.comment,
            parent : new ObjectId(request.body._id),
            author : session.user.email
        }

        const db = (await connectDB).db('forum')
        let result = await db.collection('comment').insertOne(comment)
        response.status(200).json('저장완료')
    }
}