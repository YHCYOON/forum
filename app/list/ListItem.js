'use client'

import Link from "next/link";

export default function ListItem({result}) {
    return (
        <div>
            {
                result.map((a, i) => {
                    return (
                        <div className="list-item" key={i}>
                            <Link prefetch={false} href={'/detail/' + result[i]._id.toString()}>
                                <h4>{result[i].title}</h4>
                            </Link>
                            <p>{result[i].content}</p>
                            <Link href={'/edit/' + result[i]._id.toString()}>🍉수정🍉</Link>
                            <span className="list-btn" onClick={(event) => {
                                fetch('/api/post/delete', {
                                    // 서버에 전송할 데이터
                                    method: 'POST',
                                    body: result[i]._id
                                }).then((r) => r.json())
                                .then(() => {
                                    event.target.parentElement.style.opacity = 0
                                    // 1초후에 실행시켜줌
                                    setTimeout(() => {
                                        event.target.parentElement.style.display = 'none'
                                    }, 1000)
                                })
                                // fetch('/api/abc/name=kim')
                            }}>🗑삭제🗑</span>
                        </div>
                    )
                })
            }
        </div>
    )
}