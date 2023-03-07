import React, { useEffect, useState } from 'react'

import './Personal.css'

const getLocalItem = () => {
    let personal = localStorage.getItem('personal')

    if (personal) {
        return JSON.parse(localStorage.getItem('personal'))
    }
    else {
        return []
    }
}

const Personal = () => {

    const [personalInput, setPersonalInput] = useState('')
    const [personalList, setPersonalList] = useState(getLocalItem())

    useEffect(() => {
        localStorage.setItem('personal', JSON.stringify(personalList));
    }, [personalList])

    const addPersonalList = () => {
        setPersonalList([...personalList, personalInput])
    }
    const clickHandler = () => {
        if (!personalInput) {
            alert("please add your list.")
        } else {
            addPersonalList(personalInput)
            setPersonalInput("")
        }
    }

    const deleteHandler = (id) => {
        const newPersonalList = [...personalList]
        newPersonalList.splice(id, 1)
        setPersonalList([...newPersonalList])
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
                            <input type='text' name='input' value={personalInput} placeholder='Enter your Task ..' onChange={(e) => { setPersonalInput(e.target.value) }} />
                        </div>
                        <div className='add-button'>
                            <button onClick={clickHandler}>Add</button>
                        </div>
                    </div>
                    <div className='todo-list'>
                        {
                            personalList.map((item, id) => {
                                return (
                                    <p key={id}>{item}
                                        <span className='delete-icon'>
                                            <span className='line-icon'>
                                                <i class="fa-sharp fa-solid fa-pen-to-square" ></i>
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