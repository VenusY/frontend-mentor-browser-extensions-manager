export default function Header() {
  return (
    <header className='header'>
      <img
        src={require('../assets/images/logo.svg')}
        alt='Logo'
        className='header__logo'
      />

      <button className='theme-button'>
        <img
          src={require('../assets/images/icon-sun.svg')}
          alt='Sun'
          className='theme-button__icon theme-button__icon--sun'
        />
        <img
          src={require('../assets/images/icon-moon.svg')}
          alt='Moon'
          className='theme-button__icon theme-button__icon--moon'
        />
      </button>
    </header>
  );
}
