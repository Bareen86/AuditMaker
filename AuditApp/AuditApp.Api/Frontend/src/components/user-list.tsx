import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useTypedSelector } from '../hooks/use-typed-selector'
import { useDispatch } from 'react-redux'
import { fetchUsers } from '../store/action-creators/user'
import type {} from 'redux-thunk/extend-redux';
import { useActions } from '../hooks/use-action'

export default function UserList() {

  const {error, loading, users} = useTypedSelector(state => state.user)
  const  {fetchUsers} = useActions();


  useEffect(() => {
    fetchUsers()
  }, [])

  if(loading) {
    return <h1>Идет загрузка...</h1>
  }
  if (error){
    return <h1>Произошла ошибка</h1>
  }

  return (
    <div>
      {
        users.map(user =>

          {
            return <div key={user.id}>{user.name}</div>
          }
          
          )
      }
    </div>
  )
}
