import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import MainPage from './routes/MainPage/index.tsx';
import Header from './routes/Header/index.tsx';
import Account from './routes/Account/index.tsx';
import { Provider } from 'react-redux'
import { store } from './store.ts';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Outlet />
      </>
    ),
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: "/account",
        element: <Account />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
);