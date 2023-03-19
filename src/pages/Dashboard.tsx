import React from 'react'
import { Hero, Newsletter } from '../components'
import Placeholder from '../assets/Placeholder.png';

const Dashboard: React.FC = () => {
    return (
        <>
            <Hero />
            {/* forthcoming events */}
            <section className='bg-[#F2F2F2] p-24'>
                <h1 className="mb-6 text-2xl text-black/70">
                    Forthcoming Events
                </h1>
                <div className="flex justify-between items-center space-x-8">
                    <div>
                        <img src={Placeholder} alt='placehoder-image' />
                    </div>
                    <div>
                        <img src={Placeholder} alt='placehoder-image' />
                    </div>
                    <div>
                        <img src={Placeholder} alt='placehoder-image' />
                    </div>
                </div>
            </section>
            {/* Livestreaming */}
            <section>
                <div className="flex justify-between items-center p-16">
                    <div className='w-3/6'>
                        <h1 className='text-2xl text-black/70 mb-4'>
                            Livestreams
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, fugit
                            lorem Lorem ipsum dolor sit amet.?
                        </p>

                        <div className='p-2 bg-[#333] flex items-center space-x-4 md:5/6 lg:w-4/6 xl:w-2/5 mt-4
                        cursor-pointer rounded-sm px-6'>
                            <p className='bg-[#BC31EA] h-8 w-8 rounded-full 
                            flex items-center justify-center text-white border border-white'>
                                4
                            </p>
                            <button className='flex items-center text-white text-sm'>
                                Watch Livestreams
                            </button>

                        </div>
                    </div>

                    <div className=''>
                        <img src={Placeholder} alt="placeholder-img"
                            className="w-96 h-96" />
                    </div>
                </div>
            </section>


            {/* Giving */}
            <section>
                <div className="flex justify-between items-center p-16 bg-[#F2F2F2]">
                    <div className=''>
                        <img src={Placeholder} alt="placeholder-img"
                            className="w-96 h-96" />
                    </div>
                    <div className='w-3/6'>
                        <h1 className='text-2xl text-black/70 mb-4'>
                            Giving...
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, fugit
                            lorem Lorem ipsum dolor sit amet.?
                        </p>

                        <div className='p-2 bg-[#333] flex items-center space-x-4 w-2/5 mt-4
                        cursor-pointer rounded-sm px-6'>
                            <button className='text-center text-white mx-auto'>
                                Give
                            </button>

                        </div>
                    </div>
                </div>
            </section>

            <Newsletter />
        </>
    )
}

export default Dashboard