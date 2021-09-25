import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
// import getStore from '../redux/store'

import React from 'react';
import Root from  './PreApp'


// export const {store, persistor} = getStore()

function App() {
  return (
    <BrowserRouter>
        <Root/>
    </BrowserRouter>
  )
  
}

export default App;
