import Link from "next/link";
import LoginButton from "../login/loginButton";
interface Header {
    display?: boolean
}

export default function Header ({display}:Header) {
    return (
        <header id="header" className={`${!!!display? '':'noDisplay'}`}>
            <div className="leftBar">
                <Link className="logo" href="/">
                    Assembly
                </Link>
            </div>
            <div className="rightBar">
                <LoginButton className="headerLoginBtn" color="" />
            </div>
        </header>
    )
}