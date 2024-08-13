import './App.css';
import { PrimeReactProvider } from 'primereact/api';
import { SettingsBar } from './components/Settings/settings';
import { Droper } from './components/Dropdown/Droper';
import DropdownMenu from './components/ChatDropdown/DropdownMenu';
// import CraftingPage from './components/ButtonPage/ButtonPage';


function App() {
  const value = {
    ripple: true
};
  return (
    <>
    <PrimeReactProvider value={value}>
      {/* <CraftingPage /> */}
      
      {/* Joe dropdown */}
      {/* <Droper /> */}

      <div className='tempo-center-container'>

        {/* chat dropdown */}
        {/* <DropdownMenu /> */}

        {/* New menu settings */}
        <SettingsBar />
      </div>

    </PrimeReactProvider>
    </>
  );
}

export default App;
