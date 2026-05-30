import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import account from '../assets/account.png';

export default function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [emails, setEmails] = useState([])




    useEffect(() => {
    const getEmails = async () => {
        const response = await fetch(
            'https://jsonplaceholder.typicode.com/users'
        );

        const data = await response.json();

        setEmails(data);
    };

    getEmails();
}, []);


    const masuk = async () => {
        try {
             const response = await fetch(
                'https://jsonplaceholder.typicode.com/users'
            );

            const data = await response.json();

            if (email.trim() === '') {
    alert('Silahkan pilih email');
    return;
}

            const user = data.find(
                (item) => item.email.toLowerCase() === email.toLowerCase()
            );

            if (user) {
                console.log('Email ditemukan');
                console.log(user);
            } else {
                console.log('Email tidak ditemukan');
            }

        } catch (error) {
            console.error(error);
        }
    };
        
    

    return (
        <div className='h-screen flex items-center justify-center'>
            <section className='flex flex-col gap-5 bg-slate-800 p-12 rounded-lg w-96 '>
                <header className='flex flex-col items-center gap-3 '>
                <img src={account} alt="" className='w-10'/>
                <h1>silahkan login terlebih dahulu</h1>
                </header>
                <input list='email-list' value={email} onChange={(e) => setEmail(e.target.value)} className='border border-slate-600 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500' type="text" placeholder="Email"/>
                <datalist id="email-list">
    {emails.map((item) => (
        <option
            key={item.id}
            value={item.email}
        />
    ))}
</datalist>
                <button onClick={masuk} className='bg-blue-500 hover:bg-blue-600 transition rounded-md py-3 font-medium cursor-pointer'>LOGIN</button>
                {/* const masuk = () => {
                  if (email.trim() === '') {
        alert('Silahkan pilih email');
        return;
    }

    const user = emails.find(
        (item) => item.email.toLowerCase() === email.toLowerCase()
    );

    if (user) {
        navigate('/home');
    } else {
        alert('Email tidak ditemukan');
    }
                } */}
            </section>
            
        </div>
    );
}
