import logo from '../assets/kevinRushLogo.png';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';

const Navbar = () => {
  const handleDownload=()=>{
    const link=document.createElement('a');
    link.href='/files/shalem_resume_2024.docx';
    link.download='Resume.docx';
    link.click();
  }
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img className='mx-2 w-10' src={logo} alt="" />
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          <button className='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-1 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700' onClick={handleDownload}>Download CV</button>
            <FaLinkedin/>
            <FaGithub/>
            <FaSquareXTwitter/>
            <FaInstagram/>
        </div>

    </nav>
  )
}

export default Navbar