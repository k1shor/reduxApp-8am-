const initialData ={
    game: "Football",
    player: "LEO MESSI"
}

function gamereducer(state=initialData, action){
    switch(action.type){
        case "UPDATE_GAME":
            return {...state, game:action.payload}

        case "UPDATE_PLAYER":
            return {...state, player:action.payload}

        default:
            return state;
    }
}

export default gamereducer

// ...statevariable ->rest operator -> to maintain previous state of statevariable