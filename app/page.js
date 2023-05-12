import { connectDB } from "@/util/database"

export default async function Home() {

  // DB 입출력 코드는 server component 안에서만 사용
  
  // const client = await connectDB
  // const db = client.db("forum")
  // let result = await db.collection('post').find().toArray()
  // console.log(result)

  return (
      <div></div>
  )
}
