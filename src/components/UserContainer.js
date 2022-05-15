import React from 'react'
import {useSelector,useDispatch} from 'react-redux';
import {fetchUsers} from '../redux'

function UserContainer() {

  const allUsers = useSelector(state=>state.user);
  console.log('allusers',allUsers);
  const dispatch = useDispatch();
  return (
    <div>
      hello world
    </div>
  )
}

export default UserContainer