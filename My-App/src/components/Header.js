import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='ui fixed menu'>
      <div className='ui container center'>
        <h2 style={{ margin: '10px 20px 10px 0'}}>My Products Manager</h2>
        <Link to="/" className='ui button blue' style={{ margin: '10px 20px 10px 0'}}>HOME</Link>
        <Link to="admin" className='ui button blue' style={{ margin: '10px 20px 10px 0'}}>ADMIN</Link>
      </div>
    </div>
  )
}

export default Header;