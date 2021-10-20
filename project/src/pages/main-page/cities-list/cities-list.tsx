import { CITIES } from 'const';

type CitiesListProps = {
  currentCity: string,
  onCityChange: (city: string) => void,
}

function CitiesList(props: CitiesListProps): JSX.Element {
  const { currentCity, onCityChange } = props;

  return (
    <>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {CITIES.map((city) => {
              const isActive = currentCity === city;
              return (
                (
                  <li key={city} className="locations__item">
                    <a
                      onClick={(evt) => {
                        evt.preventDefault();
                        onCityChange(city);
                      }}
                      className={`locations__item-link tabs__item ${isActive ? 'tabs__item--active' : ''}`}
                      href="/"
                    >
                      <span>{city}</span>
                    </a>
                  </li>
                )
              );
            })}
          </ul>
        </section>
      </div>
    </>
  );
}

export default CitiesList;
