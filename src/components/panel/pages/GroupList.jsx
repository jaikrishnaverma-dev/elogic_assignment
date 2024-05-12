import React from 'react'
import { useSelector } from 'react-redux'
import Users from './users_list/Users'

const GroupList = () => {
    const {groups}=useSelector(data=>data.mainSlice)
  return <Users/>
}

export default GroupList