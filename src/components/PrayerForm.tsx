import React, { useState } from 'react'

const PrayerForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [messageSubject, setMessageSubject] = useState("");
    const [ message, setMessage ] = useState("");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Phone', phone);
        console.log('Subject', messageSubject);
        console.log('message', message)
    }
    return (
        <main className='bg-[#F2F2F2]'>
            <div className='md:mx-16 mx-8 py-12'>
                <h1 className='md:text-xl font-bold text-black/60'>
                    Submit Your Prayer Request
                </h1>
                <p className='md:w-3/6 py-3 text-black/50'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, corporis exercitationem aperiam officiis optio sequi.
                </p>

                <form action="" method='POST'
                onSubmit={handleSubmit}>
                    <section className='md:flex item-center md:space-x-9' >
                        <div className='md:w-3/6'>
                            <div id="name">
                                <label htmlFor="name"
                                    className="block text-gray-700 text-xl font-normal mb-2">
                                    Name
                                </label>
                                <input className=" appearance-none border border-black/50 rounded w-full py-3 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="name"
                                    type="text"
                                    value={name}
                                    onChange={(event) => setName(event.target.value)} />
                            </div>

                            {/* email input */}
                            <div id="email" className='pt-6'>
                                <label htmlFor="email"
                                    className="block text-gray-700 text-xl font-normal mb-2">
                                    Email
                                </label>
                                <input className=" appearance-none border border-black/50 rounded w-full py-3 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="email"
                                    type="text"
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)} />
                            </div>

                            {/* phone number input */}
                            <div id="phone" className='pt-4'>
                                <label htmlFor="phone"
                                    className="block text-gray-700 text-xl font-normal mb-2">
                                    Phone Number
                                </label>
                                <input className=" appearance-none border border-black/50 rounded w-full py-3 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="phone"
                                    type="number"
                                    value={phone}
                                    onChange={(event) => setPhone(event.target.value)} />
                            </div>
                        </div>

                        {/* other input */}
                        <div className='md:w-3/6'>
                            <div id="subject">
                                <label htmlFor="subject"
                                    className="block text-gray-700 text-xl font-normal mb-2">
                                    Message Subject
                                </label>
                                <input className=" appearance-none border border-black/50 rounded w-full py-3 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="subject"
                                    type="text"
                                    value={messageSubject}
                                    onChange={(event) => setMessageSubject(event.target.value)} />
                            </div>

                            {/* message input */}
                            <div id="message" className='pt-6'>
                                <label htmlFor="message"
                                    className="block text-gray-700 text-xl font-normal mb-2">
                                    Message
                                </label>
                                <textarea
                                    // value={value}
                                    // onChange={handleChange}
                                    className="appearance-none border border-black/50 rounded w-full py-3 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    // placeholder="Enter your message here"
                                    cols={50}
                                    rows={6}
                                    value={message}
                                    onChange={(event) => setMessage(event.target.value)}
                                />
                            </div>
                        </div>
                    </section>

                    <div className='flex items-center justify-center'>
                        <button className='bg-[#333333] md:px-12 px-6 py-4 text-white my-6
                        cursor-pointer'>
                            Send Prayer Request
                        </button>
                    </div>
                </form>
            </div>
        </main>
    )
}

export default PrayerForm