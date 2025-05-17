
import { FaWhatsapp } from 'react-icons/fa6'
import { MdAddCall, MdOutlineMailOutline } from 'react-icons/md'

function Owners({ post, name, number, mail, whatsApp }) {
  return (
    <div className="text-center px-5">
      <h4 className='text-2xl font-bold  max-md:text-lg max-sm:text-sm'>{post} </h4>
      <h2 className='text-4xl font-semibold mb-3 text-blue-500 max-sm:text-sm max-md:text-2xl'>{name}</h2>
      <ul className=" flex gap-3 flex-wrap justify-center font-semibold">
        <li className=" text-black font-bold max-sm:text-[12px] text-lg cursor-pointer hover:text-orange-500 hover:scale-115 transition-transform duration-300 ease-in-out ">
          <a
            className="flex items-center"
            href={"tel:+91" +number} 
            title="call"
          >
            <MdAddCall className="" /> <span className="">Call</span>
          </a>
        </li>
        <li className=" font-bold text-lg  max-sm:text-[12px] cursor-pointer hover:text-green-500 hover:scale-115 transition-transform duration-300 ease-in-out ">
          <a
            className="flex items-center"
            href={whatsApp}
            target="_blank"
            rel="noopener noreferrer"
            title="WhatsApp"
          >
            <FaWhatsapp /> <span>WhatsApp</span>
          </a>
        </li>
        <li className="text-black font-bold max-sm:text-[12px] text-lg cursor-pointer hover:text-blue-500 hover:scale-115 transition-transform duration-300 ease-in-out ">
          <a
            className="flex items-center"
            href={mail}
            target="_blank"
            rel="noopener noreferrer"
            title="Email"
          >
            <MdOutlineMailOutline  />
            <span>Email</span>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Owners
