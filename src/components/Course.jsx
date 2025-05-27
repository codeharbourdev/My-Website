import Reactjs from '../assets/reactjs.png'
import js from '../assets/js.png' 
import clone from '../assets/uiux-clone.png' 

const Course = () => {
  return (
    <section id='course' className='h-min w-full bg-black border-t-2 border-b-2 border-[#854ce6] rounded-tl-[100px] rounded-br-[100px] select-none flex flex-col px-[10px] sm:px-[50px] py-[50px]'>
        {/*********************  course heading  *******************/}
        <h1 className='h-min w-full py-[30px] flex items-center justify-center text-[50px] font-serif font-medium text-center text-yellow-300'>Course 📃</h1>
        {/*********************  course box  *******************/}
        <div className='h-min w-full flex flex-wrap items-center justify-evenly py-[50px] gap-[50px]'>
            {/*********************  course playlist  *******************/}
            <div className='h-[270px] sm:h-[300px] w-[250px] sm:w-[350px] bg-[#854ce6] px-[10px] py-[10px] rounded-[3px] hover:cursor-pointer hover:shadow-[0_0_10px_#854ce6]'>
                <div className='h-[150px] sm:h-[180px] w-full border-2 border-white rounded-[8px]'>
                    <img src={Reactjs} alt="img" className='h-full w-full rounded-[7px] shadow-[0_0_8px_black]'/>
                </div>
                <div className='h-[50px] w-full border-b-2 border-black flex items-center justify-center'>
                    <p className='text-[18px] sm:text-[20px] font-serif font-medium text-center'>React Js Course With Hindi</p>
                </div>
                <div className='h-[60px] w-full flex items-center'>
                    <a href='https://youtube.com/playlist?list=PLgfYFbECYlcZTwcSQ5EE8VVlH22iN3Ptz&si=3YnKiXJAOv2CoXbv' target='_blank' className='h-[40px] w-min bg-black flex-row flex items-center justify-center rounded-[3px] whitespace-nowrap px-[20px] text-[20px] ml-[5px]'>View Course</a>
                </div>
            </div>
            <div className='h-[270px] sm:h-[300px] w-[250px] sm:w-[350px] bg-[#854ce6] px-[10px] py-[10px] rounded-[3px] hover:cursor-pointer hover:shadow-[0_0_10px_#854ce6]'>
                <div className='h-[150px] sm:h-[180px] w-full border-2 border-white rounded-[8px]'>
                    <img src={js} alt="img" className='h-full w-full rounded-[7px] shadow-[0_0_8px_black]'/>
                </div>
                <div className='h-[50px] w-full border-b-2 border-black flex items-center justify-center'>
                    <p className='text-[18px] sm:text-[20px] font-serif font-medium text-center'>Js Projects With Code</p>
                </div>
                <div className='h-[60px] w-full flex items-center'>
                    <a href='https://youtube.com/playlist?list=PLgfYFbECYlcbIhg4BKi9sqrFzyjeDjxGg&si=nJPp7eW2YHUaDDZh' target='_blank' className='h-[40px] w-min bg-black flex-row flex items-center justify-center rounded-[3px] whitespace-nowrap px-[20px] text-[20px] ml-[5px]'>View Course</a>
                </div>
            </div>
            <div className='h-[270px] sm:h-[300px] w-[250px] sm:w-[350px] bg-[#854ce6] px-[10px] py-[10px] rounded-[3px] hover:cursor-pointer hover:shadow-[0_0_10px_#854ce6]'>
                <div className='h-[150px] sm:h-[180px] w-full border-2 border-white rounded-[8px]'>
                    <img src={clone} alt="img" className='h-full w-full rounded-[7px] shadow-[0_0_8px_black]'/>
                </div>
                <div className='h-[50px] w-full border-b-2 border-black flex items-center justify-center'>
                    <p className='text-[18px] sm:text-[20px] font-serif font-medium text-center'>UI/UX & Clone With Code</p>
                </div>
                <div className='h-[60px] w-full flex items-center'>
                    <a href='https://youtube.com/playlist?list=PLgfYFbECYlcZ35uILuPZdUN2fQ8tRAyy1&si=ua-S9cAFaZr8OJBR' target='_blank' className='h-[40px] w-min bg-black flex-row flex items-center justify-center rounded-[3px] whitespace-nowrap px-[20px] text-[20px] ml-[5px]'>View Course</a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Course
