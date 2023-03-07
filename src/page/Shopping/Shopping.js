import React, { useEffect, useState } from 'react'

import './Shopping.css'

const getLocalItem = () => {
    let shopping = localStorage.getItem('shopping')

    if (shopping) {
        return JSON.parse(localStorage.getItem('shopping'))
    }
    else {
        return []
    }
}

const Shopping = () => {

    const [shoppingInput, setShoppingInput] = useState('')
    const [shoppingList, setShoppingList] = useState(getLocalItem())

    useEffect(() => {
        localStorage.setItem('shopping', JSON.stringify(shoppingList));
    }, [shoppingList])

    const addShoppingList = () => {
        setShoppingList([...shoppingList, shoppingInput])
    }
    const clickHandler = () => {
        if (!shoppingInput) {
            alert("please add your list.")
        } else {
            addShoppingList(shoppingInput)
            setShoppingInput("")
        }
    }

    const deleteHandler = (id) => {
        const newShoppingList = [...shoppingList]
        newShoppingList.splice(id, 1)
        setShoppingList([...newShoppingList])
    }

    return (
        <>
            <div className='shoppingpage-mainconatoner'>
                <div className='shoppingpage-title'>
                    <p>Shopping Category</p>
                </div>
                <div className='shoppingpage-input-and-list'>
                    <div className='input-and-addbutton'>
                        <div className='input-tag'>
                            <input type='text' name='input' value={shoppingInput} placeholder='Enter your Task ..' onChange={(e) => { setShoppingInput(e.target.value) }} />
                        </div>
                        <div className='add-button'>
                            <button onClick={clickHandler}>Add</button>
                        </div>
                    </div>
                    <div className='todo-list'>
                        {
                            shoppingList.map((item, id) => {
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

export default Shopping