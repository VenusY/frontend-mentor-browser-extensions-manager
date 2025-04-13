import data from './data.json';

export default function ExtensionsList() {
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
        <button className='filters-container__button'>All</button>
        <button className='filters-container__button'>Active</button>
        <button className='filters-container__button'>Inactive</button>
      </div>

      {data.map((extension, index) => {
        return (
          <div key={extension.name} className='extension'>
            <div className='extension__container'>
              <img
                src={require(`../../assets/images/logo-${logoArray[index]}.svg`)}
                alt={`${extension.name} logo`}
                className='extension__logo'
              />

              <section className='extension__text-section'>
                <h2 className='extension__name'>{extension.name}</h2>
                <p className='extension__description'>
                  {extension.description}
                </p>
              </section>
            </div>

            <div className='extension__buttons-container'>
              <button className='extension__remove-button'>Remove</button>

              <button className='extension__toggle-button'>
                <div className='extension__toggle-indicator'></div>
              </button>
            </div>
          </div>
        );
      })}
    </main>
  );
}
