import Image from 'next/image'
import windows from '@assets/so/windows.png'
import linux from '@assets/so/linux.png'
import mac from '@assets/so/mac.svg'
import { useEffect, useState } from 'react'

export default function BattleNetButton(): React.ReactElement {
  const [type, setType] = useState('windows')

  useEffect(() => {
    if (typeof navigator !== 'undefined') {
      const userAgent = navigator.userAgent
      const isMac = userAgent.includes('Mac')
      const isLinux = userAgent.includes('Linux')
      if (isMac) setType('mac')
      if (isLinux) setType('linux')
    }
  }, [])

  if (type === 'mac') {
    return (
      <button
        className={
          'text-white bg-sky-500 hover:bg-sky-400 duration-300 flex py-3 px-10 rounded-md gap-4 md:text-base text-xs items-center font-semibold mt-12'
        }
      >
        <Image src={mac} width={20} height={20} alt="" />
        Baixe para o Mac
      </button>
    )
  }

  if (type === 'linux') {
    return (
      <button
        className={
          'text-white bg-sky-500 hover:bg-sky-400 duration-300 flex py-3 px-10 rounded-md gap-4 md:text-base text-xs items-center font-semibold mt-12'
        }
      >
        <Image src={linux} width={20} height={20} alt="" />
        Baixe para o Linux
      </button>
    )
  }

  return (
    <button
      className={
        'text-white bg-sky-500 hover:bg-sky-400 duration-300 flex py-3 px-10 rounded-md gap-4 md:text-base text-xs items-center font-semibold mt-12'
      }
    >
      <Image src={windows} width={20} height={20} alt="" />
      Baixe para o Windows
    </button>
  )
}
