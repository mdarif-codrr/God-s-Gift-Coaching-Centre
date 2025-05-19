import CurvedHeading from "./CurvedHeading"


function Welcome({heroimg,message,isSchool}) {
  return (
    <div className="relative">
          <p className="text-center text-red-600 font-semibold text-4xl max-md:text-xl pb-3">
            WELCOME
          </p>
          <p className="text-center text-2xl max-md:text-lg">To</p>
          <CurvedHeading heading={message} isSchool={isSchool} />
          <img
            className={`w-2xl right-0 absolute  ${isSchool && '' } -z-10 ${
              isSchool ? 'top-24' : 'top-0 '
            }`}
            src={heroimg}
            alt=""
          />
        </div>
  )
}

export default Welcome