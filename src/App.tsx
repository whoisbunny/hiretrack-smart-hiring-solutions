import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import InstallationGuide from "./pages/InstallationGuide";
import UserBasedInstallation from "./pages/UserBasedInstallation";
import RootBasedInstallation from "./pages/RootBasedInstallation";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/installation-guide" element={<InstallationGuide />} />
          <Route path="/user-based-installation" element={<UserBasedInstallation />} />
          <Route path="/root-based-installation" element={<RootBasedInstallation />} />
          <Route path="/root-installer-readme" element={<RootBasedInstallation />} />
          <Route path="/user-based-installer-readme" element={<UserBasedInstallation />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
