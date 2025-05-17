

function Quote2({ quote2, message, isSchool, secImg, }) {
  return (
    <div className="flex flex-row max-lg:flex-col">
      <div>
        <img
          className="max-w-xl max-lg:w-full max-lg:align-middle"
          src={secImg}
          alt=""
        />
      </div>
      <div className="self-center">
        <h3
          className={
            isSchool
              ? 'text-4xl max-w-lg font-bold mb-3 text-[#006430]'
              : 'text-4xl max-w-lg font-bold mb-3 text-[#000E64]'
          }
        >
          Learning Has Never Been More Fun.
        </h3>
        <p className="text-2xl max-lg:w-full max-w-xl font-semibold">
          {' '}
          <span
            className={
              isSchool
                ? 'font-semibold font-serif underline text-blue-900'
                : 'font-semibold font-serif underline text-green-900'
            }
          >
            {message}
          </span>
          {quote2}
        </p>
      </div>
    </div>
  )
}

export default Quote2
