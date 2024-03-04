import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './pages/Root';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Logout from './pages/Logout';
import Flashcards from './pages/Flashcards';
import Notes from './pages/Notes';
import Assignments from './pages/Assignments';
import Resources from './pages/Resources';
import EditNote from "./pages/EditNote.js"
import EditFlashcard from "./pages/EditFlashcard.js"
import NewNote from './pages/NewNote';
import ProtectedRoute from './components/ProtectedRoute.js';
import Index from "./pages/Index"
import Dashboard from "./pages/Dashboard"
import ErrorPage from './pages/ErrorPage';
import './index.css';
import "./dark.css"
import { loader as indexLoader } from './loaders/indexLoginLoader.js';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Index />,
        loader: indexLoader
      },
      {
        path: "/login",
        element: <Login />,
        loader: indexLoader
      },
      {
        path: "/signup",
        element: <Signup />,
        loader: indexLoader
      },
      {
        path: "/logout",
        element: <Logout />,
      },
      {
        path: "/dashboard",
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
        path: "/flashcards/edit/:id",
        element: <ProtectedRoute><EditFlashcard /></ProtectedRoute>
      },
      {
        path: "/notes/edit/:id",
        element: <ProtectedRoute><EditNote /></ProtectedRoute>
      },
      {
        path: "/notes",
        element: <ProtectedRoute><Notes /></ProtectedRoute>,
      },
      {
        path: "/assignments",
        element: <ProtectedRoute><Assignments /></ProtectedRoute>,
      },
      {
        path: "/resources",
        element: <ProtectedRoute><Resources /></ProtectedRoute>,
      },
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