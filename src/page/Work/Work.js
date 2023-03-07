import React, { useEffect, useState } from 'react'

import './Work.css'

const getLocalItem = () => {
    let work = localStorage.getItem('work')

    if (work) {
        return JSON.parse(localStorage.getItem('work'))
    }
    else {
        return []
    }
}

const Work = () => {

    const [workInput, setWorkInput] = useState('')
    const [workList, setWorkList] = useState(getLocalItem())

    useEffect(() => {
        localStorage.setItem('work', JSON.stringify(workList));
    }, [workList])

    const addWorkList = () => {
        setWorkList([...workList, workInput])
    }
    const clickHandler = () => {
        if (!workInput) {
            alert("please add your list.")
        } else {
            addWorkList(workInput)
            setWorkInput("")
        }
    }

    const deleteHandler = (id) => {
        const newWorkList = [...workList]
        newWorkList.splice(id, 1)
        setWorkList([...newWorkList])
    }

    return (
        <>
            <div className='workpage-mainconatoner'>
                <div className='workpage-title'>
                    <p>Work Category</p>
                </div>
                <div className='workpage-input-and-list'>
                    <div className='input-and-addbutton'>
                        <div className='input-tag'>
                            <input type='text' name='input' value={workInput} placeholder='Enter your Task ..' onChange={(e) => { setWorkInput(e.target.value) }} />
                        </div>
                        <div className='add-button'>
                            <button onClick={clickHandler}>Add</button>
                        </div>
                    </div>
                    <div className='todo-list'>
                        {
                            workList.map((item, id) => {
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

export default Work