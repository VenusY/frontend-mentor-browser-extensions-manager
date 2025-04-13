export default function Header({ theme, toggleTheme }) {
  return (
    <header className='header'>
      <img
        src={require('../assets/images/logo.svg')}
        alt='Logo'
        className='header__logo'
      />

      <button className='theme-button' onClick={toggleTheme}>
        <img
          src={require('../assets/images/icon-sun.svg')}
          alt='Sun'
          className='theme-button__icon theme-button__sun-icon'
        />
        <img
          src={require('../assets/images/icon-moon.svg')}
          alt='Moon'
          className='theme-button__icon theme-button__moon-icon'
        />
      </button>
    </header>
  );
}
