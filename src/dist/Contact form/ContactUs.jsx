import React, { useRef,useState } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState(''); // 'success' or 'error'

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_7zgr6pp', 'template_ps7v6hu', form.current, {
        publicKey: 'N1v-d9PQmHHUUq5u9',
      })
      .then(
        () => {
            setAlertMessage('Message sent successfully!');
            setAlertType('success');
          form.current.reset();
        },
        (error) => {
          setAlertMessage("Failed to sent Message.Please try again!")
          setAlertType('error')
        },
      );
  };

  return (
    <div className="md:w-[600px] w-[300px] h-[390px] md:h-[500px] bg-slate-100 flex flex-col border-solid rounded-xl shadow-xl md:p-4 ">
    {alertMessage && (
      <div
        className={`mb-4 p-2 rounded text-white ${alertType === 'success' ? 'bg-green-500' : 'bg-red-500'}`}
      >
        {alertMessage}
      </div>
    )} 

   
    <form className='py-4 px-4 '  ref={form} onSubmit={sendEmail}>
      <div className=' md:h-[46px] h-8 md:rounded-t-md rounded-t flex-col my-1 md:my-3 mx-3'> 
      <div className='font-light md:text-xl mb-2 text-base '>Name <span className='text-red-600 font-bold'>*</span></div>
      <input className='md:w-[360px] w-[200px] h-full border rounded-lg border-solid border-gray-400 pl-2' type="text" name="user_name" required />
      </div> 

      <div className=' md:h-[46px] h-8 md:rounded-t-md rounded-t flex-col my-3 mx-3 '> 
      <div className='font-light md:text-xl mt-12 text-base '>Email  <span className='text-red-600 font-bold'>*</span> </div>
      <input className='md:w-[360px] w-[200px] h-full border rounded-lg border-solid border-gray-400 pl-2 mt-2' type="email" name="user_email" required />
      </div>

      <div className=' md:h-[146px] h-[70px] rounded-t-md flex-col my-3 mx-3'> 
      <div className='font-light md:text-xl text-base md:mt-14 mt-12'>Message</div>
     <div className='md:flex h-full md:space-x-7 space-x-2' >
      <textarea className='md:w-[360px] w-[200px] h-full rounded-lg border border-solid border-gray-400 md:pl-2 md:mt-3 mt-2 text-sm' name="message"  placeholder='Write Message Here...' />
      <input type="submit" value="Send" className=' md:w-32 md:h-32 w-14 h-8 mt-2 md:mt-5 flex md:text-xl text-xs items-center justify-center rounded-full bg-yellow-400 border-solid border-[1px] border-black font-semibold cursor-pointer animate-slideUp"' />
      </div>
      </div>
    </form>
    </div>
   
  );
};