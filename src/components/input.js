import React, {useState} from 'react'
import './input.css'
import {useDispatch} from 'react-redux'
import saveItem from '../features/todoSlice'



const Input = () => {
    const [input, setInput] = useState('')
    const dispatch =useDispatch( )

    const saveTo =() => {
        console.log(`Adding ${input}`)
        
        dispatch(saveItem({
            item: input,
            added: true,
            id: Date.now() 
        }))
    }
    return (
        <div className= 'input'>
            <input type="text" value ={input} onChange={e=>setInput(e.target.value)}/>
            <button onClick={saveItem}>Search</button>
        </div>
    )
}

export default Input
