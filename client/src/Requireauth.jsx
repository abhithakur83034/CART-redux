import React from 'react'

const Requireauth = (props) => {
    const user = JSON.parse(localStorage.getItem('user'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    if(!user && !admin){
        return <>404 error</>
    }

  return (
    <>
      {props.children}
    </>
  )
}

export default Requireauth