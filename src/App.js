
import { Provider } from 'react-redux';
import MyRoutes from './MyRoutes';
import { createStore } from 'redux';
// import itemreducer from './reducers/itemreducer';
// import gamereducer from './reducers/gamereducer';
// import rootreducer from './reducers/rootreducer';
import FinalRootReducer from './FinalReducer/FinalRootReducer';


function App() {
  // const myStore = createStore(itemreducer);
  // const gameStore = createStore(gamereducer)

  // const store = createStore(rootreducer)

  const finalStore = createStore(FinalRootReducer)



  return (
    // <Provider store={myStore}>
    // <Provider store={gameStore}>
    <Provider store={finalStore}>
      <MyRoutes/>
    </Provider>
  );
}

export default App;
