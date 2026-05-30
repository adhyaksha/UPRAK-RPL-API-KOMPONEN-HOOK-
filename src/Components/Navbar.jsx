import React from 'react';
import bg from '../assets/search.png';
import home from '../assets/home.png';
import account from '../assets/account.png';
import logout from '../assets/logout.png';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
    const navigate = useNavigate()

    return (
        <div className='flex h-screen bg-[#020f2f] fixed'>

      {/* aside bagian satu */}
      
      


  {/* aside bagian dua*/}
  
  <aside
  className='
    group

    w-20
    hover:w-35

    flex
    flex-col

    border-r-2
    border-gray-600/50

    relative
    shrink-0

    duration-300
    overflow-hidden
    
    '
>
        <h1 className='mt-3 text-base text-white flex justify-center whitespace-nowrap hover:cursor-default group-hover:text-2xl duration-300 transition-all'>Socialy</h1>

  <nav className='flex-1 flex items-center'>


    
      



    <ul className='flex flex-col gap-3 py-6 px-4 w-full'>


      {/* SEARCH */}
      <li
        className='
          flex
          items-center
          group
          cursor-pointer

          rounded-xl
          gap-3
          p-2

          hover:bg-white/10

          duration-300
        '
      >

        <img
          src={bg}
          alt=""
          className='
            block
            w-8
            h-8
            shrink-0

            opacity-60

            hover:opacity-100
            hover:scale-105

            duration-200

          '
        />

        <span
          className='
            text-white
            whitespace-nowrap

            opacity-0

            group-hover:opacity-100

            duration-200
          '
        >
          Search
        </span>

      </li>




      {/* HOME */}
      <li
        className='
          flex
          items-center
          group
          cursor-pointer

          gap-3

          rounded-xl

          p-2

          hover:bg-white/10

          duration-300
        '
      >

        <img
          src={home}
          alt=""
          className='
          block
            w-8
            h-8
            shrink-0

            opacity-60

            hover:opacity-100
            hover:scale-105

            duration-200
          '
        />

        <span
          className='
            text-white
            whitespace-nowrap

            opacity-0

            group-hover:opacity-100

            duration-200
          '
        >
          Home
        </span>

      </li>

    </ul>

  </nav>

  <figure
  className='
    

    flex
    items-center
    

    p-2

    mx-4
    mb-4

    rounded-xl

    cursor-pointer
    group

    hover:bg-white/10

    duration-300
  '
>

  <img
    src={logout}
    alt=""
    className='
      w-8
      h-8
      shrink-0
      opacity-60
      
      hover:opacity-100
      hover:scale-105

      duration-200
    '

    onClick={() => navigate ('/LoginPages')}
  />

  <span
    className='
    
    ml-3

      text-white
      whitespace-nowrap

      opacity-0
      group-hover:opacity-100

      duration-200
    '
  >
    Logout
  </span>

</figure>
</aside>

</div>
    )
}