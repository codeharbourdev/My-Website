import Rishabh from '../assets/Rishabh.png'

const Hero = () => {
  return (
    <section id='home' className='h-min w-full flex items-center justify-center px-[10px] sm:px-[50px] pt-[50px] pb-[80px] select-none mt-[110px]'>
        {/*********************  hero  box  *******************/}
        <div className="h-min w-full flex flex-col gap-[30px]">
            {/*********************  hero content  box  *******************/}
            <div className='h-min w-full flex flex-col items-center justify-center px-[10px] py-[70px]'>
                <h1 className='text-[50px] sm:text-[60px] md:text-[80px] font-bold font-serif w-full text-center'>
                    Welcome to <strong className='font-serif text-yellow-300'>Code Harbour</strong>
                </h1>
                <p className='text-[40px] sm:text-[50px] md:text-[70px] font-serif font-medium text-blue-500 w-full text-center'>
                    Learn. Build. Code.
                </p>
                <p className='text-[20px] mt-[20px] w-full text-center text-gray-300'>
                    Confused ho <strong className='font-serif text-yellow-300'>| React |</strong> ya <strong className='font-serif text-yellow-300'>| JavaScript |</strong> shuru karne mein? No tension! Mere full <strong className='font-serif text-blue-500'>| React JS course Hindi |</strong> mein, basic se advanced <strong className='font-serif text-blue-500'>| JavaScript projects |</strong> ke saath-saath <strong className='font-serif text-blue-500'>| UI/UX design projects |</strong> bhi playlists mein available hain. Saath hi, mera <strong className='font-serif text-yellow-300'>| GitHub |</strong> bhi hai jahan aap projects ka code dekh sakte ho aur seekh sakte ho. Chahe beginner ho ya skills improve karna chahte ho, yeh sab free resources aapko coding aur design jaldi master karne mein madad karenge!
                </p>
            </div>
            {/*********************  hero img  box  *******************/}
            <div className='h-[400px] sm:h-[500px] w-full flex items-center justify-center'>
                <img src={Rishabh} alt="img" className='h-[95%] w-[95%] rounded-[10px] sm:h-[450px] sm:w-[450px] ring-3 ring-[#854ce6] shadow-[0_0_30px_#854ce6]'/>
            </div>
        </div>
    </section>
  )
}

export default Hero

