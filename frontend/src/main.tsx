import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import RootLayout from './layouts/root-layout'
import './i18n';

import HomePage from './pages/LandingPage.tsx';
import ErrorPage from './pages/commonPages/ErrorPage.tsx';
import PravicyPolicyPage from './pages/commonPages/PrivacyPolicyPage.tsx';
import TermsOfServicePage from './pages/commonPages/TermsOfServicePage.tsx';
import CookiePolicyPage from './pages/commonPages/CookiePolicyPage.tsx'
import AboutUsPage from './pages/commonPages/AboutUsPage.tsx'
import ContactUsPage from './pages/commonPages/ContactUsPage.tsx'
import CareersPage from './pages/commonPages/CareersPage.tsx'

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    errorElement: <ErrorPage />, // Add errorElement
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/privacy-policy", element: <PravicyPolicyPage /> },
      { path: "/terms-of-service", element: <TermsOfServicePage /> },
      { path: "/cookie-policy", element: <CookiePolicyPage /> },
      { path: "/about-us", element: <AboutUsPage /> },
      { path: "/contact-us", element: <ContactUsPage /> },
      { path: "/careers", element: <CareersPage /> },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)