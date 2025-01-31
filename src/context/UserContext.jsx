import React, { createContext } from 'react'
export  const DataContext = createContext()
const UserContext = ({children}) => {
  const username ="Rachan"
  return (
    <div>
<DataContext.Provider value={username}>
  {children}
</DataContext.Provider>
    </div>
  )
}

export default UserContext