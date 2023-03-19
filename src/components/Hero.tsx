import image from '../assets/bg.jpg'

const Hero: React.FC = () => {
    return (
        <section>
            <main className='h-screen'>
                <div style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "100vh",
                    display: "flex",
                    zIndex: -1,
                    // justifyContent: "center",
                    // alignItems: "center",
                    position: "relative",
                }}>
                    <div>
                        <div className='absolute bg-heroBgColor h-screen w-full
                    text-white '>
                            <p className='h-24 w-2/6 mt-96 mx-24 text-xl block'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nobis aliquid nulla at natus totam!
                            </p>
                            <button className='mx-24 bg-[#333] p-2 px-12 cursor-pointer'>
                                Connect with Us
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </section>
    )
}

export default Hero