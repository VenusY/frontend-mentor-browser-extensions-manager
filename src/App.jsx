import './styles/reset.css';
import './styles/scss/App.scss';
import Header from './components/Header';
import ExtensionsList from './components/ExtensionsList/ExtensionsList';

export default function App() {
  return (
    <>
      <Header />
      <ExtensionsList />
    </>
  );
}
