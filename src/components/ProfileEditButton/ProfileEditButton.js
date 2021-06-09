function ProfileEditButton({
  buttonText,
  onEnableEdit
}) {

  function handleEditClick(){
    onEnableEdit();
  }

  return (
    <button
      className='profile-edit-button'
      onClick={handleEditClick}
    >
      {buttonText}
    </button>
  )
}

export default ProfileEditButton;
