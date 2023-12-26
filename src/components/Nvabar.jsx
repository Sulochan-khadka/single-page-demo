import React from 'react';
// import { GiHamburgerMenu } from 'react-icons/gi';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoSearch } from 'react-icons/io5';
import './navbar.css';

const Nvabar = () => {
  return (
    <div className='navbar-container'>
      <div className='non-title'>
        <div className='menu-container'>
          <RxHamburgerMenu />
          <div className='menu'>MENU</div>
        </div>
        <div className='search-container'>
          <div className='search'>Search</div>
          <div className='search-icon'>
            <IoSearch />
          </div>
        </div>
        <div className='location'>
          <div>JANESS GLOBAL</div>
          CHANGE LOCATION {'>'}
        </div>
        <div className='line'></div>
        <div className='language'>
          ENGLISH
          <div className='light'>CHANGE LANGUAGE{'>'}</div>
        </div>
      </div>
      <div className='title'>
        VIKING &nbsp;MEDICAL <div>MARKETING</div>
      </div>
    </div>
  );
};

export default Nvabar;
