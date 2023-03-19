import Logo from '../assets/Diocesan-Logo.svg'
import { AiOutlineInstagram, AiOutlineYoutube } from 'react-icons/ai'
import { RiFacebookCircleLine } from 'react-icons/ri';
import { IoMdMail } from 'react-icons/io';
import { MdPhoneInTalk }  from 'react-icons/md'
import { IoLocation } from 'react-icons/io5'


const Footer: React.FC = () => {
    return (
        <div className="md:flex items-center justify-between 
        bg-[#333333] text-[#FDFDFD] md:p-28 p-12 ">
            <div>
                <div>
                    <div className="md:flex items-center md:space-x-3">
                        <img src={Logo} alt="" className="w-[48px] " />
                        <div className="">
                            <span className="block md:text-2xl text-sm font-bold mb-0 ">
                                Diocesan Youth Department
                            </span>
                            <span className="pt-0 mt-0 md:text-sm text-xs">
                                Ibadan Anglican Diocese
                            </span>
                        </div>
                    </div>
                    <div>
                        <div className=" mt-12 px-2 text-3xl flex space-x-4 items-center">
                            <AiOutlineYoutube className="cursor-pointer"
                                onClick={() => window.location.href = "https://www.youtube.com/channel/UCCALjWw_P1zr39vo4qnP94g"} />
                            < AiOutlineInstagram className="cursor-pointer"
                                onClick={() => window.location.href = "https://www.instagram.com/dydibadan/"} />
                            <RiFacebookCircleLine className="cursor-pointer"
                                onClick={() => window.location.href = "https://web.facebook.com/DYDIbadan/"} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:w-2/6">
                <div className="flex items-start space-x-3 py-2">
                    <IoLocation className='text-3xl' />
                    <span className="md:tex-lg text-md">
                        No. 3, Arigidi Street, Old Bodija,
                        Ibadan, Oyo State.
                    </span>

                </div>
                <div className="flex items-center space-x-3 py-2">
                    <IoMdMail className='text-xl'/>
                    <span className="md:tex-sm text-md">
                        dydibadan@gmail.com
                    </span>
                </div>
                <div className="flex items-center space-x-3 py-2">
                    <MdPhoneInTalk className='text-xl' />
                    <span className="md:tex-sm text-md">
                        +234 805 530 1983
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Footer