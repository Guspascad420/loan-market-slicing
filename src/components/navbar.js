import { ArrowDropDown, Menu, NotificationsOutlined } from "@mui/icons-material"
import Image from "next/image"
import profilePicture from "../components/images/profile-picture.png"

export default function Navbar({ title, toggleSidebar }) {
    return (
        <nav className="flex justify-between  pl-5 pr-3 md:px-5 pb-3 mt-3 border-b-[1.5px] border-[#C1C1C1] items-center">
            <div className="flex items-center">
                <Menu className="lg:hidden text-2xl"
                    onClick={toggleSidebar}/>
                <a href='#' className='text-xl md:text-2xl text-gray400 pl-5'>{title}</a>
            </div>
            <div className="flex items-center md:border-l-[1.5px] md:border-r-[1.5px] border-[#C1C1C1]">
                <div className="md:px-3 pr-2 py-2 border-r-[1.5px] border-[#C1C1C1]">
                    <NotificationsOutlined fontSize="large" className="text-2xl" />
                    <ArrowDropDown className="text-gray-600" />
                </div>
                <div className="pl-5 md:px-5 py-3 flex">
                    <Image src={profilePicture} height="auto" className="size-[25px] md:hidden" alt="profile picture" />
                    <div className="text-gray-600 mr-3 hidden md:block">YOHANNES AFFANDY</div>
                    <ArrowDropDown className="text-gray-600" />
                </div>
            </div>
        </nav>
    )
}