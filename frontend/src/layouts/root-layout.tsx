import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import ScrollToTop from '../components/ScrollToTop';  // Import the ScrollToTop component
import ErrorBoundary from '../components/ErrorBoundary';  // Import the ErrorBoundary

export default function RootLayout() {
    return (
        <ErrorBoundary> {/* Wrap the content with ErrorBoundary */}
            <ScrollToTop />  {/* Scrolls to top on route changes */}
            <div className="flex flex-col min-h-screen">
                <Header />
                <main className="flex-grow pt-16 md:pt-0">
                    <Outlet />
                </main>
            </div>
        </ErrorBoundary>
    );
}
