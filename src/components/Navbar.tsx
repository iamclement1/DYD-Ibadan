// import { Link } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from '../components';
import { FaBars } from 'react-icons/fa'
import { IoCloseCircleOutline } from 'react-icons/io5'
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [isMenu, setIsMenu] = useState<boolean>(false);

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <section>
            <nav className="bg-gray-100 w-full">
                <div className="flex items-center text-sm justify-between md:pr-20">
                    <div className="p-3 md:w-auto w-full flex justify-between items-center">
                        <h1 className="md:ml-12 
                        md:w-full">
                            DYD Ibadan
                        </h1>
                        <motion.div
                            whileTap={{ scale: 0.75 }}
                            className="text-2xl md:hidden items-center" onClick={() => setOpen(!open)}>
                            <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6"
                                name={`${open ? "close" : "menu"}`}>
                                <path x-show="!open" fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clip-rule="evenodd"></path>

                            </svg>
                        </motion.div>
                    </div>
                    <motion.ul
                        initial={{ opacity: 0, x: 200 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 200 }}
                        className="md:flex flex-row  font-semibold hidden items-center md:mr-8 space-x-8">
                        <li className="flex">
                            <Link to="/" className="py-7 px-3 inline-block md:mr-8 hover:text-[#5C407F]">
                                Home
                            </Link>
                            <div className="relative">
                                <motion.div
                                    whileTap={{ scale: 0.75 }}
                                    className="flex items-center space-x-5">
                                    <p className="py-7 md:mr-8 cursor-pointer"
                                        onClick={() => setIsMenu(true)}>
                                        Information Center
                                    </p>
                                </motion.div>
                                {
                                    isMenu && (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.6 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.6 }}
                                            className='flex flex-col w-[20rem] bg-white border border-black
                                            rounded-md p-4 shadow-xl absolute top-14 left-0'
                                            onClick={()=> setIsMenu(false)}>
                                            <Link to="/about" className="p-2 hover:bg-gray-100
                                            rounded-sm">
                                                About Us
                                            </Link>
                                            <Link to="/about-diocese" className="p-2 hover:bg-gray-100
                                            rounded-sm">
                                                About the Diocese
                                            </Link>
                                            <Link to="/prayer-request" className="p-2 hover:bg-gray-100
                                            rounded-sm">
                                                Prayer Request
                                            </Link>
                                        </motion.div>
                                    )
                                }

                            </div>
                            <Link to="/" className="py-7 px-3 inline-block md:mr-8 hover:text-[#5C407F]">
                                Events
                            </Link>
                        </li>
                        <button
                            className="bg-gray-600 hover:bg-blue-700 text-white font-bold py-2 
                            px-4 rounded"
                            onClick={handleOpenModal}
                        >
                            Give
                        </button>
                        <Modal title="Example Modal" isOpen={showModal} onClose={handleCloseModal}>
                            <p>This is the body of the modal.</p>
                        </Modal>
                    </motion.ul>
                    <ul className={`
                    md:hidden bg-white fixed uppercase w-full top-0 overflow-y-auto bottom-0 py-24 md:px-4
                    duration-500 ${open ? "left-0" : "left-[-100%]"}`}>

                        {/* close navbar */}
                        <div className="flex justify-end px-5">
                            <motion.p
                                whileTap={{ scale: 0.75 }}>
                                <IoCloseCircleOutline
                                    className="text-3xl mb-5"
                                    onClick={() => setOpen(!open)}
                                />
                            </motion.p>
                        </div>
                        <li className="">
                            <Link to="/" className="py-3 hover:text-[#5C407F] px-12 inline-block">
                                about dyc 22
                            </Link>
                        </li>
                        <li className="">
                            <Link to="/" className="py-3 hover:text-[#5C407F] px-12 inline-block">
                                support us
                            </Link>
                        </li>
                        <li className="">
                            <Link to="/" className="py-3 hover:text-[#5C407F] px-12 inline-block">
                                about dyd
                            </Link>
                        </li>
                        <li className="">
                            <Link to="/" className="py-3 hover:text-[#5C407F] px-12 inline-block">
                                meet our ministers
                            </Link>
                        </li>
                        <button
                            className="mx-12 bg-gray-500 text-white font-bold py-2 px-4 rounded"
                            onClick={handleOpenModal}
                        >
                            Give
                        </button>
                        <Modal title="Example Modal" isOpen={showModal} onClose={handleCloseModal}>
                            <p>This is the body of the modal.</p>
                        </Modal>
                    </ul>
                </div>
            </nav>
        </section>
    )
}

export default Navbar