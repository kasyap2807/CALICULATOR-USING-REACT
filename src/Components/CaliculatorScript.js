import React, { useState } from 'react'
import './CaliculatorStyle.css'
function CaliculatorScript() {
        const [result,setResult] = useState("");
    const handelButton=(e)=>{
        setResult(result.concat(e.target.name));
    }
    const clear = () =>{
        setResult("");
    }
    const clearone =() =>{
        setResult(result.slice(0,-1));
    }
    const evalute =()=>{
        try{
        setResult(eval(result).toString());
        }
        catch(err){
            setResult('Error')
        }
    }
        return (
            <div className='main'>
              <h1>Caliculator</h1>
            <from className='item1'><input type='text' placeholder='type here' value={result}></input></from>
            <div className='keypad'>
              <button  id='clear' onClick={clear}>Clear</button>
              <button  id='c' onClick={clearone}>C</button>
              <button  name='/' onClick={handelButton}>/</button>
              <button  name='7' onClick={handelButton}>7</button>
              <button  name='8' onClick={handelButton}>8</button>
              <button  name='9' onClick={handelButton}>9</button>
              <button  name='*' onClick={handelButton}>X</button>
              <button  name='4' onClick={handelButton}>4</button>
              <button  name='5' onClick={handelButton}>5</button>
              <button  name='6' onClick={handelButton}>6</button>
              <button  name='-' onClick={handelButton}>-</button>
              <button  name='1' onClick={handelButton}>1</button>
              <button  name='2' onClick={handelButton}>2</button>
              <button  name='3' onClick={handelButton}>3</button>
              <button  name='+' onClick={handelButton}>+</button>
              <button  name='0' onClick={handelButton}>0</button>
              <button  name='.' onClick={handelButton}>.</button>
              <button id='equalls' onClick={evalute}>=</button>
              </div>
          </div>
        )
      }
      
      
      


export default CaliculatorScript