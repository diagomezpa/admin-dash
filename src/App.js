import { ColorModeContext , useMode } from "./scenes/dashboard/global/theme";
import { CssBaseline,  ThemeProvider} from "@mui/material";
function App() {
  const [theme, colorMode] = useMode();

  return (
  
          <div className="app">
         <p> hola mundo </p>
    </div>
      
  );
}

export default App;
