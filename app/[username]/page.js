import React from 'react'

const Username = async ({params}) => {
    const {username} = await params
  return (
    <div>
      {username}
    </div>
  )
}

export default Username
