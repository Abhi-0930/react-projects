import React, { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'
const Manager = () => {
    const ref = useRef()
    const passwordRef = useRef()
    const [form, setform] = useState({ site: "", username: "", password: "" })
    const [passwordArray, setpasswordArray] = useState([])
    useEffect(() => {
        let passwords = localStorage.getItem('passwords');

        if (passwords) {
            setPasswordArray = JSON.parse(passwords)
        }

    }, [])
    const showPassword = () => {
        // alert('Please enter your password')
        passwordRef.current.type = "text"
        if (ref.current.src.includes("images/hide.png")) {
            ref.current.src = "images/show.png"
            passwordRef.current.type = "text"
        }
        else {
            ref.current.src = "images/hide.png"
            passwordRef.current.type = "password"
        }

    }

    const savePassword = () => {

        setpasswordArray([...passwordArray, form])
        localStorage.setItem('password', JSON.stringify([...passwordArray, form]));
        console.log(...passwordArray, form)
    }

    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }
    return (

        <>
            <div className=" bg-slate-100 mycontainer">
                <h1 className='text-4xl font-bold text-center'>
                    <span className='text-green-700'>&lt;</span>
                    <span>Password</span>
                    <span className='text-green-700'> Manager &gt;</span>
                </h1>
                <p className='text-green-900 text-lg text-center'>Your own Password Manager</p>
                <div className=' flex flex-col p-4 text-black  gap-3 items-center'>
                    <input value={form.site} onChange={handleChange} className='rounded-lg border border-green-500 w-full p-4 py-1 ' type="text" name='site' placeholder='Enter website url' />
                    <div className="flex w-full justify-between gap-8">
                        <input value={form.username} onChange={handleChange} className='rounded-lg border border-green-500 w-full p-4 py-1' type="text" name='username' placeholder='Enter Username' />
                        <div className="relative">
                            <input ref={passwordRef} value={form.password} onChange={handleChange} className='rounded-lg border border-green-500 px-5 py-1 ' type="password"
                                name='password' placeholder='Enter Password' />
                            <span className='absolute right-0 mx-2 py-1 cursor-pointer ' onClick={showPassword}>
                                <img ref={ref} src="images/show.png" alt="" className='w-7' />
                            </span>
                        </div>
                    </div>
                    <button onClick={savePassword} className='flex justify-center items-center bg-green-500 rounded-full px-4 py-2 my-4 w-fit hover:bg-green-600 gap-2'>
                        <lord-icon
                            src="https://cdn.lordicon.com/jgnvfzqg.json"
                            trigger="hover"
                        >
                        </lord-icon>
                        Add Password</button>

                </div>
                <div className="passwords">
                    <h2 className='font-bold py-4 text-xl'>Your Passwords</h2>
                    {passwordArray.length === 0 && <div> No passwords to show </div>}
                    {passwordArray.length != 0 &&
                        <table className="table-auto w-full">
                            <thead className='bg-green-800 text-white'>
                                <tr>
                                    <th className='py-2'>Site</th>
                                    <th className='py-2'>Username</th>
                                    <th className='py-2'>Password</th>
                                    <th className='py-2'>Actions</th>
                                </tr>
                            </thead>
                            <tbody className='bg-green-100'>
                                {passwordArray.map((item, index) => {
                                    return <tr key={index}>
                                        <td className='py-2 text-center w-32'>
                                            <a href={item.site} target='_blank'>{item.site}</a>
                                            
                                        </td>
                                        <td className='py-2 text-center w-32'><a href={item.username}>{item.username}</a></td>
                                        <td className='py-2 text-center w-32'><a href={item.password}>{item.password}</a></td>
                                    </tr>
                                })}
                            </tbody>
                        </table>}
                </div>
            </div>
        </>
    )
}

export default Manager
