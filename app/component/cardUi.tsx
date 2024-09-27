"use client"
import card from './card.module.css'
interface Card {
    children:React.ReactElement|any
}
export default function Card () {
    return (
        <div className={`${card.card}`}>
            <div className={`${card.textBox}`}>
                <h2>
                    제목입니다.
                </h2>
                <p>
                    글입니다.
                </p>
            </div>
        </div>
    )
}