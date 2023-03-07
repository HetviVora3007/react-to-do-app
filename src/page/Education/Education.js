import React, { useEffect, useState } from 'react'

import './Education.css'

const getLocalItem = () => {
    let education = localStorage.getItem('education')

    if (education) {
        return JSON.parse(localStorage.getItem('education'))
    }
    else {
        return []
    }
}

const Education = () => {

    const [educationInput, setEducationInput] = useState('')
    const [educationList, setEducationList] = useState(getLocalItem())

    useEffect(() => {
        localStorage.setItem('education', JSON.stringify(educationList));
    }, [educationList])

    const addEducationList = () => {
        setEducationList([...educationList, educationInput])
    }
    const clickHandler = () => {
        if (!educationInput) {
            alert("please add your list.")
        } else {
            addEducationList(educationInput)
            setEducationInput("")
        }
    }

    const deleteHandler = (id) => {
        const newEducationList = [...educationList]
        newEducationList.splice(id, 1)
        setEducationList([...newEducationList])
    }

    return (
        <>
            <div className='educationpage-mainconatoner'>
                <div className='educationpage-title'>
                    <p>Education Category</p>
                </div>
                <div className='educationpage-input-and-list'>
                    <div className='input-and-addbutton'>
                        <div className='input-tag'>
                            <input type='text' name='input' value={educationInput} placeholder='Enter your Task ..' onChange={(e) => { setEducationInput(e.target.value) }} />
                        </div>
                        <div className='add-button'>
                            <button onClick={clickHandler}>Add</button>
                        </div>
                    </div>
                    <div className='todo-list'>
                        {
                            educationList.map((item, id) => {
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

export default Education