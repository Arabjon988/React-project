import React from 'react'
import { AiOutlineEllipsis } from "react-icons/ai";
// import { Link } from 'react'
import './Profile.css'
import { useState } from 'react';
import { FiSettings, FiSearch } from "react-icons/fi";
import Config from '../Config';

function Profile({ darkModeXolat, bar }) {
    const [openDiv, setOpenDiv] = useState(false)
    function openConfig(e) {
        const tableConfig = document.querySelector('.table__config')
        setOpenDiv(!openDiv)
        !openDiv ? tableConfig.classList.add('active') : tableConfig.classList.remove('active')
    }

    return (
        <div className={darkModeXolat === true ? "darkModeProfile" : "profile"}>
            <Config />
            <div className={bar === true ? "menuBar" : "barMenu"}>
                <li>Barcha xolatlar</li>
                <li>Kutilmoqda</li>
                <li>Imzolanganlar</li>
                <li>Rad etilganlar</li>

            </div>
            <div className="table">
                <div className="nav">
                    <div><FiSearch /><input type="text" className="search" placeholder='search' /></div>
                    <FiSettings className='open_icon' onClick={openConfig} />
                </div>
                <div>
                    <div className='table__part'>
                        <div className='checkbox'>
                            <input type="checkbox" />
                            <input type="checkbox" />
                            <input type="checkbox" />
                            <input type="checkbox" />
                            <input type="checkbox" />
                            <input type="checkbox" />
                            <input type="checkbox" />
                            <input type="checkbox" />
                        </div>
                        <ol>
                            <li>< AiOutlineEllipsis className='ellips' /></li>
                            <li>< AiOutlineEllipsis className='ellips' /></li>
                            <li>< AiOutlineEllipsis className='ellips' /></li>
                            <li>< AiOutlineEllipsis className='ellips' /></li>
                            <li>< AiOutlineEllipsis className='ellips' /></li>
                            <li>< AiOutlineEllipsis className='ellips' /></li>
                            <li>< AiOutlineEllipsis className='ellips' /></li>
                            <li>< AiOutlineEllipsis className='ellips' /></li>
                        </ol>
                        <ol>
                            <li>Status</li>
                            <li className="complated">completed</li>
                            <li className="incomplated">incompleted</li>
                            <li className="complated">completed</li>
                            <li className="incomplated">incompleted</li>
                            <li className="complated">completed</li>
                            <li className="complated">completed</li>
                            <li className="complated">completed</li>
                            <li className="complated">completed</li>
                            
                        </ol>
                        <ol>
                            <li>Doc type</li>
                            <li>Xisob faktura</li>
                            <li>Xisob faktura</li>
                            <li>Xisob faktura</li>
                            <li>Xisob faktura</li>
                            <li>Xisob faktura</li>
                            <li>Xisob faktura</li>
                            <li>Xisob faktura</li>
                            <li>Xisob faktura</li>
                        </ol>
                        <ol>
                            <li>Updated</li>
                            <li>06.04.2021</li>
                            <li>06.04.2021</li>
                            <li>06.04.2021</li>
                            <li>06.04.2021</li>
                            <li>06.04.2021</li>
                            <li>06.04.2021</li>
                            <li>06.04.2021</li>
                            <li>06.04.2021</li>

                        </ol>
                        <ol>
                            <li>Countrparty</li>
                            <li>AO O'ZBEKTELEKOM</li>
                            <li>AO O'ZBEKTELEKOM</li>
                            <li>AO O'ZBEKTELEKOM</li>
                            <li>AO O'ZBEKTELEKOM</li>
                            <li>AO O'ZBEKTELEKOM</li>
                            <li>AO O'ZBEKTELEKOM</li>
                            <li>AO O'ZBEKTELEKOM</li>
                            <li>AO O'ZBEKTELEKOM</li>
                            
                        </ol>
                        <ol>
                            <li>INN</li>
                            <li>223551223</li>
                            <li>223551223</li>
                            <li>223551223</li>
                            <li>223551223</li>
                            <li>223551223</li>
                            <li>223551223</li>
                            <li>223551223</li>
                            <li>223551223</li>
                        </ol>
                        <ol>
                            <li>Number & date</li>
                            <li>12354861630010 31.03.2021</li>
                            <li>12354861630010 31.03.2021</li>
                            <li>12354861630010 31.03.2021</li>
                            <li>12354861630010 31.03.2021</li>
                            <li>12354861630010 31.03.2021</li>
                            <li>12354861630010 31.03.2021</li>
                            <li>12354861630010 31.03.2021</li>
                            <li>12354861630010 31.03.2021</li>                            
                        </ol>
                        <ol>
                            <li>Number & agreement</li>
                            <li>-1 15.08.2018</li>
                            <li>-1 15.08.2018</li>
                            <li>-1 15.08.2018</li>
                            <li>-1 15.08.2018</li>
                            <li>-1 15.08.2018</li>
                            <li>-1 15.08.2018</li>
                            <li>-1 15.08.2018</li>
                            <li>-1 15.08.2018</li>
                        </ol>
                        <ol>
                            <li>Delivery cost</li>
                            <li>11 762.23</li>
                            <li>11 762.23</li>
                            <li>11 762.23</li>
                            <li>11 762.23</li>
                            <li>11 762.23</li>
                            <li>11 762.23</li>
                            <li>11 762.23</li>
                            <li>11 762.23</li>                            
                        </ol>
                        <ol>
                            <li>NDS amout</li>
                            <li>11 760.02</li>
                            <li>11 760.02</li>
                            <li>11 760.02</li>
                            <li>11 760.02</li>
                            <li>11 760.02</li>
                            <li>11 760.02</li>
                            <li>11 760.02</li>
                            <li>11 760.02</li>                            
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile

//<ImageLoader darkModeXolat2={darkModeXolat} />

// <BsFillBootstrapFill />