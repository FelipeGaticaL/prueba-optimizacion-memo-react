import { memo } from 'react'

const Title = ({ children }) => {

  console.log('rendering title')
  return (
    <h1>
        {/* Saca las propiedades de children */}
      {children}
    </h1>
  )
}

export default memo(Title)
