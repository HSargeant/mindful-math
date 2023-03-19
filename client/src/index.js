import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './pages/Root';
// import ErrorPage from './pages/ErrorPage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Logout from './pages/Logout';
import Flashcards from './pages/Flashcards';
import Notes from './pages/Notes';
import Agenda from './pages/Agenda';
import Resources from './pages/Resources';
import EditNote from "./pages/EditNote.js"
import EditFlashcard from "./pages/EditFlashcard.js"
import NewNote from './pages/NewNote';
import ProtectedRoute from './components/ProtectedRoute.js';
import Index from "./pages/Index"
import Dashboard from "./pages/Dashboard"
import './index.css';
import "./dark.css"
import { element } from 'prop-types';
// Hi everyone
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    // errorElement: <ErrorPage />,
    children: [
      // {
        //   path: "login",
        //   element: <Login />,
        // },
        {
          index: true,
          element: <Index /> //users will land at the login page
        },
        {
          path: "/login",
          element: <Login />
        },
        {
          path: "/signup",
          element: <Signup />,
        },
        {
          path: "/logout",
          element: <ProtectedRoute><Logout /></ProtectedRoute>,
        },
        {
          path:"/dashboard",
          element: <ProtectedRoute><Dashboard /></ProtectedRoute>,
        
        },
        {
          path: "/notes/new",
          element: <ProtectedRoute><NewNote /></ProtectedRoute>,
        },
        {
          path: "/flashcards",
          element: <ProtectedRoute><Flashcards /></ProtectedRoute>,
        },
        {
          path:"/flashcards/edit/:id",
          element: <ProtectedRoute><EditFlashcard /></ProtectedRoute>
        },
        {
          path:"/notes/edit/:id",
          element: <ProtectedRoute><EditNote /></ProtectedRoute>
        },
        {
          path: "/notes",
          element: <ProtectedRoute><Notes /></ProtectedRoute>,
        },
        {
          path: "/agenda",
          element: <ProtectedRoute><Agenda /></ProtectedRoute>,
        },
        {
          path: "/resources",
          element: <ProtectedRoute><Resources /></ProtectedRoute>,
        },

      // {
      //   path:"",
      //   element:<ProtectedRoute/>
      // }
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
