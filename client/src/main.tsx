import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import './index.css';

import App from './App.tsx';
import Board from './pages/Board.tsx';
import ErrorPage from './pages/ErrorPage.tsx';
import EditTicket from './pages/EditTicket.tsx';
import CreateTicket from './pages/CreateTicket.tsx';
import Login from './pages/Login.tsx';
import Auth from './utils/auth'; // Import the AuthService

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: Auth.loggedIn() ? <Board /> : <Navigate to="/login" replace />
      },
      {
        path: '/edit',
        element: Auth.loggedIn() ? <EditTicket /> : <Navigate to="/login" replace />
      },
      {
        path: '/create',
        element: Auth.loggedIn() ? <CreateTicket /> : <Navigate to="/login" replace />
      },
      {
        path: '/login',
        element: <Login />
      }
    ]
  }
]);

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
}
