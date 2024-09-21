"use client"
import { ReactElement } from "react"
import Header from "./header"

interface Props {
    children? :ReactElement,
    noDisplay:string[]
}
interface DisplayProps {
    arr :ReactElement[],
    noDisplay:string[]
}
/**
 * 전체적 Layout 잡는 태그
 * @param noDisplay 소문자로만 작성
 * @returns 
 */
export default  function LayoutControl (props:Props) {
    let componentArr:React.ReactElement[] = [ <Header />]
    return(
        <div className="root">
            <Display arr={componentArr} noDisplay={props.noDisplay}/>
            {props.children}
        </div>
    )
}
function Display ({ arr, noDisplay }:DisplayProps) {
    return (
        <>
            {
                arr.map((el:any,i:number)=>{
                    const target = el.type.name.toLowerCase();
                    if (noDisplay.some(()=>el.type.name)) return <div className="empty" key={`${el.type.name}_${i}`}></div>
                    else return <div className="displayContent" key={`${el.type.name}_${i}`}>{el}</div>;
                })
            }
        </>
    )
}