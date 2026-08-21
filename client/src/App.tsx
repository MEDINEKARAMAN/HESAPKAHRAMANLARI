import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ConceptsPage from "./pages/ConceptsPage";
import GamesPage from "./pages/GamesPage";
import RoutesPage from "./pages/RoutesPage";
import TablesPage from "./pages/TablesPage";
import ExamPage from "./pages/ExamPage";
import VideoLessonsPage from "./pages/VideoLessonsPage";
import PdfLibraryPage from "./pages/PdfLibraryPage";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/temel-kavramlar" component={ConceptsPage} />
      <Route path="/oyunlar" component={GamesPage} />
      <Route path="/hesap-rotasi" component={RoutesPage} />
      <Route path="/tablolar-vergi" component={TablesPage} />
      <Route path="/sinav-merkezi" component={ExamPage} />
      <Route path="/video-dersleri" component={VideoLessonsPage} />
      <Route path="/pdf-kutuphanesi" component={PdfLibraryPage} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
