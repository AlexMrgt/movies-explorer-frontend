import { useLocation } from "react-router";

function BurgerButton({
  onBurgerClick,
  isMenuPopupOpen
}) {

  function toggleBurger() {

    onBurgerClick();
  }

  const location = useLocation();



  return (
    <button
      className={`
        burger
        ${isMenuPopupOpen ? 'burger_active' : ''}
        ${location.pathname === '/' ? 'burger_main' : ''}
      `}
      type='button'
      onClick={toggleBurger}
    >
      <span
        className='burger__icon'
      />
    </button>
  )
}

export default BurgerButton;
