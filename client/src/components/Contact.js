import React, { useEffect, useState } from 'react';
import { GetCountries, IpAddress, SendEmail } from '../API/index';
import InlineError from './inlineError';
import Loading from './Loading';
import {
  validateEmail,
  validateFullName,
  validateMessage,
  validatePhone,
} from './Validation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../Contact.css'
/* import Toast from './components/Toast'; */
//import Navbar from './components/Navbar';

//const InputClass = "w-full py-4 placeholder:text-gray px-6 text-main border-2 mt-2 border-border rounded-md"
//<input value={phone} onChange={(e) => setPhone(e.target.value)} required type='tel' placeholder='8924134890' className="placeholder:text-gray text-main col-span-7 px-3" />

const InputClass = "w-full py-4 placeholder:text-gray px-6 text-orange-400 border-2 mt-2 border-border rounded-md"

function Contact() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState();
  const [message, setMessage] = useState("");
  const [fullNameError, setFullNameError] = useState();
  const [emailError, setEmailError] = useState();
  const [phoneError, setPhoneError] = useState();
  const [messageError, setMessageError] = useState();
  const [loading, setLoading] = useState(true);
  const [ipData, setIpData] = useState();
  const [countries, setCountries] = useState();
  const [country, setCountry] = useState("India");
  const [buttonLoading, setButtonLoading] = useState(false);
  const [send, setSend] = useState();
  
  let result = countries && Object.keys(countries).map((key => countries[key]));
  let output = result && result.find((x) => x.country_name === country);
  let outputResult = output && output.dialling_code;
  let phoneFull = outputResult && outputResult.concat(phone);

  //console.log(phoneFull);

  useEffect(() => {
    if (!ipData & !countries) {
      IpAddress({ setLoading, setIpData });
      GetCountries({ setLoading, setCountries });
    }
    //********** VALIDATION ************
    validateFullName({ fullName, setFullNameError });
    validateEmail({ email, setEmailError });
    validatePhone({ phone, setPhoneError });
    validateMessage({ message, setMessageError });

    // ************
    if (send) {
      toast.success(send.msg);
      setFullName("")
      setEmail("")
      setMessage("")
      setSend()
      setPhone("")
    }
  }, [fullName, email, phone, message, send, ipData, countries]);

  const submitHandler = (e) => {
    e.preventDefault();
    setButtonLoading(true);
    if (!fullNameError & !emailError & !phoneError & !messageError) {
        //console.log("ok");
        SendEmail({fullName,email,phone:phoneFull,message, setSend}).then( () => {
        setButtonLoading(false);
        }
      );
    }
  };
  //console.log(send);

  //console.log(fullNameError);

  //console.log(ipData);

  //console.log(countries);

  // Deleted HTML Code
  //<img src='/gallops_logo.jpg' className='w-16 h-16 object-cover' alt='logo' />
  //<h1 className='my-4 text-xl'>Gallops System And Solutions </h1>
  //<div className="box-1 bg-main flex-colo py-6 sm:py-0">
  //<button type='submit' disabled={buttonLoading && true} className='w-full border-2 border-main hover:bg-white trans bg-main mt-6 rounded-md tracking-widest py-4 font-subMain font-bold'></button>
  //<textarea value={message} onChange={(e) => setMessage(e.target.value)} required placeholder='How can we help you' rows={3} className='mt-2 w-full border-2 border-border py-4 placeholder:text-gray px-6 text-main rounded-md' />
  //bg-gradient-to-r from-amber-500 to-indigo-500

  return (
    <div>
    <> 
    <ToastContainer />
    <div className="container bg-white flex-colo mx-auto min-h-screen sm:py-2 px-4">
      {loading ? (
        <Loading />
      ) : (
        <div className='main-box shadow-xl shadow-slate-500 mt-5 mb-5 lg:w-3/4 w-full flex box-shadow rounded-ig overflow-hidden'>
          <div className="box-1 contact-cover flex-colo py-6 sm:py-0">
            <img src={require('../assets/navbar--logo.png')} className='w-252 h-16 object-cover' alt='logo' />
            <p className='text-sm my-5'>We detected you are <br /> current in {" "}
              <span className='font-bold'>({ipData && ipData})</span>
            </p>
          </div>
          <form onSubmit={submitHandler} className='box-2 bg-white pt-12 pb-6 sm:px-12 px-6'>
            <h2 className='sm:text-2xl text-xl text-center mb-12 font-semibold'>Contact Us</h2>
            {/* fullName */}
            <div className='my-6'>
              <label>FullName</label>
              <input value={fullName} onChange={(e) => setFullName(e.target.value)} required type='text' placeholder='User Doe' className={InputClass} />
              {fullNameError && <InlineError error={fullNameError} />}
            </div>
            {/* email */}
            <div className='my-6'>
              <label>Email</label>
              <input value={email} onChange={(e) => setEmail(e.target.value)} required type='eamil' placeholder='example@gmail.com' className={InputClass} />
              {emailError && <InlineError error={emailError} />}
            </div>
            {/* phone */}
            <div className='my-6'>
              <label>Phone</label>
              <div className='grid gap-3 grid-cols-12 border-2 mt-2 border-border rounded-md w-full px-2'>
                <select 
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className='col-span-3 bg-neutral-200 py-3 px-2 my-2 text-sm rounded'>
                  {
                    result && result.map((e,index) => (
                      <option key={index} value={e.country_name}>{e.country_name}</option>
                    ))}
                </select>
                <div className='tracking-widest col-span-2 border-x-2 border-border flex-colo'>
                  {outputResult}
                </div>
                <input value={phone} onChange={(e) => setPhone(e.target.value)} required type='tel' placeholder='8924134890' className="placeholder:text-gray text-orange-400 col-span-7 px-3" />
              </div>
              {phoneError && <InlineError error={phoneError} />}
              </div>
            {/* message */}
            <div className='my-6'>
              <label>Message</label>
              <textarea value={message} onChange={(e) => setMessage(e.target.value)} required placeholder='How can we help you' rows={3} className='mt-2 w-full border-2 border-border py-4 placeholder:text-gray px-6 text-orange-400 rounded-md' />
              {messageError && <InlineError error={messageError} />}
            </div>
            {/* submit */}
            <button type='submit' disabled={buttonLoading && true} className='w-full border-2 border-neutral-200 hover:bg-white trans bg-neutral-200 mt-6 rounded-md tracking-widest py-4 font-subMain font-bold'>
              {buttonLoading ? "Loading.." : "SUBMIT"}
            </button>
            { /* social media */}
            { /* <div className='w-full mt-6 flex-rows'>
              <a href=# target='_black'>
                <i className='fab fa-medium-m social'></i>
              </a>
              <a href=# target='_black'>
                <i className='fab fa-youtube text-red-500 social'></i>
              </a>
              <a href=# target="_black">
                <i className="fab fa-telegram text-blue-400 social" />
              </a>
              </div> */}
          </form>
        </div>
      )
      }
    </div>
    <div className='info--section bg-indigo-950 text-white text-center flex'>
        <p>&copy; 2016 Gallops Systems and Solutions</p>
      </div>
    </>
    </div>
  );
}

export default Contact;

