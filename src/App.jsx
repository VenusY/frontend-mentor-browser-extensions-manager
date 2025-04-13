import './styles/reset.css';
import './styles/scss/App.scss';
import { useState } from 'react';
import Header from './components/Header';
import ExtensionsList from './components/ExtensionsList/ExtensionsList';

export default function App() {
  const [theme, setTheme] = useState('dark');

  function toggleTheme() {
    if (theme === 'dark') {
      setTheme('light');
      return;
    }

    setTheme('dark');
  }

  return (
    <div id={theme} className='app'>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <ExtensionsList />
    </div>
  );
}
