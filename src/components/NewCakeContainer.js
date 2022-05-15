import React,{useState} from 'react'
//useSelector in react used for getting the state data;
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import {buyCake} from '../redux'

function NewCakeContainer() {
    const [number,setNumber] = useState(1);
  const numOfCakes = useSelector(state=>state.cake.numOfCakes)
  const dispatch = useDispatch();
  return (
    <div>
        <h2>Num of cakes -{numOfCakes} </h2>
        <input type="number" onChange={(e)=>{setNumber(e.target.value)}} value = {number} />
        <button onClick={()=>dispatch(buyCake(number))}>Buy {number} Cakes</button>
    </div>
  )
}


export default NewCakeContainer