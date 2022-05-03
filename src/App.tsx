import * as React from 'react';
import { Link } from 'react-router-dom';
import Main from './Main';
export default function App() {
  return (
    <>

      <div className="topNav">
        <ul>
          <li><Link to='/' className="link">Home</Link></li>
          <li><Link to='/topics' className="link">Topics</Link></li>
          <li><Link to='/settings' className="link">Settings</Link></li>
          <div className="text-white float-end p-3"> Good Morning, Emily! </div>
        </ul>
        <hr />

      </div>
      <Main />

    </>
  )
}