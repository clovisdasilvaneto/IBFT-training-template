import Home from "./pages/Home";
import LPThemeProvider from "./providers/LPThemeProvider";
import LearningCard from "./components/LearningCard/LearningCard";
import Learning from "./containers/Learning";

function App() {
  return (
    <LPThemeProvider>
      <Home />

      <Learning />
    </LPThemeProvider>
  );
}

export default App;
