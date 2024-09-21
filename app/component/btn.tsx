"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
interface Button {
    style?:object;
    className?:string;
    onClick?:()=>void;
    children?:React.ReactElement|string|any;
    href?:string;
}

/**
 * 
 * @param style style 속성
 * @param className class 이름 
 * @param onClick onClick evnet
 * @param children 자식노드
 * @param href onClick을 설정할 경우 설정 X 필수옵션이 아니지만 onClick이 없는 경우 error 를 뱉음
 * @returns 
 */
export default function Dsbtn ({style,className,onClick,children,href}:Button) {
    const [link,setLink] = useState(href)
    let att = {
        className : `dsbtn${!!!className? "" : ` ${className}`}`,
        onClick,
        style,
    }
    let text = !!children ? children : 'dsbtn';
    useEffect(()=>{
        if (!!!href) {
            console.error(`Location: ${window.location.pathname}`,'dsbtn need href');
            setLink('#')
        }
    },[])
    return(
        <button 
           {...att}
        >
            {
                !!onClick ?
                text :
                <Link href={ `${link}` }>
                    { text } 
                </Link>
            }
        </button>
    )
}