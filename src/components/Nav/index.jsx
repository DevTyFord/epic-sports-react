import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import './module.index.css';
import '../../assets/fontawesome/css/fontawesome.css';
import '../../assets/css/bootstrap.min.css';
import Logo from '../../assets/img/sport_logo.png';

// const logo = '../../assets/img/sport_logo.png';

function Nav () {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
              <div className='navbar-brand'>
                <img src={ Logo }></img>
              </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" role='button' data-bs-toggle='dropdown' href="#" aria-expanded='false'>Basketball</a>
            <ul className='dropdown-menu'>
                <li><a className='dropdown-item' href='#'>Boys Basketball</a></li>
                <li><a className='dropdown-item' href='#'>Girls Basketball</a></li>
            </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Soccer</a>
        </li>
        <li className='nav-item'>
            <a className='nav-link' href='#'>Hockey</a>
        </li>
        <li className='nav-item'>
            <a className='nav-link' href='#'>Football</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
)
}
export default Nav