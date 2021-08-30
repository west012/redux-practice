import React from 'react'
import './agendaItem.css'
export const agendaItem = ({name, done, id}) => {
    return (
        <div className='agendaItem'>
            {/* checkbox */}
            {/* name */}
            <p className={done && 'agendaItem--done'}>{name}</p>
        </div>
    )
}
