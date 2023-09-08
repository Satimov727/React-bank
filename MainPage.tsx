import React, { useState } from 'react'
import { Window } from '../components/Window'
import { Navigation } from '../components/Navigation'

export function MainPage() {

  const [window, setWindow] = useState(true)

  const [save, setSave] = useState({ email: '', password: '' })

  return (
    <>
      <div className='absolute flex top-72 left-80 z-10'>

        {window && <Window onClose={() => setWindow(true)}>

          <form>

            <input className="hover:animate-pulse text-white font-mono py-2 px-4 mb-2 w-full outline-0 bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r" name='email' type="email" placeholder="Enter your email..." value={save.email} onChange={e => setSave({ ...save, email: e.target.value })} />

            <input className="hover:animate-pulse text-white font-mono py-2 px-4 mb-2 w-full outline-0 bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r" name='password' type="password" placeholder="Enter your password..." value={save.password} onChange={e => setSave({ ...save, password: e.target.value })} />

            <button className="hover:animate-pulse font-mono block py-2 px-7 bg-gradient-to-b from-gray-600 to-gray-300 bg-gradient-to-r m-auto active:scale-90" type="submit" onClick={() => setWindow(false)} disabled={!save.email || !save.password}>Save</button>

          </form>

        </Window>}

      </div>

      <div className='relative animate-fade-up animate-duration-[1000ms] animate-ease-out animate-delay-[3500ms]'>


        <Navigation />


        <img src='https://catherineasquithgallery.com/uploads/posts/2023-01/1674331420_catherineasquithgallery-com-p-temno-serii-fon-gradient-foto-196.jpg' />

        <form className="absolute top-24 left-0 right-0 border flex flex-row w-[223px] ml-auto mr-auto shadow-lg border-orange-600">

          <input className="outline-none bg-gray-800 text-white" type="text" placeholder="Search for..." />

          <button type="reset" className="py-2 px-2 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 font-bold font-mono text-xl text-white h-full">

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>

          </button>

        </form >
        
        <div className='absolute top-48 ml-10 text-white text-xl font-bold font-mono pt-3 bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r py-2 px-4 rounded-xl w-1/4 mt-3 shadow-2xl'>

          <div>Wallet</div>

          <div className="text-lg text-white flex flex-row font-mono pt-3 border-b border-slate-600 pb-3">

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
            </svg>

            <div className="text-center pl-5">10000.00 $$</div>

          </div>

          <div className="text-lg text-white flex flex-row font-mono pt-3">

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
            </svg>

            <div className="text-center pl-5">3000.00 $$</div>

          </div>
          
        </div>

      </div >
    </>
  )
}