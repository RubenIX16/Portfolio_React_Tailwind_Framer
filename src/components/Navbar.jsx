import logo from '../assets/RS-removebg-preview.png'
import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import {FaTwitterSquare} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"

const Navbar = () => {
  return (
  <nav className="mb-20 flex items-center justify-between py-6">
  <div className="flex shrink-0 items-center">
    <img className='mx-2 w-20' src={logo} alt="logo" />
  </div>
  <div className=" m-8 flex gap-4 text-2xl items-center justify-between ">
    <a href="https://www.linkedin.com/in/ruben-soares-b539a424b" target='_blank' rel="noopener noreferrer"><FaLinkedin/></a>
    <a href="https://github.com/RubenIX16" target='_blank' rel="noopener noreferrer"><FaGithub /></a>
  </div>
  </nav>
  );
};

export default Navbar