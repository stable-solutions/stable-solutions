import { Outlet, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { ClerkProvider } from '@clerk/clerk-react';
import ScrollToTop from '../components/ScrollToTop';  // Import the ScrollToTop component
import ErrorBoundary from '../components/ErrorBoundary';  // Import the ErrorBoundary

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable Key");
}

export default function RootLayout() {
    const navigate = useNavigate();

    return (
        <ClerkProvider
            routerPush={(to) => navigate(to)}
            routerReplace={(to) => navigate(to, { replace: true })}
            publishableKey={PUBLISHABLE_KEY}
        >
            <ErrorBoundary> {/* Wrap the content with ErrorBoundary */}
                <ScrollToTop />  {/* Scrolls to top on route changes */}
                <div className="flex flex-col min-h-screen">
                    <Header />
                    <main className="flex-grow pt-16 md:pt-0">
                        <Outlet />
                    </main>
                </div>
            </ErrorBoundary>
        </ClerkProvider>
    );
}
