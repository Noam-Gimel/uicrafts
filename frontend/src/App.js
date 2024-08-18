import './App.css';
import { PrimeReactProvider } from 'primereact/api';
import { SettingsBar } from './components/Settings/settings';
// import CraftingPage from './components/ButtonPage/ButtonPage';


function App() {
  const value = {
    ripple: true
};
  return (
    <>
    <PrimeReactProvider value={value}>

      <div className='tempo-center-container'>

        {/* New menu settings */}
        <SettingsBar />

      </div>

    </PrimeReactProvider>
    </>
  );
}

export default App;
