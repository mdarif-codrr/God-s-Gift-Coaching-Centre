import { FaWhatsapp } from 'react-icons/fa'
import { MdOutlineMailOutline } from 'react-icons/md'
import { MdAddCall } from 'react-icons/md'
import { Link } from 'react-router'
function Footer() {
  const pathMap = {
    Home: 'home',
    'For Coaching': '/forcoaching',
    'For School': '/forschool',
    'For Parents': '/forparents',
    'Contact Us': '/contactus',
    'About Us': '/aboutus',
  }
  return (
    <div className="w-full pb-16 bg-[#050920] min-h-44 ">
      <div>
        <ul className=" flex justify-evenly gap-5 flex-wrap pt-9 font-semibold">
          <li className=" text-white font-bold text-2xl max-sm:text-lg cursor-pointer hover:text-orange-500 hover:scale-115 transition-transform duration-300 ease-in-out ">
            <a
              className="flex items-center"
              href="tel:+917260075959"
              title="call"
            >
              <MdAddCall className="" /> <span className="">Call</span>
            </a>
          </li>
          <li className="text-white font-bold text-2xl max-sm:text-lg cursor-pointer hover:text-green-500 hover:scale-115 transition-transform duration-300 ease-in-out ">
            <a
              className="flex items-center"
              href="https://wa.me/917260075959"
              target="_blank"
              rel="noopener noreferrer"
              title="WhatsApp"
            >
              <FaWhatsapp /> <span>WhatsApp</span>
            </a>
          </li>
          <li className="text-white font-bold text-2xl max-sm:text-lg cursor-pointer hover:text-blue-500 hover:scale-115 transition-transform duration-300 ease-in-out ">
            <a
              className="flex items-center"
              href="mailto:mdarif@gmail.com?subject=Hello&Sir=Type your message here"
              target="_blank"
              rel="noopener noreferrer"
              title="Email"
            >
              <MdOutlineMailOutline />
              <span>Email</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="w-[70%] mx-auto my-0">
        <ul className=" flex justify-evenly gap-5 flex-wrap pt-9 font-semibold">
          {Object.entries(pathMap).map(([label, path], index) => (
            <li
              key={index}
              className="text-white hover:text-[#0060D0] cursor-pointer font-bold border p-3 rounded-2xl hover:scale-111 transition-transform duration-300 ease-in-out"
            >
              <Link to={path}>{label}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p className="text-center text-sm text-gray-500 py-4">
          © {new Date().getFullYear()} God's Gift Coaching Centre & Public
          School. सर्वाधिकार सुरक्षित। | All rights reserved.
        </p>
        <p className='text-center text-sm text-gray-500 pb-2'>
          Made With ❤️ By <span className='text-red-600 underline' ><a href="https://www.instagram.com/iam_mdarifg?igsh=MXJmejM0YndwM3MwbQ==" target='_blank'>Md Arif</a></span>
        </p>
      </div>
    </div>
  )
}

export default Footer
