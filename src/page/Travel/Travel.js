import React, { useEffect, useState } from 'react'

import './Travel.css'

const getLocalItem = () => {
    let travel = localStorage.getItem('travel')

    if (travel) {
        return JSON.parse(localStorage.getItem('travel'))
    }
    else {
        return []
    }
}

const Travel = () => {

    const [travelInput, setTravelInput] = useState('')
    const [travelList, setTravelList] = useState(getLocalItem())

    useEffect(() => {
        localStorage.setItem('travel', JSON.stringify(travelList));
    }, [travelList])

    const addTravelList = () => {
        setTravelList([...travelList, travelInput])
    }
    const clickHandler = () => {
        if (!travelInput) {
            alert("please add your list.")
        } else {
            addTravelList(travelInput)
            setTravelInput("")
        }
    }

    const deleteHandler = (id) => {
        const newTravelList = [...travelList]
        newTravelList.splice(id, 1)
        setTravelList([...newTravelList])
    }

    return (
        <>
            <div className='travelpage-mainconatoner'>
                <div className='travelpage-title'>
                    <p>Travel Category</p>
                </div>
                <div className='travelpage-input-and-list'>
                    <div className='input-and-addbutton'>
                        <div className='input-tag'>
                            <input type='text' name='input' value={travelInput} placeholder='Enter your Task ..' onChange={(e) => { setTravelInput(e.target.value) }} />
                        </div>
                        <div className='add-button'>
                            <button onClick={clickHandler}>Add</button>
                        </div>
                    </div>
                    <div className='todo-list'>
                        {
                            travelList.map((item, id) => {
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

export default Travel