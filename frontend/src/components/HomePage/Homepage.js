import React from 'react'

import Login from '../Authentication/Login';
import Register from '../Authentication/Register';

function Homepage() {
  return (
    <div>
        <Login/>
        <Register/>
    </div>
  )
}

export default Homepage