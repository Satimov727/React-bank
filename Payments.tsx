import { Navigation } from "../components/Navigation"
import { QRWindow } from "../components/QRWindow"
import { CurrencyWindow } from "../components/CurrencyWindow"
import { HomeWindow } from "../components/HomeWindow"
import { TroikaWindow } from "../components/TroikaWindow"
import { PWindow } from "../components/PWindow"
import { CountriesWindow } from "../components/CountriesWindow"
import { UserWindow } from "../components/UserWindow"
import { MobileWindow } from "../components/MobileWindow"
import { GovWindow } from "../components/GovWindow"
import { EdWindow } from "../components/EdWindow"
import { useState, useEffect } from "react"
import { CurrencyInput } from "../components/CurrencyInput"
import { HomeAlert } from "../components/HomeAlert"
import { TroikaAlert } from "../components/TroikaAlert"
import { TransferAlert } from "../components/TransferAlert"
import { JapUSAlert } from "../components/JapUSAlert"
import { UserAlert } from "../components/UserAlert"
import { EdAlert } from "../components/EdAlert"
import axios from "axios";

export function Payments() {

  const [save2, setSave2] = useState({ address: '', password: '', idNumber: '', balance: '', UST: '' })

  
  const [QRwindow, setQRwindow] = useState(false)


  const [currencyWindow, setcurrencyWindow] = useState(false)


  const [homeWindow, sethomeWindow] = useState(false)


  const [troikaWindow, setTroikaWindow] = useState(false)


  const [Pwindow, setPwindow] = useState(false)


  const [Cwindow, setCwindow] = useState(false)


  const [userWindow, setuserWindow] = useState(false)


  const [mobileWindow, setmobileWindow] = useState(false)


  const [govWindow, setgovWindow] = useState(false)


  const [edwindow, setedWindow] = useState(false)


  const [amount1, setAmount1] = useState(1);


  const [amount2, setAmount2] = useState(1);


  const [currency1, setCurrency1] = useState('USD')
  

  const [currency2, setCurrency2] = useState('EUR')


  const [rates, setRates] = useState([])


  const data = ['Between contacts', 'To another country', 'User 1', 'User 2']


  const data2 = ['8-916-394-61-27', '8-903-664-42-23', '8-800-117-97-95', '8-916-241-64-39']


  const [val, setVal] = useState('')


  useEffect(() => {
    axios.get('https://api.apilayer.com/fixer/latest?base=USD&apikey=8El09v1tgPaDSKNR0TGCUrzqXBE6AdDI')
      .then(response => {
        setRates(response.data.rates);
      })
  }, []);


  useEffect(() => {
    if (!!rates) {
      function init() {
        handleAmount1Change(1);
      }
      init();
    }
  }, [rates]);


  function format(number) {
    return number.toFixed(2);
  }


  function handleAmount1Change(amount1) {
    setAmount2(format(amount1 * rates[currency2] / rates[currency1]));
    setAmount1(amount1);
  }


  function handleCurrency1Change(currency1) {
    setAmount2(format(amount1 * rates[currency2] / rates[currency1]));
    setCurrency1(currency1);
  }


  function handleAmount2Change(amount2) {
    setAmount1(format(amount2 * rates[currency1] / rates[currency2]));
    setAmount2(amount2);
  }


  function handleCurrency2Change(currency2) {
    setAmount1(format(amount2 * rates[currency1] / rates[currency2]));
    setCurrency2(currency2);
  }


  return (
    <>
      <div className='absolute flex top-48 left-80 z-10'>

        
        {QRwindow && <QRWindow onClose={() => setQRwindow(false)}>

          <form>

            <img className="opacity-70" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/QR-code-obituary.svg/768px-QR-code-obituary.svg.png" />
            
            <p className="text-white text-xl text-center font-mono pt-3">I don't know where it leads (xd)</p>

            <p className="text-sm text-center text-white opacity-50">♂️ 300 bucks ♂️ will be debited from your account</p>

          </form>

        </QRWindow>}

      </div>

      
      <div className='absolute flex top-64 left-80 z-10'>

        {currencyWindow && <CurrencyWindow onClose={() => setcurrencyWindow(false)}>

          <form>

            <CurrencyInput
              onAmountChange={handleAmount1Change}
              onCurrencyChange={handleCurrency1Change}
              currencies={Object.keys(rates)}
              amount={amount1}
              currency={currency1} />
            
            <CurrencyInput
              onAmountChange={handleAmount2Change}
              onCurrencyChange={handleCurrency2Change}
              currencies={Object.keys(rates)}
              amount={amount2}
              currency={currency2} />

          </form>

        </CurrencyWindow>}

      </div>

      
      <div className='absolute flex top-64 left-80 z-10'>

        {homeWindow && <HomeWindow onClose={() => sethomeWindow(false)}>

          <form>

            <input className="hover:animate-pulse text-white font-mono py-2 px-4 mb-2 w-full outline-0 bg-gray-700" name='address' type="text" placeholder="Enter your address..." value={save2.address} onChange={e => setSave2({ ...save2, address: e.target.value })} />

            <input className="hover:animate-pulse text-white font-mono py-2 px-4 mb-2 w-full outline-0 bg-gray-700" name='password' type="password" placeholder="Enter your password..." value={save2.password} onChange={e => setSave2({ ...save2, password: e.target.value })} />

            <button className="hover:animate-pulse font-mono block py-2 px-7 bg-gradient-to-r from-green-200 via-green-300 to-blue-500 m-auto active:scale-90" type="submit" onClick={() => HomeAlert('')} disabled={!save2.address || !save2.password}>Save</button>

          </form>

        </HomeWindow>}

      </div>


      <div className='absolute flex top-48 left-80 z-10'>

        {troikaWindow && <TroikaWindow onClose={() => setTroikaWindow(false)}>

          <form>

            <img className="opacity-70" src="https://www.moscowmap.ru/_public/article-img/1-karta-trojka-0.jpg" />

            <div className="text-white font-mono text-center text-lg mt-3">Your id is: {save2.idNumber}</div>

            <div className="text-white font-mono text-center text-lg mt-3">Your balance is: {save2.balance}.00 $$</div>

            <input className="hover:animate-pulse text-white font-mono py-2 px-4 mb-2 mt-3 w-full outline-0 bg-gray-700" name='number' type="number" placeholder="Enter troika number..." value={save2.idNumber} onChange={e => setSave2({ ...save2, idNumber: e.target.value })} />

            <input className="hover:animate-pulse text-white font-mono py-2 px-4 mb-2 mt-3 w-full outline-0 bg-gray-700" name='balance' type="number" placeholder="Enter amount..." value={save2.balance} onChange={e => setSave2({ ...save2, balance: e.target.value })} />

            <button className="hover:animate-pulse font-mono block py-2 px-7 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 m-auto mt-3 active:scale-90" type="submit" onClick={() => TroikaAlert('')} disabled={!save2.idNumber || !save2.balance}>Save</button>

          </form>

        </TroikaWindow>}

      </div>


      <div className='absolute flex top-48 left-80 z-10'>

        {Pwindow && <PWindow onClose={() => setPwindow(false)}>

          <form>

            <div className="bg-gray-700 rounded text-lg text-white font-mono h-12 flex flex-row">
              <p className="text-lg text-white font-mono pt-2.5 ml-2">1000.00 $$ - {save2.balance}.00 $$</p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="bg-red-600 rounded w-10 h-3/4 mt-auto mb-auto ml-auto mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
              </svg>
            </div>

            <div className="text-white m-auto mt-4 text-center bg-gray-950 rounded-full pt-2 w-10 h-10 flex flex-col items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
              </svg>
            </div>

            <div className="bg-gray-700 mt-4 rounded text-lg text-white font-mono h-12 flex flex-row">
              <p className="text-lg text-white font-mono pt-2.5 ml-2">{save2.balance}.00 $$</p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="bg-green-700 rounded w-10 h-3/4 mt-auto mb-auto ml-auto mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
              </svg>
            </div>
            
            <p className="text-white text-lg font-mono text-center pt-5">How much?</p>

            <input onChange={e => setSave2({ ...save2, balance: e.target.value })} type="number" value={save2.balance} className="bg-gray-700 mt-5 outline-0 w-[460px] rounded text-sm text-white font-mono h-12 flex flex-row" placeholder="0.00 $$"/>
      
            <button onClick={() => TransferAlert('')} disabled={!save2.balance} className="bg-gradient-to-r py-2 px-4 from-sky-400 to-cyan-300 mt-5 mx-44 text-lg font-mono text-center active:scale-90">Transfer</button>

          </form>

        </PWindow>}

      </div>


      <div className='absolute flex top-48 left-80 z-10'>


        {Cwindow && <CountriesWindow onClose={() => setCwindow(false)}>

          <form>

            <div className="bg-gray-900 rounded text-lg text-white font-mono h-12 flex flex-row border-b border-slate-700 w-full">
              
              <p className="text-lg text-white font-mono pt-2.5 ml-2">Japan</p>

              <p className="text-center pt-2.5 pl-32">{save2.balance}.00 $$</p>

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-2/3 mt-auto mb-auto ml-auto mr-3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 7.5l3 4.5m0 0l3-4.5M12 12v5.25M15 12H9m6 3H9m12-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>

            </div>

            <div className="bg-gray-900 rounded text-lg text-white font-mono h-12 flex flex-row ">

              <p className="text-lg text-white font-mono pt-2.5 ml-2">USA</p>

              <p className="text-center pt-2.5 pl-36 ml-0.5">{save2.UST}.00 $$</p>

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-2/3 mt-auto mb-auto ml-auto mr-3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>

            </div>
            
            <p className="text-white text-xl font-mono text-center pt-5">Transfer</p>

            <input onChange={e => setSave2({ ...save2, balance: e.target.value })} type="number" value={save2.balance} className="bg-gray-700 mt-5 outline-0 w-[460px] rounded text-sm text-white font-mono h-12 flex flex-row" placeholder="0.00 $$" />

            <input onChange={e => setSave2({ ...save2, UST: e.target.value })} type="number" value={save2.UST} className="bg-gray-700 mt-5 outline-0 w-[460px] rounded text-sm text-white font-mono h-12 flex flex-row" placeholder="0.00 $$" />
            
            <button onClick={() => JapUSAlert('')} disabled={!save2.balance || !save2.UST} className="bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500 py-2 px-4 mt-5 mx-44 text-lg font-mono text-center active:scale-90">Transfer</button>

          </form>

        </CountriesWindow>}

      </div>


      <div className='absolute flex top-64 left-80 z-10'>

        {userWindow && <UserWindow onClose={() => setuserWindow(false)}>

          <form>

            <div className="flex flex-col ml-auto mr-auto items-center rounded-full bg-gray-950 text-white px-6 py-6 w-32 h-30">

              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
              </svg>

              <p className="text-sm text-center opacity-50 w-16 h-10 pt-2">User</p>

              <p className="text-sm text-center opacity-50 w-16 h-4">{save2.balance}.00 $$</p>

            </div>

            <input onChange={e => setSave2({ ...save2, balance: e.target.value })} type="number" value={save2.balance} className="bg-gray-700 mt-5 outline-0 w-[460px] rounded text-sm text-white font-mono h-12 flex flex-row" placeholder="0.00 $$" />
            
            <button onClick={() => UserAlert('')} disabled={!save2.balance} className="bg-gradient-to-r from-red-400 via-gray-300 to-blue-500 py-2 px-4 mt-5 mx-44 text-lg font-mono text-center active:scale-90">Transfer</button>

          </form>

        </UserWindow>}

      </div>


      <div className='absolute flex top-48 left-80 z-10'>


        {mobileWindow && <MobileWindow onClose={() => setmobileWindow(false)}>

          <form className=" top-24 left-0 right-0 border flex flex-row w-[223px] ml-auto mr-auto shadow-lg border-indigo-500">

            <input onChange={(a) => setVal(a.target.value)} list="data2" className="outline-none bg-gray-800 text-white" type="text" placeholder="Search for..." />

            <datalist id="data2">
              {data2.map((e) => <option>{e}</option>)}
            </datalist>

            <button type="reset" className="py-2 px-2 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 font-bold font-mono text-xl text-white h-full">

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>

            </button>

          </form >

          <p className="text-center text-white font-mono text-lg pt-3">{val}</p>

        </MobileWindow>}

      </div>


      <div className='absolute flex top-48 left-80 z-10'>


        {govWindow && <GovWindow onClose={() => setgovWindow(false)}>

          <div className="text-white font-mono text-center text-xl">Taxes</div>

          <img className="pt-5" src="https://preview.redd.it/4qrw9tgps6p31.png?auto=webp&s=821b7f48b797c0d3ae5c2db2d6de834464227a6a" />

          <div className="text-white font-mono text-center text-xl pt-3">Dont pay taxes</div>
          
        </GovWindow>}

      </div>


      <div className='absolute flex top-48 left-80 z-10'>


        {edwindow && <EdWindow onClose={() => setedWindow(false)}>

          <input onChange={e => setSave2({ ...save2, balance: e.target.value })} type="number" value={save2.balance} className="bg-gray-700 mt-5 outline-0 w-[460px] rounded text-sm text-white font-mono h-12 flex flex-row" placeholder="0.00 $$" />
          
          <div className="text-lg text-center text-white pt-3">You want to transfer {save2.balance}.00 $$</div>

          <button onClick={() => EdAlert('')} disabled={!save2.balance} className="bg-gradient-to-r from-green-300 to-purple-400 py-2 px-4 mt-5 mx-44 text-lg font-mono text-center active:scale-90">Transfer</button>

        </EdWindow>}

      </div>

      
      <div className='relative'>

        
        <Navigation />

        
        <img src='https://catherineasquithgallery.com/uploads/posts/2023-01/1674331420_catherineasquithgallery-com-p-temno-serii-fon-gradient-foto-196.jpg' />

        
        <div className='absolute top-24 left-0 right-0 text-center text-white font-bold font-mono text-2xl pt-3 py-2 ml-auto mr-auto'>Payments and transfers</div>

        
        <div className="grid grid-cols-4">

          <button onClick={() => setQRwindow(true)} className='active:scale-90 absolute w-[400px] flex flex-col items-center space-y-3 top-40 left-10 text-white font-bold font-mono pt-3 bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r py-2 px-2 rounded-xl mt-3 shadow-2xl'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M6 3a3 3 0 00-3 3v1.5a.75.75 0 001.5 0V6A1.5 1.5 0 016 4.5h1.5a.75.75 0 000-1.5H6zM16.5 3a.75.75 0 000 1.5H18A1.5 1.5 0 0119.5 6v1.5a.75.75 0 001.5 0V6a3 3 0 00-3-3h-1.5zM12 8.25a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5zM4.5 16.5a.75.75 0 00-1.5 0V18a3 3 0 003 3h1.5a.75.75 0 000-1.5H6A1.5 1.5 0 014.5 18v-1.5zM21 16.5a.75.75 0 00-1.5 0V18a1.5 1.5 0 01-1.5 1.5h-1.5a.75.75 0 000 1.5H18a3 3 0 003-3v-1.5z" />
              </svg>
              Pay by QR-code
          </button>

        </div>

        
          <button onClick={() => setcurrencyWindow(true)} className='active:scale-90 absolute w-[400px] flex flex-col items-center space-y-3 top-40 left-96 ml-32 text-white font-bold font-mono pt-3 bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r py-2 px-2 rounded-xl mt-3 shadow-2xl'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path d="M21 6.375c0 2.692-4.03 4.875-9 4.875S3 9.067 3 6.375 7.03 1.5 12 1.5s9 2.183 9 4.875z" />
              <path d="M12 12.75c2.685 0 5.19-.586 7.078-1.609a8.283 8.283 0 001.897-1.384c.016.121.025.244.025.368C21 12.817 16.97 15 12 15s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.285 8.285 0 001.897 1.384C6.809 12.164 9.315 12.75 12 12.75z" />
              <path d="M12 16.5c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 001.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 001.897 1.384C6.809 15.914 9.315 16.5 12 16.5z" />
              <path d="M12 20.25c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 001.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 001.897 1.384C6.809 19.664 9.315 20.25 12 20.25z" />
            </svg>
            Currency converter
          </button>
        

          <button onClick={() => sethomeWindow(true)} className='active:scale-90 absolute w-[400px] flex flex-col items-center space-y-3 top-40 right-96 mr-32 text-white font-bold font-mono pt-3 bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r py-2 px-2 rounded-xl mt-3 shadow-2xl'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path d="M19.006 3.705a.75.75 0 00-.512-1.41L6 6.838V3a.75.75 0 00-.75-.75h-1.5A.75.75 0 003 3v4.93l-1.006.365a.75.75 0 00.512 1.41l16.5-6z" />
              <path fillRule="evenodd" d="M3.019 11.115L18 5.667V9.09l4.006 1.456a.75.75 0 11-.512 1.41l-.494-.18v8.475h.75a.75.75 0 010 1.5H2.25a.75.75 0 010-1.5H3v-9.129l.019-.006zM18 20.25v-9.565l1.5.545v9.02H18zm-9-6a.75.75 0 00-.75.75v4.5c0 .414.336.75.75.75h3a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75H9z" clipRule="evenodd" />
            </svg>
            Home
          </button>
        

          <button onClick={() => setTroikaWindow(true)} className='active:scale-90 absolute w-[400px] flex flex-col items-center space-y-3 top-40 right-10 text-white font-bold font-mono pt-3 bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r py-2 px-2 rounded-xl mt-3 shadow-2xl'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M4.5 3.75a3 3 0 00-3 3v10.5a3 3 0 003 3h15a3 3 0 003-3V6.75a3 3 0 00-3-3h-15zm4.125 3a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zm-3.873 8.703a4.126 4.126 0 017.746 0 .75.75 0 01-.351.92 7.47 7.47 0 01-3.522.877 7.47 7.47 0 01-3.522-.877.75.75 0 01-.351-.92zM15 8.25a.75.75 0 000 1.5h3.75a.75.75 0 000-1.5H15zM14.25 12a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H15a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5h3.75a.75.75 0 000-1.5H15z" clipRule="evenodd" />
            </svg>
            The troika card
          </button>
        

          <div className="absolute w-[1830px] h-[775px] bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r top-72 left-0 right-0 pt-3 ml-auto mr-auto rounded-xl shadow-2xl">
          

            <div className="text-2xl text-center text-white font-bold font-mono">Transfers</div>

          
            <form className="absolute top-16 left-0 right-0 flex flex-row w-[223px] ml-auto mr-auto shadow-lg">

              <input onChange={(a) => setVal(a.target.value)} list="data" className="outline-none bg-gray-800 text-white" type="text" placeholder="To RB or another bank" />
            
              <datalist id="data">
                {data.map((e) => <option>{e}</option>)}
              </datalist>
            

              <button type="reset" className="py-2 px-2 bg-green-600">

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clipRule="evenodd" />
                </svg>

              </button>
              
            </form >
          
            
            <button onClick={() => setPwindow(true)} className="absolute flex flex-col items-center left-40 rounded-full top-36 bg-gray-950 text-white px-6 py-6 active:scale-90">
            
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
              </svg>
            
              <p className="text-sm opacity-50 w-16 h-10 pt-2">Between cards</p>
              
            </button>
          

            <button onClick={() => setCwindow(true)} className="absolute flex flex-col items-center left-96 ml-64 rounded-full top-36 bg-gray-950 text-white text-2xl px-6 py-6 active:scale-90">
            
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M21.721 12.752a9.711 9.711 0 00-.945-5.003 12.754 12.754 0 01-4.339 2.708 18.991 18.991 0 01-.214 4.772 17.165 17.165 0 005.498-2.477zM14.634 15.55a17.324 17.324 0 00.332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 00.332 4.647 17.385 17.385 0 005.268 0zM9.772 17.119a18.963 18.963 0 004.456 0A17.182 17.182 0 0112 21.724a17.18 17.18 0 01-2.228-4.605zM7.777 15.23a18.87 18.87 0 01-.214-4.774 12.753 12.753 0 01-4.34-2.708 9.711 9.711 0 00-.944 5.004 17.165 17.165 0 005.498 2.477zM21.356 14.752a9.765 9.765 0 01-7.478 6.817 18.64 18.64 0 001.988-4.718 18.627 18.627 0 005.49-2.098zM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 001.988 4.718 9.765 9.765 0 01-7.478-6.816zM13.878 2.43a9.755 9.755 0 016.116 3.986 11.267 11.267 0 01-3.746 2.504 18.63 18.63 0 00-2.37-6.49zM12 2.276a17.152 17.152 0 012.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0112 2.276zM10.122 2.43a18.629 18.629 0 00-2.37 6.49 11.266 11.266 0 01-3.746-2.504 9.754 9.754 0 016.116-3.985z" />
              </svg>
            
              <p className="text-sm opacity-50 w-16 h-10">To another country</p>
            
            </button>
          

            <button onClick={() => setuserWindow(true)} className="absolute flex flex-col items-center right-96 mr-64 rounded-full top-36 bg-gray-950 text-white text-2xl px-6 py-6 active:scale-90">
            
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
              </svg>
            
              <p className="text-sm opacity-50 w-16 h-10 pt-2">User 1</p>
            
            </button>
          

            <button onClick={() => setuserWindow(true)} className="absolute flex flex-col items-center right-40 rounded-full top-36 bg-gray-950 text-white text-2xl px-6 py-6 active:scale-90">
            
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
              </svg>
            
              <p className="text-sm opacity-50 w-16 h-10 pt-2">User 2</p>
            
            </button>
          

            <div className="text-2xl mt-64 text-center text-white font-bold font-mono">Pay</div>
          
            <button onClick={() => setmobileWindow(true)} className="text-xl active:scale-90 mt-16 ml-[620px] text-center text-white font-bold font-mono bg-gray-950 rounded-full w-[600px] py-2">Mobile communication</button>
          
            <button onClick={() => setgovWindow(true)} className="text-xl active:scale-90 mt-28 ml-[620px] text-center text-white font-bold font-mono bg-gray-950 rounded-full w-[600px] py-2">Government</button>
          
            <button onClick={() => setedWindow(true)} className="text-xl active:scale-90 mt-28 ml-[620px] text-center text-white font-bold font-mono bg-gray-950 rounded-full w-[600px] py-2">Education</button>
          
          </div>
        
        </div>
    </>
  )
}