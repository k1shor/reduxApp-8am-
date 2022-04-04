import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Nav from '../components/Nav'


const Main = () => {

  const [game,setGame] = useState("")
  const [player,setPlayer] = useState("")
  const dispatch= useDispatch()

  const cartValue = useSelector(store=>store.itemStore.value)
  // console.log(cart)

  const gameValue = useSelector(store=>store.gameStore)

  return (
    <>
    <Nav/>

    <button onClick={()=>dispatch({type:"ADD_TO_CART"})}>Update Cart</button>
    
    {cartValue>0 &&
    <button onClick={()=>dispatch({type:"REMOVE_FROM_CART"})}>Remove from Cart</button>}
    <button onClick={()=>dispatch({type:"CLEAR_CART"})}>Clear Cart</button>

    <h2>Name of the game : {gameValue.game}</h2>
    <h2>Player's Name: {gameValue.player}</h2>
    <input type={'text'} placeholder="enter game here" onChange={(e)=>setGame(e.target.value)}/>
    <button onClick={()=>dispatch({type:"UPDATE_GAME", payload:game})}>Update Game</button>
    <input type={'text'} placeholder="enter player's name" onChange={event=>setPlayer(event.target.value)}/>
    <button onClick={()=>dispatch({type:"UPDATE_PLAYER", payload:player})}>Update Player</button>
    </>
  )
}

export default Main