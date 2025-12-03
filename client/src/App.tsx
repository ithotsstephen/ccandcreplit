import { Switch, Route, useLocation, Router } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useAuth } from "@/hooks/useAuth";
import { useEffect } from "react";
import { isStaticMode } from "@/lib/staticData";
import Home from "@/pages/Home";
import Admin from "@/pages/Admin";
import NotFound from "@/pages/not-found";
import BianFoundation from "@/pages/BianFoundation";
import TogafTraining from "@/pages/TogafTraining";
import It4itManagement from "@/pages/It4itManagement";
import Consulting from "@/pages/Consulting";
import About from "@/pages/About";
import WhatWeDo from "@/pages/WhatWeDo";
import Training from "@/pages/Training";
import Insights from "@/pages/Insights";
import Industry from "@/pages/Industry";
import BIAN from "@/pages/BIAN";
import BianSIG from "@/pages/BianSIG";
import Events from "@/pages/Events";
import StratIQ from "@/pages/StratIQ";
import Banking from "@/pages/Banking";
import Insurance from "@/pages/Insurance";
import Manufacturing from "@/pages/Manufacturing";
import BankingAdviseIQ from "@/pages/BankingAdviseIQ";
import BankingStratIQ from "@/pages/BankingStratIQ";
import BankingArchIQ from "@/pages/BankingArchIQ";
import ArchitectureFoundations from "@/pages/ArchitectureFoundations";
import ArchiMate from "@/pages/ArchiMate";
import SparxEA from "@/pages/SparxEA";
import TogafPractitioner from "@/pages/TogafPractitioner";
import Togaf9Certified from "@/pages/Togaf9Certified";
import TogafBusinessArchitecture from "@/pages/TogafBusinessArchitecture";
import IT4ITFoundation from "@/pages/IT4ITFoundation";
import Contact from "@/pages/Contact";

function Redirect({ to }: { to: string }) {
  const [, setLocation] = useLocation();
  
  useEffect(() => {
    setLocation(to);
  }, [to, setLocation]);
  
  return null;
}

function AppRouter() {
  const { isAuthenticated, isLoading, user } = useAuth();

  // In static mode, skip authentication loading
  if (!isStaticMode && isLoading) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/what-we-do" component={WhatWeDo} />
      <Route path="/ccandc-training" component={Training} />
      <Route path="/training/architecture-foundations" component={ArchitectureFoundations} />
      <Route path="/training/archimate" component={ArchiMate} />
      <Route path="/training/sparx-ea" component={SparxEA} />
      <Route path="/training/togaf-practitioner" component={TogafPractitioner} />
      <Route path="/training/togaf-9-certified" component={Togaf9Certified} />
      <Route path="/training/togaf-business-architecture" component={TogafBusinessArchitecture} />
      <Route path="/training/it4it-foundation" component={IT4ITFoundation} />
      <Route path="/consulting" component={Consulting} />
      <Route path="/viztools" component={StratIQ} />
      <Route path="/stratiq" component={() => <Redirect to="/viztools" />} />
      <Route path="/banking" component={Banking} />
      <Route path="/banking/adviseiq" component={BankingAdviseIQ} />
      <Route path="/banking/stratiq" component={BankingStratIQ} />
      <Route path="/banking/archiq" component={BankingArchIQ} />
      <Route path="/insurance" component={Insurance} />
      <Route path="/manufacturing" component={Manufacturing} />
      <Route path="/industry" component={() => <Redirect to="/banking" />} />
      <Route path="/bian-training" component={BIAN} />
      <Route path="/bian-sig" component={BianSIG} />
      <Route path="/insights" component={Insights} />
      <Route path="/events" component={Events} />
      <Route path="/services/bian-foundation" component={BianFoundation} />
      <Route path="/services/togaf-training" component={TogafTraining} />
      <Route path="/services/it4it-management" component={It4itManagement} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      {!isStaticMode && (
        <Route path="/admin">
          {isAuthenticated && user?.isAdmin ? <Admin /> : <div className="min-h-screen w-full flex items-center justify-center bg-background">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-foreground mb-4">Admin Access Required</h1>
              <p className="text-muted-foreground mb-6">You need admin privileges to access this page.</p>
              <a href="/api/login" className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors">
                Login as Admin
              </a>
            </div>
          </div>}
        </Route>
      )}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  // No base path needed for root domain deployment
  const basePath = "";

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Router base={basePath}>
          <Toaster />
          <AppRouter />
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
