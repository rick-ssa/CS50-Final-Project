import React, {useState,useEffect} from 'react';
import './dateInput.css';


export default function DateInput(props) {
    const [month,setMonth] = useState(props.monthDefault ? props.monthDefault : '01')
    const [day,setDay] = useState(props.dayDefault ? props.dayDefault : '01')
    const [year,setYear] = useState(props.yearDefault ? props.yearDefault : '2000')
    const [borderColor,setBorderColor] =useState(props.style.borderColor)


    useEffect(()=>{
        if(validDateYear(year) && validDateMonth(month) && validDateDay(day,month,year)){
            let d = new Date(year,month-1,day)
            props.getDate(d)
        } 
        
    })
    function isNumber(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }

    function validDateYear(year){
        if(!isNumber(year)){
            setBorderColor('red')
            return false
        }
        return true
    }

    function validDateMonth(month){
        if(!isNumber(month) || month<1 || month>12){
            setBorderColor('red')
            return false
        }
        return true
    }

    function validDateDay(day, month, year){
        if(!isNumber(day)){
            setBorderColor('red')
            return false
        }

        const maxDay=[31,28,31,30,31,30,31,31,30,31,30,31]
        
        if(year%4===0){
            maxDay[1]=29
        }

        if(day<1 || day>maxDay[month-1]){
            setBorderColor('red')
            return false;
        }
        return true
    }

    
    function passNumber(type,e){
       
        switch(type){
            case 'y':
                if(validDateYear(e.target.value)){
                    setYear(e.target.value);            
                } else {
                    e.preventDefault()
                }
                break;
            case 'm':
                if(validDateMonth(e.target.value)){
                    setMonth(e.target.value);
                } else {
                    e.preventDefault()
                }
                break;
            case 'd':
                if(validDateDay(e.target.value,month,year)){
                    setDay(e.target.value);
                } else {
                    e.preventDefault()
                }
                break;
            default:
                return;
        }
        
    }

    function selection(e){
        e.target.select()   
    }
    return (
        
        <div style={{marginTop:props.style.marginTop,marginLeft:props.style.marginLeft}}>
            <label>
                {props.label}
            </label>
            <div 
                className='inputDate' 
                style={{borderColor:borderColor}}
            >
                <input 
                    id={props.ids.month}
                    maxLength='2'
                    type="text" 
                    name="month"
                    className="month"
                    value={month}
                    onFocus = {e=>selection(e)}
                    onChange={e=>passNumber('m',e)}  
                    style= {{color:props.style.color}}  
                />
                <span style= {{color:props.style.color}}>/</span>
                <input 
                    id={props.ids.day}
                    maxLength='2'
                    type="text" 
                    name="day"
                    className="day"
                    value={day}
                    onFocus = {e=>selection(e)}
                    onChange={e=>passNumber('d',e)}
                    style= {{color:props.style.color}}
                />
                <span style= {{color:props.style.color}}>/</span>
                <input 
                    id={props.ids.year}
                    maxLength='4'
                    type="text" 
                    name="year"
                    className="year"
                    value={year}
                    onChange = {e=>passNumber('y',e)}
                    onFocus = {e=>selection(e)}
                    style= {{color:props.style.color}}
                />
            </div>
        </div>
        
    )
}