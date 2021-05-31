function ProfileEditButton({
  buttonText,
  onEditClick
}) {

  return (
    <button
      className='profile-edit-button'
      onClick={onEditClick}
    >
      {buttonText}
    </button>
  )
}

export default ProfileEditButton;
