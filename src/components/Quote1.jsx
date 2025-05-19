

function Quote1({quote1,message,isSchool}) {
  return (
    <div className={`${isSchool && 'max-sm:mt-48'} max-w-4xl self-start max-lg:self-center max-lg:mt-44 max-sm:mt-44   ml-3`}>
          <p className="text-2xl max-w-xl font-semibold">
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
            <br />
            {quote1}
          </p>
        </div>
  )
}

export default Quote1