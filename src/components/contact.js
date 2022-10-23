import React, { useState } from 'react'
import Title from './title'
import { FiSend, FiAlertCircle } from 'react-icons/fi'
import { ImSpinner8 } from 'react-icons/im'
import { toast } from 'react-toastify'
import { useForm } from "react-hook-form";

const Contact = () => {

  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, reset, formState: { errors, isSubmitSuccessful } } = useForm();

  const onSubmit = data => {
    setIsLoading(true)

    fetch(process.env.GATSBY_FORM_API_URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    .then(res => {
      if(res.status === 200) {
        toast.success('Twoja wiadomość została wysłana!')
        setIsLoading(false)

        reset({
          firstName: "",
          lastName: "",
          email: "",
          message: ""
        })
      } else {
        throw new Error();
      }
    })
    .catch(err => {
      toast.error('Wysłanie wiadomości nie powiodło się!')
      setIsLoading(false)
    })
  }

  return (
    <div className="mt-[8rem] mb-[3rem]">
      <Title 
        title="Kontakt" 
        subtitle="Zachęcam Cię do kontaktu ze mną przez wypełnienie poniższego formularza." 
      />
      <form onSubmit={handleSubmit(onSubmit)} className="p-6 mt-[2rem] w-full max-w-[680px] mx-auto relative font-robotoMono">
        <div className="flex flex-col md:flex-row mb-4">
          <div className="relative flex-1 mb-4 md:mb-0">
            <input 
              type="text" 
              id="floating_filled"
              {...register("firstName", { required: true, minLength: 3, maxLength: 20 })}
              className={`rounded-md block px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-slate-700 border-0 border-b-2 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500  focus:outline-none focus:ring-0 focus:border-blue-600 peer shadow-[10px_10px_0px_0px_rgba(51,65,85,0.2)]`} 
              placeholder=" " 
            />
            <label htmlFor="floating_filled" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Imię</label>
            {errors?.firstName && <FiAlertCircle className="absolute top-[16px] right-[10px] text-2xl text-red-700" />}
          </div>
          <div className="relative flex-1 md:ml-3">
            <input 
              type="text" 
              id="floating_filled" 
              {...register("lastName", { required: true, minLength: 3, maxLength: 20 })}
              className="rounded-md block px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-slate-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer shadow-[10px_10px_0px_0px_rgba(51,65,85,0.2)]" 
              placeholder=" " 
            />
            <label htmlFor="floating_filled" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Nazwisko</label>
            {errors?.lastName && <FiAlertCircle className="absolute top-[16px] right-[10px] text-2xl text-red-700" />}
          </div>
        </div>
        <div className="relative mb-4">
          <input 
            type="email" 
            id="floating_filled" 
            {...register("email", { required: true, pattern: /^\S+@\S+$/i, message: "Proszę podać poprawny adres email." })}
            className="rounded-md block px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-slate-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer shadow-[10px_10px_0px_0px_rgba(51,65,85,0.2)]" 
            placeholder=" " 
          />
          <label htmlFor="floating_filled" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Email</label>
          {errors?.email && <FiAlertCircle className="absolute top-[16px] right-[10px] text-2xl text-red-700" />}
        </div>
        <div className="relative">
          <textarea 
            id="message" 
            {...register("message", { required: true, minLength: 10, maxLength: 250 })}
            rows="6" 
            className="rounded-md block pt-5 px-2.5 w-full text-sm text-gray-900 bg-gray-50 border-0 border-b-2 border-gray-300 focus:border-blue-600 dark:bg-slate-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-600 focus:outline-none focus:ring-0 peer shadow-[10px_10px_0px_0px_rgba(51,65,85,0.2)]" 
            placeholder=" "
          >
          </textarea>
          <label htmlFor="message" className="absolute block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Twoja wiadomość</label>
          {errors?.message && <FiAlertCircle className="absolute top-[16px] right-[10px] text-2xl text-red-700" />}
        </div>
        <div className="mt-[3rem] flex justify-center">
          <button 
            type="submit" 
            className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-3.5 text-center inline-flex items-center shadow-md transition duration-300 active:shadow-sm active:translate-y-1"
            disabled={isLoading}
          >
            {isLoading ? 
            <><ImSpinner8 className="text-xl mr-3 animate-spin" /> Wysyłanie...</> 
            : <><FiSend className="text-xl mr-3" /> Wyślij wiadomość</>}
          </button>
        </div>

      </form>
    </div>
  )
}

export default Contact