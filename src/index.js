import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Story from './pages/Story'
import Shop from './pages/Shop'
import Events from './pages/Events'
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "story",
    element: <Story />,
  },
  {
    path: "shop",
    element: <Shop />,
  },
  {
    path: "events",
    element: <Events />,
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
