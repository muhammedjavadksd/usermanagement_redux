import React from 'react'
import Background from '../../Component/UI/Background'
import UserDashBoardComponent from '../../Component/Dashboard/UserDashBoardComponent'

function UserDashboard() {
  return (
    <div>
      <Background>
        <UserDashBoardComponent></UserDashBoardComponent>
      </Background>
    </div>
  )
}

export default UserDashboard
