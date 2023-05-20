'use client'

import {useEffect, useState} from "react";

export default function Comment(props) {
    let [comment, setComment] = useState('')

    // client component 에선 useEffect 사용 (보통 ajax, 타이머 등 넣음)
    useEffect(() => {
        fetch()
    },[]) // 1회만 실행

    return (
        <div>
            <div>댓글목록 보여줄부분</div>
            <input onChange={(e) => {
                setComment(e.target.value)
            }}/>
            <button onClick={() => {
                fetch('/api/comment/new', {
                    method: 'POST',
                    body: JSON.stringify({comment: comment, _id: props._id})
                })
            }}>댓글등록
            </button>
        </div>
    )
}