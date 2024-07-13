// waheguru ji ka khalsa waheguru ji ki fahteh 
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import { store } from './freatures/Store';
import GlobalContext from './Context/GlobalContext'; 



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
      <BrowserRouter>
        <GlobalContext>
          <Provider store={store}>
            <App />
          </Provider>
         </GlobalContext>
      </BrowserRouter>
    
  </React.StrictMode>
);

reportWebVitals();
