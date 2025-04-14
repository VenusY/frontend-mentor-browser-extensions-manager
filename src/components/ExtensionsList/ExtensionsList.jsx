import '../../styles/scss/ExtensionsList.scss';
import { useState } from 'react';
import data from './data.json';
import Extension from '../Extension';

export default function ExtensionsList() {
  const [filter, setFilter] = useState('all');

  function applyFilter(e) {
    setFilter(e.currentTarget.textContent.toLowerCase());
  }

  const logoArray = [
    'devlens',
    'style-spy',
    'speed-boost',
    'json-wizard',
    'tab-master-pro',
    'viewport-buddy',
    'markup-notes',
    'grid-guides',
    'palette-picker',
    'link-checker',
    'dom-snapshot',
    'console-plus',
  ];

  return (
    <main className='extensions-list'>
      <h1 className='extensions-list__heading'>Extensions List</h1>

      <div className='filters-container'>
        <button
          className={`filters-container__button ${
            filter === 'all' ? 'filters-container__button--active' : ''
          }`}
          onClick={applyFilter}
        >
          All
        </button>

        <button
          className={`filters-container__button ${
            filter === 'active' ? 'filters-container__button--active' : ''
          }`}
          onClick={applyFilter}
        >
          Active
        </button>

        <button
          className={`filters-container__button ${
            filter === 'inactive' ? 'filters-container__button--active' : ''
          }`}
          onClick={applyFilter}
        >
          Inactive
        </button>
      </div>

      <div className='extensions-list__container'>
        {data.map((extension, index) => {
          return (
            <Extension
              key={extension.name}
              filter={filter}
              extensionName={extension.name}
              extensionDescription={extension.description}
              extensionIsActive={extension.isActive}
              extensionLogo={require(`../../assets/images/logo-${logoArray[index]}.svg`)}
            />
          );
        })}
      </div>
    </main>
  );
}
