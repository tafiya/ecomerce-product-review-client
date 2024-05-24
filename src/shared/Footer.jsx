import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
const Footer = () => {
    return (
        <div className="bg-[#C1DCDC]">   
            <footer className=" max-w-[1248px] mx-auto  flex flex-col text-black">
        <div className="flex lg:flex-row flex-col justify-between  items-center py-10">
            <aside className="text-xl">
               
                <p className="text-[#000000] mb-4">GREENMIND </p>
                <p className=" text-[#1E1E1E80] text-lg font-medium mb-4"> We help you find <br />your dream plant</p>
                <div className=" flex gap-10 mb-4">
                <FaFacebookF  className=" border border-[#1E1E1E80] rounded-full p-2" size={'2.2rem'} color="#1E1E1E80"/>
                <AiFillInstagram className=" border border-[#1E1E1E80] rounded-full p-2" size={'2.2rem'} color="#1E1E1E80" />
                <FaTwitter className=" border border-[#1E1E1E80] rounded-full p-2" size={'2.2rem'} color="#1E1E1E80"  />

                </div>
               
            </aside>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-10">
            <nav className="flex flex-col gap-3 text-lg">
                <ul>
                <li className="mb-4">
                        <a className="cursor-pointer hover:underline font-bold text-[#1E1E1E] ">Information</a>
                    </li>
                    <li className="mb-4">
                     <a className="cursor-pointer hover:underline font-normal text-[#1E1E1E80]">About</a>
                    </li>
                    <li className="mb-4">
                        <a className=" text-[#1E1E1E80] cursor-pointer hover:underline font-normal">Product</a>
                    </li>
                    <li className="mb-4">
                        <a className="text-[#1E1E1E80] cursor-pointer hover:underline font-normal">Blog</a>
                    </li>
                </ul>
            </nav>
            <nav className="flex flex-col gap-3 text-lg">
            <ul>
                <li className="mb-4">
                        <a className="cursor-pointer hover:underline font-bold text-[#1E1E1E] ">Company</a>
                    </li>
                    <li className="mb-4">
                     <a className="cursor-pointer hover:underline font-normal text-[#1E1E1E80]">Community</a>
                    </li>
                    <li className="mb-4">
                        <a className=" text-[#1E1E1E80] cursor-pointer hover:underline font-normal">Career</a>
                    </li>
                    <li className="mb-4">
                        <a className="text-[#1E1E1E80] cursor-pointer hover:underline font-normal">Our story</a>
                    </li>
                </ul>
            </nav>
            <nav className="flex flex-col gap-3 text-lg">
            <ul>
                <li className="mb-4">
                        <a className="cursor-pointer hover:underline font-bold text-[#1E1E1E] ">Contact</a>
                    </li>
                    <li className="mb-4">
                     <a className="cursor-pointer hover:underline font-normal text-[#1E1E1E80]">Getting Started</a>
                    </li>
                    <li className="mb-4">
                        <a className=" text-[#1E1E1E80] cursor-pointer hover:underline font-normal">Pricing</a>
                    </li>
                    <li className="mb-4">
                        <a className="text-[#1E1E1E80] cursor-pointer hover:underline font-normal">Resources</a>
                    </li>
                </ul>
            </nav>

            </div>
           
        </div>
        <aside className="py-5  text-sm">
            <p className=" text-[#1E1E1E80] text-lg font-medium">2023 all Right Reserved Term of use GREENMIND</p>
        </aside>
    </footer></div>

     
   
    );
};

export default Footer;