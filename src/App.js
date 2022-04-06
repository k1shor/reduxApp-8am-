
import { Provider } from 'react-redux';
import MyRoutes from './MyRoutes';
import { createStore } from 'redux';
// import itemreducer from './reducers/itemreducer';
// import gamereducer from './reducers/gamereducer';
// import rootreducer from './reducers/rootreducer';
import FinalRootReducer from './FinalReducer/FinalRootReducer';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react';

function App() {
  // const myStore = createStore(itemreducer);
  // const gameStore = createStore(gamereducer)
  // const store = createStore(rootreducer)
  // const finalStore = createStore(FinalRootReducer)

  const persistConfig = {
    key: 'root',
    storage,
  }

  const OurPersistedReducer = persistReducer(persistConfig, FinalRootReducer)
  const our_store = createStore(OurPersistedReducer)
  const our_persistor = persistStore(our_store)

  return (
    // <Provider store={myStore}>
    // <Provider store={gameStore}>
    <Provider store={our_store}>
      <PersistGate persistor={our_persistor}>
        <MyRoutes />
      </PersistGate>
    </Provider>
  );
}

export default App;
