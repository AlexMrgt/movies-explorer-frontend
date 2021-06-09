import ProfileForm from '../ProfileForm/ProfileForm';

function Profile({
  isProfileOnEdit,
  isOnLoadingProfileData,
  onUpdateUser,
  onEnableEdit,
  onSignOut,
  onDisableEdit
}) {

  return (
    <main
      className='profile'
    >
      <ProfileForm
        isOnLoadingProfileData={isOnLoadingProfileData}
        isProfileOnEdit={isProfileOnEdit}
        onUpdateUser={onUpdateUser}
        onEnableEdit={onEnableEdit}
        onDisableEdit={onDisableEdit}
        onSignOut={onSignOut}
      />
    </main>
  )
}

export default Profile;
