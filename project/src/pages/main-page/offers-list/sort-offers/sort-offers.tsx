import { useEffect, useRef, useState } from 'react';
import { Dispatch } from 'redux';
import { connect, ConnectedProps } from 'react-redux';
import { Store } from 'types/store';
import { Actions } from 'types/action';
import { SortOptions } from 'const';
import { changeSortOption } from 'store/action';

const mapStateToProps = ({ selectedSortOption }: Store) => (
  { selectedSortOption }
);

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onSortOptionClick: (selectedSortOption: SortOptions) => {
    dispatch(changeSortOption(selectedSortOption));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function SortOffers(props: PropsFromRedux): JSX.Element {
  const { selectedSortOption, onSortOptionClick } = props;

  const [isSortMenuActive, setIsSortMenuActive] = useState(false);

  const sortRef = useRef<HTMLFormElement | null>(null);

  const toogleSortMenu = () => setIsSortMenuActive((prev) => !prev);

  useEffect(() => {
    const handleOutsideClick = (evt: MouseEvent) => {
      if (sortRef.current?.contains(evt.target as Node)) {
        return;
      }
      setIsSortMenuActive(false);
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);


  return (
    <form
      ref={sortRef}
      className="places__sorting"
      action="#" method="get"
    >
      <span className="places__sorting-caption">Sort by</span>
      <span
        onClick={toogleSortMenu}
        className="places__sorting-type"
        tabIndex={0}
      >
        {selectedSortOption}
        <svg
          className="places__sorting-arrow"
          width="7"
          height="4"
        >
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul
        className={`places__options places__options--custom
        ${isSortMenuActive ? 'places__options--opened' : ''}`}
      >
        {Object.values(SortOptions).map((option) => {
          const isSelected = selectedSortOption === option;
          return (
            <li
              key={option}
              className={`places__option
              ${isSelected ?
              'places__option--active' : ''}`}
              tabIndex={0}
              onClick={() => {
                onSortOptionClick(option);
                toogleSortMenu();
              }}
            >
              {option}
            </li>
          );
        })}
      </ul>
    </form>
  );
}

export { SortOffers };

export default connector(SortOffers);
