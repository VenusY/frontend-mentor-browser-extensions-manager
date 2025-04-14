import '../styles/scss/Extension.scss';
import { useState } from 'react';

export default function Extension({
  filter,
  extensionName,
  extensionDescription,
  extensionIsActive,
  extensionLogo,
}) {
  const [isActive, setIsActive] = useState(extensionIsActive);

  function toggleActiveState() {
    setIsActive(!isActive);
  }

  if (filter === 'active' && isActive) {
    return (
      <div className='extension'>
        <div className='extension__container'>
          <img
            src={extensionLogo}
            alt={`${extensionName} logo`}
            className='extension__logo'
          />
          <section className='extension__text-section'>
            <h2 className='extension__name'>{extensionName}</h2>
            <p className='extension__description'>{extensionDescription}</p>
          </section>
        </div>

        <div className='extension__buttons-container'>
          <button className='extension__remove-button'>Remove</button>
          <button
            className={`extension__toggle-button ${
              isActive ? '' : 'extension__toggle-button--inactive'
            }`}
            onClick={toggleActiveState}
          >
            <div
              className={`extension__toggle-indicator ${
                isActive ? '' : 'extension__toggle-indicator--inactive'
              }`}
            ></div>
          </button>
        </div>
      </div>
    );
  } else if (filter === 'inactive' && !isActive) {
    return (
      <div className='extension'>
        <div className='extension__container'>
          <img
            src={extensionLogo}
            alt={`${extensionName} logo`}
            className='extension__logo'
          />
          <section className='extension__text-section'>
            <h2 className='extension__name'>{extensionName}</h2>
            <p className='extension__description'>{extensionDescription}</p>
          </section>
        </div>

        <div className='extension__buttons-container'>
          <button className='extension__remove-button'>Remove</button>
          <button
            className={`extension__toggle-button ${
              isActive ? '' : 'extension__toggle-button--inactive'
            }`}
            onClick={toggleActiveState}
          >
            <div
              className={`extension__toggle-indicator ${
                isActive ? '' : 'extension__toggle-indicator--inactive'
              }`}
            ></div>
          </button>
        </div>
      </div>
    );
  } else if (filter === 'all') {
    return (
      <div className='extension'>
        <div className='extension__container'>
          <img
            src={extensionLogo}
            alt={`${extensionName} logo`}
            className='extension__logo'
          />
          <section className='extension__text-section'>
            <h2 className='extension__name'>{extensionName}</h2>
            <p className='extension__description'>{extensionDescription}</p>
          </section>
        </div>

        <div className='extension__buttons-container'>
          <button className='extension__remove-button'>Remove</button>
          <button
            className={`extension__toggle-button ${
              isActive ? '' : 'extension__toggle-button--inactive'
            }`}
            onClick={toggleActiveState}
          >
            <div
              className={`extension__toggle-indicator ${
                isActive ? '' : 'extension__toggle-indicator--inactive'
              }`}
            ></div>
          </button>
        </div>
      </div>
    );
  }
}
