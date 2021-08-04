import React, { useState } from 'react'
import { FiX } from "react-icons/fi";
import './Config.css'





function Config() {
    const [checkOpen, setCheckOpen] = useState(true)
    const openDiv = (e) => {
        const config = document.querySelector('.config')
        config.classList.remove('activeConfig')
    }
    const openInput = (e) => {
        if (checkOpen === false) {
            setCheckOpen(true)
        }
        else {
            setCheckOpen(false)
        }
    }

    return (
        <div className="config__container">
            <div className="table__config">
                <ul className="config__collection" >
                    <li className="config__colletionItem">
                        <input type='checkbox' className="apple-switch" id="" onClick={openInput} />
                        Names
                    </li>
                    <li className="config__colletionItem">
                        <input type='checkbox' className="apple-switch" id="" onClick={openInput} />
                        Surname
                    </li>
                    <li className="config__colletionItem">
                        <input type='checkbox' className="apple-switch" id="" onClick={openInput} />
                        Address
                    </li>
                    <li className="config__colletionItem">
                        <input type='checkbox' className="apple-switch" id="" onClick={openInput} />
                        Address
                    </li>
                    <li className="config__colletionItem">
                        <input type='checkbox' className="apple-switch" id="" onClick={openInput} />
                        Address
                    </li>
                    <li className="config__colletionItem">
                        <input type='checkbox' className="apple-switch" id="" onClick={openInput} />
                        Address
                    </li>
                    <li className="config__colletionItem">
                        <input type='checkbox' className="apple-switch" id="" onClick={openInput} />
                        Address
                    </li>
                </ul>
            </div>

            <FiX onClick={openDiv} />

        </div>
    )
}

export default Config