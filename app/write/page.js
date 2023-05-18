import {getServerSession} from "next-auth";

export default function Write() {

    // if (유저 세션 체크)

    return (
        <div className="p-20">
            <h4>글작성</h4>
            <form action="/api/post/new" method="POST">
                <input name="title" placeholder="글제목"></input>
                <input name="content" placeholder="글내용"></input>
                <button type="submit">버튼</button>
            </form>
        </div>
    )
}