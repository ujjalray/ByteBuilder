import Header from "./components/Header"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import ErrorPage from "./pages/ErrorPage"
import Compiler from "./pages/Compiler";
import { ThemeProvider } from "@/components/theme-provider"


function App() {

  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Header />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/compiler" element={<Compiler />} />
          <Route path="*" element={<ErrorPage />} />

        </Routes>
      </ThemeProvider>

    </>
  )
}

export default App
