import ProfileForm from '../ProfileForm/ProfileForm';

function Profile({
  onUpdateUser,
  onEditClick,
  onSignOutClick,
  onCancelEdit,
  isProfileOnEdit,
  isOnLoadingData,
}) {


  return (
    <main
      className='profile'
    >
      <ProfileForm
        isOnLoadingData={isOnLoadingData}
        onSignOutClick={onSignOutClick}
        onUpdateUser={onUpdateUser}
        isProfileOnEdit={isProfileOnEdit}
        onEditClick={onEditClick}
        onCancelEdit = {onCancelEdit}
      />
    </main>
  )
}

export default Profile;
