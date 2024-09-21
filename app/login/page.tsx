"use client"
import login from './login.module.css'
import Dsbtn from '../component/btn';
export default function Login () {
    function Click () {
        alert('클릭')
    }
    return(
        <div className={login.loginBox}>
            <h1>
                Login
            </h1>
            <Input name='uid' label='ID'/>
            <Input name='upw' label='PW'/>
            <Dsbtn className={login.loginPageBtn} onClick={Click}/>
        </div>
    )    
}
type InputType = {
    name:string;
    type?:string;
    label?:string
}
/**
 * 
 * @param name 필수* input tag attr name, id / label tag attr for
 * @param type default text input tag attr type
 * @param label label tag children 
 * @returns 
 */
function Input(props:InputType) {
    return(
        <div className={login.inputBox}>
            {/* <label htmlFor={props.name}>
                { !!props.label ? props.label : '' }
            </label> */}
            <input id={props.name} name={props.name} type={ !!props.type? props.type : 'text' } placeholder={props.label} />
        </div>
    )
}