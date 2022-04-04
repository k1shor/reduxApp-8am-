const initialData ={
    value:100
}

function itemreducer(state=initialData, action){
    switch(action.type){
        case "ADD_TO_CART":
           return {value: ++state.value};

        case "REMOVE_FROM_CART":
            return {value: --state.value};

        case "CLEAR_CART":
            return {value: 0}

        default:
            return state;
    }
    
}

export default itemreducer;