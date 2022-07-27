import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { TourDateContextProvider } from './context/WorkoutContext';
import { VenuesContextProvider } from './context/VenueContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <TourDateContextProvider>
  <VenuesContextProvider>
      <App />
  </VenuesContextProvider>
  </TourDateContextProvider>
  </React.StrictMode>
);

