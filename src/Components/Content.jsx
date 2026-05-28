import { useNavigate } from 'react-router-dom';
import React from 'react';
import logos from '../assets/logos.png';

export default function Content() {
    const navigate = useNavigate()
    return (
        <div className=''>
            <main className='items-center justify-center flex flex-col h-screen'>
                <img src={logos} alt="" onClick={() => navigate('/LoginPages')} className='w-90 cursor-pointer'/>
                <p>pencet logo nya</p>
            </main>
        </div>
    )
}
