import "./App.css";
import { SnackbarProvider } from "notistack";

function App() {
  return (
    <SnackbarProvider autoHideDuration={3000} maxSnack={2}>
      <>Hello App</>
    </SnackbarProvider>
  );
}

export default App;
