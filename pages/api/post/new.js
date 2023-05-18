import {connectDB} from "@/util/database";
import {getServerSession} from "next-auth";
import {authOptions} from "@/pages/api/auth/[...nextauth]";

export default async function handler(request, response) {
    let session = await getServerSession(request, response, authOptions)
    if (session) {
        request.body.author = session.user.email
    }
    if (request.method == 'POST') {
        console.log(request.body)

        if (request.body.title == '' ) {
            return response.status(500).json('제목 쓰세요')
        }
        try {
            const db = (await connectDB).db("forum")
            let result = await db.collection('post').insertOne(request.body)
            return response.redirect(302, '/list')
        } catch (error) {
            return response.status(500).json({message: error.message})
        }


    }
}