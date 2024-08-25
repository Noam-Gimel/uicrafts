import './App.css';
import { PrimeReactProvider } from 'primereact/api';
import { SettingsBar } from './components/CraftingPanel/CraftingPanel';
import { CraftingPage } from './components/CraftingPage/CraftingPage';
// import CraftingPage from './components/ButtonPage/ButtonPage';


function App() {
  const value = {
    ripple: true
  };
  return (
    <>
    <PrimeReactProvider value={value}>

      <div>

        {/* New menu settings */}
        {/* <SettingsBar /> */}

        <CraftingPage />

      </div>

    </PrimeReactProvider>
    </>
  );
}

export default App;
