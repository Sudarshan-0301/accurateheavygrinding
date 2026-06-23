import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ProcessPage from './pages/ProcessPage';
import IndustriesPage from './pages/IndustriesPage';
import InfrastructurePage from './pages/InfrastructurePage';
import ContactPage from './pages/ContactPage';
import NotFound from './pages/NotFound';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout><HomePage /></Layout>} path="/" />
          <Route element={<Layout><AboutPage /></Layout>} path="/about" />
          <Route element={<Layout><ServicesPage /></Layout>} path="/services" />
          <Route element={<Layout><ProcessPage /></Layout>} path="/process" />
          <Route element={<Layout><IndustriesPage /></Layout>} path="/industries" />
          <Route element={<Layout><InfrastructurePage /></Layout>} path="/infrastructure" />
          <Route element={<Layout><ContactPage /></Layout>} path="/contact" />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
