import React from 'react'
import './addEntry.css'

function AddEntry() {
    return (
        <div className='addEntry-container'>
            <form className='addEntry-form' action="">
                <div>
                    <input type="number" name="" id="" placeholder='Enter Ammount' />
                    <input type="date" name="" id="" />
                </div>
                <div style={{display: "flex"}}>
                    <div style={{display: "flex", flexDirection: "column"}}>
                        <label htmlFor="">Expense type</label>
                        <select name="" id="">
                            <option value="">select</option>
                            <option value="">Home Rent</option>
                            <option value="">Bike Petrol</option>
                            <option value="">Home Essential</option>
                            <option value="">Rationt</option>
                        </select>
                    </div>
                    <div style={{display: "flex", flexDirection: "column"}}>
                        <label htmlFor="">Income Source</label>
                        <select name="" id="">
                            <option value="">select</option>
                            <option value="">Bhai</option>
                            <option value="">Papa</option>
                            <option value="">Renu</option>
                            <option value="">Sister</option>
                        </select>
                    </div>
                </div>
                <button>Add</button>
            </form>
        </div>
    )
}

export default AddEntry