import React, { useState } from 'react'

import './Personal.css'

const Personal = () => {

    const [input, setInput] = useState('')
    const [list, setList] = useState([])

    const addList = () => {
        setList([...list, input])
    }
    const clickHandler = () => {
        if (!input) {
            alert("please add your list.")
        } else {
            addList(input)
            setInput("")
            console.log(list)
        }
    }

    const deleteHandler = (id) => {
        const newList = [...list]
        newList.splice(id, 1)
        setList([...newList])
    }

    return (
        <>
            <div className='personalpage-mainconatoner'>
                <div className='personalpage-title'>
                    <p>Personal Category</p>
                </div>
                <div className='personalpage-input-and-list'>
                    <div className='input-and-addbutton'>
                        <div className='input-tag'>
                            <input type='text' name='input' value={input} placeholder='Enter your Task ..' onChange={(e) => { setInput(e.target.value) }} />
                        </div>
                        <div className='add-button'>
                            <button onClick={clickHandler}>Add</button>
                        </div>
                    </div>
                    <div className='todo-list'>
                        {
                            list.map((item, id) => {
                                return (
                                    <p key={id}>{item}
                                        <span className='delete-icon'>
                                            <span className='line-icon'>
                                                <i class="fa-sharp fa-solid fa-pen-to-square"></i>
                                            </span>
                                            <i className="fa-solid fa-trash" onClick={() => { deleteHandler(id) }}></i>
                                        </span>
                                    </p>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Personal