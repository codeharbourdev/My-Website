import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import logo2 from '../assets/logo 2.png'
import github from '../assets/github.png'
import { useState } from 'react'


const Navbar = () => {

  /***************  location reload  ****************/
  const handleClick = () => {
    location.reload();
  }

  /***************  hamburgur click  ***************/
  const [showSidebar, setShowSidebar] = useState(false);

  const hamburgur = () => {
    if(showSidebar === false) {
      setShowSidebar(true)
    } else {
      setShowSidebar(false)
    }
  }

  return (
    <nav className="h-[120px] w-full flex items-center justify-center px-[10px] sm:px-[50px] fixed top-0 z-10">
      {/*********************  navbra  box  *******************/}
      <div className="h-[80px] w-full bg-black rounded-[50px] ring-2 ring-[#854ce6] hover:shadow-[0_0_10px_#854ce6] flex items-center justify-between px-[20px] sm:px-[50px] lg:px-0 lg:justify-evenly cursor-pointer select-none">
        {/*********************  logo box  *******************/}
        <div className='h-[70px] w-min flex items-center pr-[10px] gap-[15px]'>
          <div className='h-[60px] w-[60px] rounded-full flex items-center justify-center ring-2 ring-[#854ce6] shadow-[0_0_8px_#854ce6]'>
            <img src={logo2} alt="img" onClick={handleClick} className='h-[60px] w-[60px] rounded-full'/>
          </div>
          <p className='w-min h-[70px] hidden sm:flex whitespace-nowrap items-center justify-center text-2xl font-bold text-yellow-300 font-serif'>Code Harbour</p>
        </div>
        {/*********************  link box  *******************/}
        <div className='h-[50px] w-min hidden lg:flex items-center gap-[20px] px-[20px]'>
          <a href="#home" className='px-[20px] py-[5px] bg-violet-500 hover:bg-[#0f111a] hover:border-2 hover:border-[#854ce6] text-lg rounded-[3px] transition-colors duration-[300ms] ease-in outline-0'>Home</a>
          <a href="#course" className='px-[20px] py-[5px] bg-violet-500 hover:bg-[#0f111a] hover:border-2 hover:border-[#854ce6] text-lg rounded-[3px] transition-colors duration-[300ms] ease-in outline-0'>Course</a>
          <a href="#links" className='px-[20px] py-[5px] bg-violet-500 hover:bg-[#0f111a] hover:border-2 hover:border-[#854ce6] text-lg rounded-[3px] transition-colors duration-[300ms] ease-in outline-0'>SocialLinks</a>
        </div>
        {/******************  github button box  *****************/}
        <a href='https://github.com/codeharbourdev' target='_blank' className='h-[45px] w-[170px] ring-2 ring-[#854ce6] hidden lg:flex items-center justify-center gap-[20px] rounded-[30px] shadow-[0_0_10px_#854ce6] cursor-pointer hover:bg-[#854ce6] transition-colors duration-[300ms] ease-in'>
          <p className='text-xl font-medium'>GitHub</p>
          <img src={github} alt="img"  className='h-[25px] w-[25px]'/>
        </a>
        {/*********************  hamburgur box  *******************/}
        <div onClick={hamburgur} className={`${showSidebar ? 'bg-[#854ce6]' : 'bg-black'} h-[55px] w-[55px] ring-2 ring-[#854ce6] flex lg:hidden items-center justify-center rounded-full shadow-[0_0_10px_#854ce6] cursor-pointer hover:bg-[#854ce6] transition-colors duration-[300ms] ease-in relative`}>
          <FontAwesomeIcon icon={showSidebar ? faXmark : faBars}  className="text-2xl text-white cursor-pointer"/>

          {/**************  sidebar link box  **************/}
          <div className={`${showSidebar ? 'flex' : 'hidden'} absolute top-[75px] right-0 h-min w-min px-[30px] py-[25px] bg-black border-2 border-[#854ce6] rounded-[5px] flex-col gap-[20px]`}>
            <a href="#home" className='px-[20px] py-[5px] bg-violet-500 hover:bg-[#0f111a] hover:border-2 hover:border-[#854ce6] text-lg rounded-[3px] transition-colors duration-[300ms] ease-in outline-0'>Home</a>
            <a href="#course" className='px-[20px] py-[5px] bg-violet-500 hover:bg-[#0f111a] hover:border-2 hover:border-[#854ce6] text-lg rounded-[3px] transition-colors duration-[300ms] ease-in outline-0'>Course</a>
            <a href="#links" className='px-[20px] py-[5px] bg-violet-500 hover:bg-[#0f111a] hover:border-2 hover:border-[#854ce6] text-lg rounded-[3px] transition-colors duration-[300ms] ease-in outline-0'>SocialLinks</a>
            <a href='https://github.com/codeharbourdev' target='_blank' className='h-[45px] w-[130px] lg:hidden flex items-center justify-center gap-[15px]  bg-violet-500 hover:bg-[#0f111a] hover:border-2 hover:border-[#854ce6] text-lg rounded-[3px] transition-colors duration-[300ms] ease-in outline-0'>
              <p className='text-xl'>GitHub</p>
              <img src={github} alt="img"  className='h-[25px] w-[25px]'/>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar


