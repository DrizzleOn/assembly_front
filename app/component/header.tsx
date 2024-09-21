"use client"
import Link from "next/link";
import Dsbtn from "./btn";
interface Header {
    display?: boolean
}

export default function Header ({display}:Header) {
    return (
        <header id="header" className={`${!!!display? '':'noDisplay'}`}>
            <div className="content">
                <div className="leftBar">
                    <Link className="logo" href="/">
                        <img src="/img/logo.png" alt="logo" />
                    </Link>
                </div>
                <div className="rightBar">
                    <button className="searchBtn">
                        <img src="/img/search_icon.png" alt="search" />
                    </button>
                    <Dsbtn style={{background:'#215ae9',color:'#fff',border:'0'}} href="/login">
                        모임만들기
                    </Dsbtn>

                    <Dsbtn className="headerLoginBtn" >
                        회원가입 / 로그인
                    </Dsbtn>
                </div>
            </div>
        </header>
    )
}