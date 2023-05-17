import { connectDB } from "@/util/database"

export default async function Home() {

  // DB 입출력 코드는 server component 안에서만 사용
  
  // const client = await connectDB
  // const db = client.db("forum")
  // let result = await db.collection('post').find().toArray()
  // console.log(result)

  // 데이터 캐싱
  // await fetch('/URL', {cache : 'force-cache'})
  // 실시간 데이터 중요해서 매번 새로 요청할때
  // await fetch('/URL', {cache : 'no-store'})
  // 60초마다 캐싱된 데이터 갱신
  // await fetch('/URL', {next : {revalidate : 60}})

  return (
      <div></div>
  )
}
