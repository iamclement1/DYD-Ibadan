
import Placeholder from '../assets/Placeholder.png';
import { ExRole } from '../utils/executive';
const OurExecutives = () => {
    return (
        <main>
            <div className="my-12">
                <h1 className="text-center text-2xl text-black/75 font-bold">
                    Meet our Executives
                </h1>

                <section>
                    <div className="container md:flex items-center justify-center mx-auto py-8">
                        <div className='flex flex-col items-center'>
                            <img src={Placeholder} alt="image-header"
                                className='w-5/6' />
                            <div id="name"
                                className='pt-6 flex flex-col items-center '>
                                <p className='text-black/75 text-2xl font-bold'>
                                    Executive Name
                                </p>
                                <span className='font-semibold text-gray-500 text-xl'>President</span>
                            </div>
                        </div>
                        <div className='flex flex-col items-center'>
                            <img src={Placeholder} alt="image-header"
                                className='w-5/6' />
                            <div id="name"
                                className='pt-6 flex flex-col items-center '>
                                <p className='text-black/75 text-2xl font-bold'>
                                    Executive Name
                                </p>
                                <span className='font-semibold text-gray-500 text-xl'>Vice-President</span>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid md:grid-cols-3 lg:grid lg:grid-cols-3
                        xl:grid xl:grid-cols-4">
                        {ExRole && ExRole.map((exco, index) => {
                            return (
                                <div key={index}
                                    className=' items-center rounded-lg p-4 mt-4'>
                                    <div className='flex flex-col items-center'>
                                        <img src={exco.img} alt="image-header"
                                            className='w-full' />
                                        <div id="name"
                                            className='pt-6 flex flex-col items-center '>
                                            <p className='text-black/75 md:text-2xl text-xs font-bold'>
                                                {exco.name}
                                            </p>
                                            <span className='font-semibold text-gray-500 md:text-xl text-xs'>
                                                {exco.office}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                </section>
            </div>
        </main>
    )
}

export default OurExecutives