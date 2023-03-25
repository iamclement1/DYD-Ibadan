import React from 'react'
import { PrayerForm } from '../components'

const PrayerRequest = () => {
    return (
        <main>
            <div className='md:text-4xl text-md text-center text-black/60 py-28'>
                Prayer Request
            </div>

            {/* bible verses */}
            <section className='container-full bg-[#F2F2F2] text-center py-8 '>
                <span className='text-4xl text-gray-700'>"</span>
                <p className='md:w-3/6 mx-auto font-bold md:text-xl text-base text-black/70 '>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima numquam maxime optio mollitia corrupti voluptates repellat asperiores, nemo provident nihil aliquam temporibus eveniet, minus similique.
                </p>
                <span className='text-4xl text-gray-700 mt-4 block'>"</span>
                <span className='mt-6 text-black/50'>
                    - Bible Verse
                </span>
            </section>

            <section className='container-full text-center my-12'>
                <h1 className='py-4 font-bold text-black/70 md:text-2xl text-lg'>Let us pray with you</h1>
                <div className="md:w-2/6 mx-auto font-normal text-md text-black/60 my-8">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, vitae assumenda obcaecati amet accusamus cum maxime esse nostrum, minima accusantium sit, vel pariatur. Ducimus ea atque corrupti architecto distinctio fugiat aut, ad alias ex repudiandae.
                </div>
                <div className='mx-auto'>
                    <span>Contact Info</span>
                    <div className="flex items-center justify-center space-x-4 mt-4 text-black/70">
                        <span> <a href="tel:+000 0000 0000"> +000 0000 0000 </a></span>
                        <span> <a href="tel:+000 0000 0000"> +000 0000 0000 </a></span>
                    </div>
                </div>
            </section>
            <PrayerForm />
        </main>
    )
}

export default PrayerRequest