import { Navigation } from "../components/Navigation"

export function Savings() {
  return (
    <>
      <div className='relative'>
        <Navigation/>
        <img src='https://catherineasquithgallery.com/uploads/posts/2023-01/1674331420_catherineasquithgallery-com-p-temno-serii-fon-gradient-foto-196.jpg' />
        <div className='absolute top-24 left-0 right-0 text-center text-white font-bold font-mono text-2xl pt-3 py-2 ml-auto mr-auto'>Savings</div>
        <div className='absolute space-y-3 top-40 left-0 right-0 text-white font-bold font-mono pt-3 bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r py-2 px-4 rounded-xl w-1/4 ml-auto mr-auto mt-3 shadow-2xl'>
          <div>Total funds</div>
          <div>100, 00 $$</div>
          <div className="bg-green-600 text-transparent rounded-lg">.</div>
            <div className="flex inline space-x-2">
              <button className="text-transparent bg-green-600 rounded-full px-2">.</button><label>Cards</label>
              <button className="text-transparent bg-slate-100 rounded-full px-2">.</button><label>Deposits</label>
              <button className="text-transparent bg-slate-100 rounded-full px-2">.</button><label>Investments</label>
              <button className="text-transparent bg-slate-100 rounded-full px-2">.</button><label>Pensions</label>
            </div>
        </div>
        <div className='absolute mt-8 top-80 left-0 right-0 text-center text-white font-bold font-mono text-2xl pt-3 py-2 ml-auto mr-auto'>Deposits</div>
        <div className='absolute mb-56 bottom-96 left-0 right-0 text-center text-white text-xl font-bold font-mono pt-3 bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r py-2 px-4 rounded-xl w-1/4 ml-auto mr-auto mt-3 shadow-2xl'>
          No deposits yet
        </div>
        <div className='absolute mb-36 bottom-96 left-0 right-0 text-center text-white font-bold font-mono text-2xl pt-3 py-2 ml-auto mr-auto'>Investments</div>
        <div className='absolute mb-20 bottom-96 left-0 right-0 text-center text-white text-xl font-bold font-mono pt-3 bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r py-2 px-4 rounded-xl w-1/4 ml-auto mr-auto mt-3 shadow-2xl'>
          No investments yet
        </div>
        <div className='absolute mb-2 bottom-96 left-0 right-0 text-center text-white font-bold font-mono text-2xl pt-3 py-2 ml-auto mr-auto'>Pensions</div>
        <div className='absolute mb-2 bottom-80 left-0 right-0 text-center text-white text-xl font-bold font-mono pt-3 bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r py-2 px-4 rounded-xl w-1/4 ml-auto mr-auto mt-3 shadow-2xl'>
          No pensions yet
        </div>
        <div className='absolute bottom-64 left-0 right-0 text-center text-white font-bold font-mono text-2xl pt-3 py-2 ml-auto mr-auto'>Tutorials</div>
        <div className="grid grid-cols-2 gap-10">
          <div className='absolute left-80 flex flex-col items-center bottom-14 text-center text-white text-xl font-bold font-mono pt-3 bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r py-2 px-4 rounded-xl w-1/4 ml-auto mr-auto mt-3 shadow-2xl'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z" />
            </svg>
            <div className="mt-2">How to start investing</div>
            <p className="text-sm opacity-50">Tutorial video how to start investing</p>
            <a className='active:scale-90 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 text-black py-2 px-3 mt-3 mb-2' href="https://www.youtube.com/watch?v=xLAxEYhXJSY" target="_blank">Watch</a>
          </div>
          <div className='absolute right-80 flex flex-col items-center bottom-14 text-center text-white text-xl font-bold font-mono pt-3 bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r py-2 px-4 rounded-xl w-1/4 ml-auto mr-auto mt-3 shadow-2xl'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 01-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004zM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 01-.921.42z" />
              <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v.816a3.836 3.836 0 00-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 01-.921-.421l-.879-.66a.75.75 0 00-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 001.5 0v-.81a4.124 4.124 0 001.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 00-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 00.933-1.175l-.415-.33a3.836 3.836 0 00-1.719-.755V6z" clipRule="evenodd" />
            </svg>
            <div className="mt-2">How to save money</div>
            <p className="text-sm opacity-50">Tutorial video how to save money</p>
            <a className='active:scale-90 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 text-black py-2 px-3 mt-3 mb-2' href="https://www.youtube.com/watch?v=L8W1tbEVyOM" target="_blank">Watch</a>
          </div>
        </div>
      </div >
    </>
  )
}