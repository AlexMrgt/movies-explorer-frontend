function ProfileLogoutButton({
  buttonText,
  onSignOut
}) {

  function handeSignOutClick(){
    onSignOut();
  }

  return (
    <button
      className='profile-logout-button'
      onClick={handeSignOutClick}
      type='button'
    >
      {buttonText}
    </button>
  )
}

export default ProfileLogoutButton;
