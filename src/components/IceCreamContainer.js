import React from 'react'
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {buyIceCream} from '../redux'

function IceCreamContainer() {
    const noOfIceCreams = useSelector(state=>state.iceCream.noOfIceCreams)
    const dispatch = useDispatch();
  return (
      <div>
    <h2>Num of cakes -{noOfIceCreams} </h2>
    <button onClick={()=>dispatch(buyIceCream())}>Buy IceCream</button>
    </div>
  )
}

export default IceCreamContainer