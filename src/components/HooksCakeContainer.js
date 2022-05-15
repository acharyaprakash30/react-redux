  import React from 'react'
  //useSelector in react used for getting the state data;
  import {useSelector} from 'react-redux'
  import {useDispatch} from 'react-redux'
  import {buyCake} from '../redux'

  function HooksCakeContainer() {
    const numOfCakes = useSelector(state=>state.cake.numOfCakes)
    const dispatch = useDispatch();
    return (
      <div>
          <h2>Num of cakes -{numOfCakes} </h2>
          <button onClick={()=>dispatch(buyCake())}>Buy Cake</button>
      </div>
    )
  }


  export default HooksCakeContainer