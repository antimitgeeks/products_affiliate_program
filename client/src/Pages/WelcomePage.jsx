import React from 'react'
import { useNavigate } from 'react-router-dom'

function WelcomePage() {

  const navigate = useNavigate()


  const navigateAdmin = () => {
    navigate('/login/admin')
  }

  const navigateNpo = () => {
    navigate('/login/npo')
  }

  return (
    <div className=' w-full pb-12 h-[95vh] flex-col gap-10 flex items-center justify-center'>
      <div className=' hover:animate-pulse cursor-pointer w-fit'>
        <span className=' border-2 border-orange-300 py-3 px-3 shadow-md  text-xl rounded '> Respect</span>
      </div>
      <div className=' py-2 flex gap-12'>
        <div onClick={() => { navigateAdmin() }} className=' hover:opacity-85 px-6 py-2  border-2 shadow-md rounded border-orange-300 cursor-pointer'>ADMIN</div>
        <div onClick={() => { navigateNpo() }} className=' hover:opacity-85 py-2 px-[40px] border-2 border-orange-300 rounded shadow-md cursor-pointer'>NPO</div>
      </div>
    </div>
  )
}

export default WelcomePage;