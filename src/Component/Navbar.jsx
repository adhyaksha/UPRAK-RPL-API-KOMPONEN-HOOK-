import React from 'react';
import bg from '../assets/search.png';
import home from '../assets/home.png';
import account from '../assets/account.png';

export default function Navbar() {
    return (
        <div className='flex h-screen bg-[#020f2f] fixed'>


  {/* <aside className='w-20 flex items-center justify-center border-r-2  border-gray-600/50 relative shrink-0
  '>

    <nav>
        
      <ul className='flex flex-col gap-6 w-full items-center'>

        <li className='flex items-center group cursor-pointer gap-3

    w-12
    hover:w-40

    overflow-hidden

    rounded-xl

    duration-300'>
          <img
            src={bg} alt="" className='
            
            w-8 opacity-60 
            hover:opacity-100 hover:scale-110 duration-200 cursor-pointer
            
            '/>

            <span className='
            
      text-white
      whitespace-nowrap

      opacity-0
      group-hover:opacity-100

      duration-200'> Search </span>

        </li>

        <li className='flex items-center group cursor-pointer'>
          <img
            src={home} alt="" className='w-8 opacity-60 hover:opacity-100 hover:scale-110 duration-200 cursor-pointer'/>
        
        <span className='absolute
      left-15

      w-0
      overflow-hidden

      group-hover:w-28

      whitespace-nowrap

      bg-white/10
      rounded-xl

      text-white

      px-0
      group-hover:px-3

      py-2

      duration-300'> Home</span>
        </li>

      </ul>
    </nav>

  </aside> */}
  
  <aside
  className='
    w-20
    hover:w-35

    flex
    items-center

    border-r-2
    border-gray-600/50

    relative
    shrink-0

    duration-300
    
    overflow-hidden

  '
>

  <nav className='w-full'>

    <ul className='flex flex-col gap-3 py-6 px-4'>

        

      {/* SEARCH */}
      <li
        className='
          flex
          items-center
          group
          cursor-pointer

          rounded-xl

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

</aside>

</div>
    )
}