import {connectDB} from "@/util/database";
import Link from "next/link";
import DetailLink from "@/app/list/DetailLink";

export default async function List() {

    const db = (await connectDB).db("forum")
    let result = await db.collection('post').find().toArray()

    return (
        <div className="list-bg">
            {
                result.map((a, i) => {
                    return(
                        <div className="list-item" key={i}>
                            <Link prefetch={false} href={'/detail/' + result[i]._id}>
                                <h4>{result[i].title}</h4>
                            </Link>
                            <Link href={'/edit/' + result[i]._id}>🍉수정🍉</Link>
                            {/*<DetailLink/>*/}
                            <p>{result[i].content}</p>
                        </div>
                    )
                })
            }

        </div>
    )
}