import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
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
import Index from "./pages/Index"
import Dashboard from "./pages/Dashboard"
import ErrorPage from './pages/ErrorPage';
import { loader as indexLoader } from './loaders/indexLoginLoader.js';
import { loader as dashboardLoader } from "./loaders/dashboardLoader.js"
import { loader as flashcardLoader } from './loaders/flashcardsLoader.js';
import { loader as notesLoader } from './loaders/notesLoader.js';
import { loader as assignmentLoader } from "./loaders/assignmentLoader.js"
import { loader as authCheck } from "./loaders/authCheck.js"
import './index.css';
import "./dark.css"

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <QueryClientProvider client={queryClient}><Root /></QueryClientProvider>,
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
        element: <Dashboard />,
        loader: dashboardLoader
      },
      {
        path: "/notes/new",
        element: <NewNote />,
        loader: authCheck
      },
      {
        path: "/flashcards",
        element: <Flashcards />,
        loader: flashcardLoader
      },
      {
        path: "/flashcards/edit/:id",
        element: <EditFlashcard />,
        loader: authCheck
      },
      {
        path: "/notes/edit/:id",
        element: <EditNote />,
        loader: authCheck
      },
      {
        path: "/notes",
        element: <Notes />,
        loader: notesLoader
      },
      {
        path: "/assignments",
        element: <Assignments />,
        loader: assignmentLoader
      },
      {
        path: "/resources",
        element: <Resources />,
        loader: authCheck
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
