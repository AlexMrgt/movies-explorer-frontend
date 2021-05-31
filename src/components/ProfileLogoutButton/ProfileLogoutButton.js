function ProfileLogoutButton({
  buttonText,
  onSignOutClick
}) {

  return (
    <button
      className='profile-logout-button'
      onClick={onSignOutClick}
      type='button'
    >
      {buttonText}
    </button>
  )
}

export default ProfileLogoutButton;
