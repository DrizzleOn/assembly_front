import Link from "next/link";
import login from './login.module.css';
export interface LoginButton {
    color?:string
    className?:string
}
export default function LoginButton ({color,className}:LoginButton) {
    return(
        <button className={`${login.loginButton}${!!!className? "" : ` ${className}`}`} style={{backgroundColor:`${color}`}}>
            <Link href="/login">
                로그인
            </Link>
        </button>
    )
}