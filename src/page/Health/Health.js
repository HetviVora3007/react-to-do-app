import React, { useEffect, useState } from 'react'

import './Health.css'

const getLocalItem = () => {
    let health = localStorage.getItem('health')

    if (health) {
        return JSON.parse(localStorage.getItem('health'))
    }
    else {
        return []
    }
}


const Health = () => {

    const [healthInput, setHealthInput] = useState('')
    const [healthList, setHealthList] = useState(getLocalItem())

    useEffect(() => {
        localStorage.setItem('health', JSON.stringify(healthList));
    }, [healthList])

    const addHealthList = () => {
        setHealthList([...healthList, healthInput])
    }
    const clickHandler = () => {
        if (!healthInput) {
            alert("please add your list.")
        } else {
            addHealthList(healthInput)
            setHealthInput("")
        }
    }

    const deleteHandler = (id) => {
        const newHealthList = [...healthList]
        newHealthList.splice(id, 1)
        setHealthList([...newHealthList])
    }

    return (
        <>
            <div className='healthpage-mainconatoner'>
                <div className='healthpage-title'>
                    <p>Health Category</p>
                </div>
                <div className='healthpage-input-and-list'>
                    <div className='input-and-addbutton'>
                        <div className='input-tag'>
                            <input type='text' name='input' value={healthInput} placeholder='Enter your Task ..' onChange={(e) => { setHealthInput(e.target.value) }} />
                        </div>
                        <div className='add-button'>
                            <button onClick={clickHandler}>Add</button>
                        </div>
                    </div>
                    <div className='todo-list'>
                        {
                            healthList.map((item, id) => {
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

export default Health