import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import bg from '@assets/login/bg.png'
import Image from 'next/image'
import { AiOutlineClose } from 'react-icons/ai'

import google from '@assets/login/google-black.svg'
import apple from '@assets/login/apple-black.svg'
import facebook from '@assets/login/facebook-black.svg'
import useLoginModal from '@store/login'

export default function Login() {
  const { modal, toggle } = useLoginModal((state) => state)

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData)
    alert(JSON.stringify(data))
  }

  return (
    <Transition.Root show={modal} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={toggle}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity" />
        </Transition.Child>
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-gray-800 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl bg-cover self-center" style={{ backgroundImage: `url(${bg.src})` }}>
                <div className=' bg-gradient-to-tl from-black'>
                  <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div className='mr-auto'>
                      <AiOutlineClose size={36} className='cursor-pointer text-sky-500 ml-auto text-4xl' onClick={() => toggle(false)} />
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:text-left">
                      <Dialog.Title as="div" >
                        <Image src='/logo-battle-net.png' width={200} height={30} alt='Logo Battlenet' className='mx-auto my-14' />
                      </Dialog.Title>
                      <form className="mt-2 sm:max-w-lg mx-auto" onSubmit={onSubmit} >
                        <div className="relative w-full mb-6 ">
                          <input id="email" name="email" type="text" required className="peer h-10 w-full  border-4 border-transparent text-gray-900 placeholder-transparent focus:outline-none focus:border-sky-600   rounded-md px-2 py-6" placeholder="E-mail ou telefone" />
                          <label htmlFor="email" className="absolute left-0 -top-3.5 leading-[.5rem] text-white text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:left-4 peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-white peer-focus:font-bold peer-focus:text-sm peer-focus:text-bold peer-focus:left-0 peer-focus:leading-[.5rem]">E-mail ou telefone</label>
                        </div>
                        <div className="relative">
                          <input id="password" name="password" type="password" required className="peer h-10 w-full border-4 border-transparent text-gray-900 placeholder-transparent focus:outline-none focus:border-sky-600 rounded-md px-2 py-6" placeholder="Senha" />
                          <label htmlFor="password" className="absolute left-0 -top-3.5 leading-[.5rem] text-white text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:left-4 peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-white peer-focus:font-bold peer-focus:text-sm peer-focus:text-bold peer-focus:left-0 peer-focus:leading-[.5rem]">Senha</label>
                        </div>
                        <button type='submit' className='px-6 py-4 bg-sky-500 hover:bg-sky-400 text-white rounded-md w-full mt-10 font-semibold'>Conectar-se</button>
                      </form>
                    </div>
                  </div>
                  <div className="p-8 font-medium text-center">
                    <p className='text-white text-center'>ou conecte-se com</p>
                    <div className='flex justify-center pt-4 pb-8 gap-4'>
                      <a className='p-4 bg-white rounded-md cursor-pointer'>
                        <Image src={google} width={20} height={20} alt='Login Google' className='max-h-[20px] mt-[2px]' />
                      </a>
                      <a className='p-4 bg-white rounded-md cursor-pointer'>
                        <Image src={apple} width={20} height={20} alt='Login Apple' className='max-h-[22px]' />
                      </a>
                      <a className='p-4 bg-white rounded-md cursor-pointer'>
                        <Image src={facebook} width={20} height={20} alt='Login Facebook' className='max-h-[20px] mt-[2px]' />
                      </a>
                    </div>
                    <p className='text-white mb-4'>
                      <a className='text-sky-500 underline cursor-pointer hover:text-sky-400 pr-2'>Crie uma conta</a> Battle.net de graça
                    </p>
                    <a className='text-sky-500 underline cursor-pointer hover:text-sky-400'>Não consegue logar?</a>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
