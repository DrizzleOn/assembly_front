import test from './page.module.css';
export default function Test () {
    let arr = [1,1,1,1,1,1,1,1,1,1,1,1]
    
    return(
        <div className={`${test.container} ${test.grid}`}>
            {
                arr.map((el,i)=>{
                    return(
                        <div key={`${el}_${i}`} className={test.box}>

                        </div>
                    )
                })
                
            }
        </div>
    )
}