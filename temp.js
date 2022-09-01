import { useEffect, useState } from "react";
import axios from 'axios'
const Temporaray = ({name,color})=>{
    // const {name,color } = props;
    const [timer,setTimer] = useState(0);
    const [timer1,setTimer1] = useState(0);
    const [name,setName]  = useState("");
    const [country,settemo]= useState("");

    const handleSubmit = ()=>{
        setTimer(timer+1);
    }
    const handleSubmitform = (e)=>{
        e.preventDefault();
        fetchName(name)
    }

    const fetchName = async (name)=>{
        await axios.get(`fksfsfsjdnfjsdfksdknsdf/id=${name}`)
        .then((res)=>{
            settemo(res)
        })
        .catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        
        
    },[timer])

    let val;

    if(timer%2==0){
        val = <p>cghfghf</p>
    }


    return(
        <>  
            <div>
                {name}
            </div>
            <div>
                {color}
            </div>
            <span>{timer}</span>
            {/* <button onClick={handleSubmit}>
                click here
            </button> */}
            {country}

            <setTimerValue handleSubmit={handleSubmit} setname={settemo}/>
            <form onSubmit={handleSubmitform(e)}>
            <button type="submit">
            </button>
           
            <input type="text" placeholder="enter name" onChange={
                (e)=>{
                    setName(e.target.value)
                }
            } value={name}></input>
    </form>
           <span> {timer%5==0 ? "yes":"no"}</span>
           <span> {timer%2==0 && {fetchName}}</span>
           {val}
        </>
    )
}

export default Temporaray;




setTimerValue = (props)=>{


    // <Temporary 
    //     name="mayank"
    //     color="red"
    // />

    <button onClick={props.handleSubmit}>
    click here
</button>
<button onClick={props.settemo("mayank")}>
    name change
</button>
}






