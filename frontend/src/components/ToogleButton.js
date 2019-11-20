import React, {useState,useEffect} from 'react'
import './ToogleButton.css'

export default function ToogleButton(props) {
    const [clas, setClas] = useState(props.enable)
    const [toogled,setToogled]=useState(false)    


    useEffect(()=>{
        function changeEnable(){
            setClas(props.enable)
        }
        changeEnable()
    },[props.enable])


    function handleClass() {
        if(props.enable!=='disabled'){
            if(toogled===false){
                setToogled(true)
                setClas('toogleOn')
                props.onTgl(true)
            } else {
                setToogled(false)
                setClas('toogleOff')
                props.onTgl(false)
            }
        }
        
    }

    return (
        <button 
            className={clas}
            onClick={()=>{
                handleClass()
            }}
        >
            {props.value}
        </button>
    )
}