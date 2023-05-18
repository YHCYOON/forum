import {connectDB} from "@/util/database";
import {ObjectId} from "mongodb";
import {getServerSession} from "next-auth";
import {authOptions} from "@/pages/api/auth/[...nextauth]";

export default async function handler(request, response) {
    if (request.method == 'POST') {
        let session = await getServerSession(request, response, authOptions)

        const db = (await connectDB).db('forum')
        let findResult = await db.collection('post').findOne(
            {_id: new ObjectId(request.body)}
        )

        if (findResult.author == session.user.email) {
            let deleteResult = await db.collection('post').deleteOne(
                {_id: new ObjectId(request.body)}
            )
            return response.status(200).json('삭제완료')
        } else {
            return response.status(500).json('작성자만 삭제완료')
        }
    }
}