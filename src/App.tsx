import { BrowserRouter } from "react-router-dom";
import AppRouter from "@/AppRouter";
import NavBar from "@/components/layout/NavBar/NavBar";
import Footer from "@/components/layout/Footer/Footer";
import { ThemeProvider } from "./components/layout/theme-toggle/ThemeProvider";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <BrowserRouter>
        <div className="flex flex-col h-dvh bg-background">
          <NavBar></NavBar>
          <div className="flex-grow">
            <AppRouter></AppRouter>
          </div>
          <Footer></Footer>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
