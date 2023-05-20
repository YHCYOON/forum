import {connectDB} from "@/util/database";
import {ObjectId} from "mongodb";
import Comment from "@/app/detail/[id]/Comment";

export default async function Detail(props) {

    const db = (await connectDB).db("forum")
    let result = await db.collection('post').findOne({ _id : new ObjectId(props.params.id) })
    // console.log(props)

    return (
        <div>
            <h4>상세페이지</h4>
            <h5>😊글 제목😊</h5>
            <h4>{result.title}</h4>
            <h5>🧸글 내용🧸</h5>
            <h4>{result.content}</h4>
            <Comment _id={result._id.toString()}/>
        </div>
    )
}