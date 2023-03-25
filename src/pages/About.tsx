import Placeholder from '../assets/Placeholder.png';
import Socials from '../assets/social-icons.svg';
import { Executives } from '../components';

const About = () => {
    return (
        <main>
            <div className='text-4xl text-center text-black/60 py-28'>
                About Us
            </div>

            {/* our vision container */}
            <div className="container-full md:flex items-center md:space-x-14 bg-[#F2F2F2] 
            md:px-28 px-4 md:py-0 py-4 ">
                {/* image */}
                <div>
                    <img src={Placeholder} alt="image" />
                </div>
                {/* our vision content */}
                <div className='md:w-3/5 w-full'>
                    <h1 className='text-black/50 font-bold text-3xl my-9 md:text-start text-center'>
                        Our Vision
                    </h1>
                    <section className='md:text-base text-xs'>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto quam beatae minima, nemo debitis et voluptatibus laudantium, doloremque saepe, quos at sit nulla placeat porro. Reiciendis quos odio unde itaque accusantium sapiente, officia totam et maiores. Eius exercitationem omnis obcaecati dolor.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore totam quasi enim dignissimos quae veritatis animi, minus libero fugiat officia dolore, facilis eveniet praesentium ullam eos voluptatibus a vel natus fuga, consequuntur saepe ad modi expedita. Aut ad officia quas maiores pariatur reprehenderit sit illo? Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui aperiam pariatur dicta earum suscipit velit quas enim tenetur facilis provident placeat ab eius ipsa deleniti, accusamus hic vel incidunt ad fuga quos nemo nihil? Est cum fugit nostrum corporis quo ipsa eligendi modi, accusantium perspiciatis?
                        </p>
                    </section>
                </div>
            </div>

            {/* our mission container */}
            <div className="container-full md:flex items-center md:space-x-14 
            md:px-28 px-4 md:py-0 py-4 ">
                {/* our mission content */}
                <div className='md:w-3/5'>
                    <h1 className='text-black/50 font-bold text-3xl my-9
                    md:text-start text-center'>
                        Our Mission
                    </h1>
                    <section className='md:text-base text-xs'>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto quam beatae minima, nemo debitis et voluptatibus laudantium, doloremque saepe, quos at sit nulla placeat porro. Reiciendis quos odio unde itaque accusantium sapiente, officia totam et maiores. Eius exercitationem omnis obcaecati dolor.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore totam quasi enim dignissimos quae veritatis animi, minus libero fugiat officia dolore, facilis eveniet praesentium ullam eos voluptatibus a vel natus fuga, consequuntur saepe ad modi expedita. Aut ad officia quas maiores pariatur reprehenderit sit illo? Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui aperiam pariatur dicta earum suscipit velit quas enim tenetur facilis provident placeat ab eius ipsa deleniti, accusamus hic vel incidunt ad fuga quos nemo nihil? Est cum fugit nostrum corporis quo ipsa eligendi modi, accusantium perspiciatis?
                        </p>
                    </section>
                </div>

                {/* image */}
                <div>
                    <img src={Placeholder} alt="image" />
                </div>
            </div>


            {/* our chaplain container */}
            <div className="container-full md:flex items-center md:space-x-14 bg-[#F2F2F2] 
            md:px-12 px-4 md:py-0 py-4">
                {/* image */}
                <div>
                    <img src={Placeholder} alt="image" />
                </div>
                {/* our chaplain content */}
                <div className='md:w-3/5'>
                    <h1 className='text-black/70 font-bold md:text-3xl text-xl md:text-start text-center my-9'>
                        Meet our Chaplain
                    </h1>
                    <section className='md:text-base text-xs'>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto quam beatae minima, nemo debitis et voluptatibus laudantium, doloremque saepe, quos at sit nulla placeat porro. Reiciendis quos odio unde itaque accusantium sapiente, officia totam et maiores. Eius exercitationem omnis obcaecati dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus eum consequatur, odit, veniam tempora aliquid maxime voluptatem minima ducimus nulla quo, ad beatae ullam esse voluptas ex. Quam, beatae voluptatum.
                        </p>
                        <section id="socials" className='my-8 space-y-7 '>
                            <p className='text-gray-600 font-medium'>
                                Social Media Links
                            </p>
                            <div id="social_icons"
                            className='flex items-center md:space-x-8 space-x-2'>
                                <img src={Socials} alt="social-icons" />
                                <img src={Socials} alt="social-icons" />
                                <img src={Socials} alt="social-icons" />
                                <img src={Socials} alt="social-icons" />
                                <img src={Socials} alt="social-icons" />
                            </div>
                        </section>
                    </section>
                </div>
            </div>

            {/* meet our executives component */}
            <Executives />
        </main>
    )
}

export default About