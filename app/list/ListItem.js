'use client'

import Link from "next/link";

export default function ListItem({result}) {
    return (
        <div>
            {
                result.map((a, i) => {
                    return(
                        <div className="list-item" key={i}>
                            <Link prefetch={false} href={'/detail/' + result[i]._id.toString()}>
                                <h4>{result[i].title}</h4>
                            </Link>
                            <p>{result[i].content}</p>
                            <Link href={'/edit/' + result[i]._id.toString()}>🍉수정🍉</Link>
                            <button onClick={() => {
                                fetch('/api/delete/' + result[i]._id.toString(), {
                                    method: 'DELETE'
                                }).then(response => {
                                   alert('삭제되었습니다.')
                                })
                            }}>🗑삭제🗑</button>
                        </div>
                    )
                })
            }
        </div>
    )
}