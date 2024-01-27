import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import './module.index.css';

function Nav () {
    return (
        <div className="nav-menu">
            <ul className="ul-nav">
                <li className='active'>Home</li>
                <li className='active'>
                    <a href='#'>Football</a>
                </li>
                <li>
                    <a href='#'>Soccer</a>
                </li>
                <li>
                    <a href='#'>Basketball</a>
                    <span classname='nav-dropdown'>
                        <li>
                            <a href='#'>Boys Basketball</a>
                        </li>
                        <li>
                            <a href='#'>Girls Basketball</a>
                        </li>
                    </span>
                </li>
            </ul>
        </div>
    )
}
export default Nav