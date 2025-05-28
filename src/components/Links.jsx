import logo2 from '../assets/logo 2.png'

const Links = () => {

    /***************  location reload  ****************/
    const handleClick = () => {
        location.reload();
    }


  return (
    <section id='links' className='h-min w-full select-none px-[10px] sm:px-[50px] py-[50px]'>
        <div className='h-full w-full flex flex-wrap items-center justify-evenly gap-[50px] py-[30px]'>
            <div className='h-[300px] w-[250px] border-2 border-blue-500 rounded-[5px] hover:cursor-pointer px-[10px] py-[10px] hover:shadow-[0_0_10px_blue]'>
                <div className='h-[140px] w-full border-b-2 border-blue-500 flex flex-col items-center justify-evenly'>
                    <div className='h-[60px] w-[60px] rounded-full flex items-center justify-center ring-2 ring-[#854ce6] shadow-[0_0_8px_#854ce6]'>
                        <img src={logo2} alt="img" onClick={handleClick} className='h-[60px] w-[60px] rounded-full'/>
                    </div>
                    <p className='w-full h-[40px] flex whitespace-nowrap items-center justify-center text-2xl font-bold text-yellow-400 font-serif'>Code Harbour</p>
                </div>
                <p className='text-[20px] text-center font-medium text-gray-200 mt-[5px]'>
                    Where education meets real-world needs.
                </p>
            </div>
            <div className='h-[300px] w-[250px] border-2 border-blue-500 rounded-[5px] hover:cursor-pointer px-[15px] py-[15px] hover:shadow-[0_0_10px_blue] flex flex-col gap-[20px]'>
                <p className='py-[5px] w-full text-[25px] text-center border-b-2 border-blue-500'>Connct us 👨‍💻</p>
                <a href="#home" className='h-[40px] w-full bg-violet-500 hover:bg-[#0f111a] hover:border-2 hover:border-[#854ce6] text-lg rounded-[3px] transition-colors duration-[300ms] ease-in outline-0 flex items-center px-[10px]'>Home</a>
                <a href="#course" className='h-[40px] w-full bg-violet-500 hover:bg-[#0f111a] hover:border-2 hover:border-[#854ce6] text-lg rounded-[3px] transition-colors duration-[300ms] ease-in outline-0 flex items-center px-[10px]'>Course</a>
                <a href="#links" className='h-[40px] w-full bg-violet-500 hover:bg-[#0f111a] hover:border-2 hover:border-[#854ce6] text-lg rounded-[3px] transition-colors duration-[300ms] ease-in outline-0 flex items-center px-[10px]'>SocialLinks</a>
            </div>
            <div className='h-[300px] w-[250px] border-2 border-blue-500 rounded-[5px] hover:cursor-pointer px-[15px] py-[15px] hover:shadow-[0_0_10px_blue] flex flex-col gap-[20px]'>
                <p className='py-[5px] w-full text-[25px] text-center border-b-2 border-blue-500'>Get in Touch</p>
                <a href="https://linktr.ee/rishabhlinktree" target='_blank' className='h-[40px] w-full bg-violet-500 hover:bg-[#0f111a] hover:border-2 hover:border-[#854ce6] text-lg rounded-[3px] transition-colors duration-[300ms] ease-in outline-0 flex items-center px-[10px]'>linktree</a>
                <a href="https://www.linkedin.com/in/codeharbourdev/" target='_blank' className='h-[40px] w-full bg-violet-500 hover:bg-[#0f111a] hover:border-2 hover:border-[#854ce6] text-lg rounded-[3px] transition-colors duration-[300ms] ease-in outline-0 flex items-center px-[10px]'>linkedin</a>
                <a href="https://www.instagram.com/codeharbourdev/" target='_blank' className='h-[40px] w-full bg-violet-500 hover:bg-[#0f111a] hover:border-2 hover:border-[#854ce6] text-lg rounded-[3px] transition-colors duration-[300ms] ease-in outline-0 flex items-center px-[10px]'>Instagram</a>
            </div>
        </div>
    </section>
  )
}

export default Links
