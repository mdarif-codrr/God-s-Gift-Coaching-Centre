import { createContext, useState } from 'react'

export const CoachingContext = createContext()

function ContextProvider({ children }) {
  
  const [isSchool, setIsSchool] = useState(false)

  return (
    <CoachingContext.Provider value={{ isSchool, setIsSchool }}>
      {children}
    </CoachingContext.Provider>
  )
}

export default ContextProvider
