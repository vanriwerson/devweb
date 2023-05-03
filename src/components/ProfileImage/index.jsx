import profileImage from '../../assets/images/profile.png';
import './style.css';

function ProfileImage() {
  return (
    <div className='profile-image-container'>
      <img
        className='profile-image'
        src={ profileImage }
        alt='Desenvolvedor Web Bruno Riwerson Silva e seu sorriso de boas-vindas.'
      />
    </div>
  );
}

export default ProfileImage;
