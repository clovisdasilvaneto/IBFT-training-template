import Home from "./pages/Home";
import LPThemeProvider from "./providers/LPThemeProvider";
import LearningCard from "./components/LearningCard/LearningCard";

function App() {
  return (
    <LPThemeProvider>
      <Home />
      <LearningCard />
    </LPThemeProvider>

    
  );
}

export default App;
