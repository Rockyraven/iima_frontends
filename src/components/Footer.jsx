import logo from "../assets/logo1.jpg";
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="bg-bgShade py-5 md:px-12 px-4">
            <div className='flex flex-col md:flex-row md:items-center justify-between gap-8 mb-5'>
                <a href="/"><img src={logo} alt="" className="w-[200px]"/></a>
                <div className='flex flex-col md:flex-row md:items-center gap-4 flex-wrap'>
                <a
              href="#"
              className="block text-primary hover:text-gray-400 py-2 px-4"
            >
              Home
            </a>
            <a href="#" className="block hover:text-gray-400 py-2 px-4">
              Gallery
            </a>
            <a href="#" className="block  hover:text-gray-400 py-2 px-4">
              
              About me
            </a>
            <a href="#" className="block  hover:text-gray-400 py-2 px-4">
              Testimonials
            </a>
                </div>
                <div className='flex items-center gap-4 ml-4'>
                    <FaFacebookF className='cursor-pointer hover:-translate-y-3 transition-all duration-300 text-xl hover:text-primary'/>
                    <FaInstagram className='cursor-pointer hover:-translate-y-3 transition-all duration-300 text-xl hover:text-primary'/>
                    <FaTwitter className='cursor-pointer hover:-translate-y-3 transition-all duration-300 text-xl hover:text-primary'/>
                    <FaLinkedin className='cursor-pointer hover:-translate-y-3 transition-all duration-300 text-xl hover:text-primary'/>
                </div>
            </div>
            <hr />
            <div className='mt-6 flex flex-col md:flex-row justify-between gap-8'>
                {/* <p>Made with 💖 by Airdokan</p> */}
               
                    <a href="/" className='hover:text-slate-400'>Privacy Policy</a>
                    <a href="/" className='hover:text-slate-400'>Terms of Service</a>
                    <a href="/" className='hover:text-slate-400'>Cookies Settings</a>
               
            </div>
        </div>
    );
};

export default Footer;