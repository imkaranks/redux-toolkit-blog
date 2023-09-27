import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className='py-4'>
      <div className="w-11/12 max-w-4xl mx-auto flex items-center justify-between">
        <h1 className='text-xl font-bold'>Blog</h1>

        <nav>
          <ul className='flex items-center gap-6'>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/create'>Create</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;