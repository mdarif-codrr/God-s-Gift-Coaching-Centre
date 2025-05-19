

function Cources({ data, isSchool,courceHead }) {
  return (
    <div className="w-full">
      <p className="text-center max-sm:text-2xl  font-bold text-3xl py-3 pt-5">
        {/* courses message  courceHead */}
        {courceHead}
      </p>
      <div
        className={`${
          isSchool ? 'bg-green-300' : 'bg-blue-300'
        } text-center flex-wrap pb-3 flex justify-center`}
      >
        {data.map((ele) => {
          return (
            <div
              key={ele.head}
              className="rounded-md w-[25%] p-5 m-5 max-md:m-1.5 max-md:w-[45%] bg-white max-sm:w-[65%] shadow-xl/30 shadow-black hover:scale-107 transition-transform duration-300 ease-in-out hover:bg-gray-200"
            >
              <h3
                className={
                  isSchool
                    ? 'text-[#006402] font-semibold text-xl'
                    : 'text-[#000E64] font-semibold text-xl '
                }
              >
                {ele.head}
              </h3>
              <p className='pt-3'>{ele.message}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Cources
