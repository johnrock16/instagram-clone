import {IoMdGrid} from 'react-icons/io';
import {BiMoviePlay} from 'react-icons/bi';
import {BsPersonSquare} from 'react-icons/bs';
import Story from '../components/story';
import USER from '../../mock/users/users.json';
import { useTranslation } from 'react-i18next';

function ProfilePage({userID}) {
  const { t } = useTranslation();
  const user = USER[userID];
  return(
    <div className='in-profilePage'>
      <div className='container'>
        <div className='in-profileInfo border--bottom'>
          <div className='in-profileInfo__image'>
            <img className='in-image--profile' src={user.info.image.src} alt={`profile of a ${user.id}`} loading="lazy"/>
          </div>
          <div className='in-profileInfo__user'>
            <div className='in-profileUser'>
              <h1 className='in-profileUser__title'>{user.id}</h1>
              <div className='in-profileUser__buttons'>
                <button className='button button--secondary'>{t("buttons.follow")}</button>
                <button className='button button--secondary'>{t("buttons.directMessage")}</button>
              </div>
            </div>
          </div>
          <div className='in-profileInfo__bio'>
            <h2>{user.info.name}</h2>
            <p>{user.info.bio}</p>
          </div>
          <div className='in-profileInfo__stories in-stories border--bottom'>
            {(user.content.stories.map((element, index) => <Story key={`in-story-${index}`} title={element.title} image={element.image}/>))}
          </div>
          <div className='in-profileInfo__numbers'>
            <h3 className='in-profileInfo__number'>{user.info.postsCount}<span>{t("common.posts")}</span></h3>
            <h3 className='in-profileInfo__number'>{user.info.followersCount}<span>{t("common.followers")}</span></h3>
            <h3 className='in-profileInfo__number in-profileInfo__number--inverted'>{user.info.followingCount}<span>{t("common.following")}</span></h3>
          </div>
        </div>
        <div className='in-profileNavigate border--bottom'>
          <div className='in-profileNavigate__buttons'>
            <button className='in-profileNavigate__button selected button button--icon' aria-label='button to see posts grid'><IoMdGrid className='icon'/><span>{t("common.posts")}</span></button>
            <button className='in-profileNavigate__button button button--icon' aria-label='button to see reels grid'><BiMoviePlay className='icon'/><span>{t("common.reels")}</span></button>
            <button className='in-profileNavigate__button button button--icon' aria-label='button to see tagged grid'><BsPersonSquare className='icon'/><span>{t("common.tagged")}</span></button>
          </div>
          <div className='in-profileNavigate__grid in-grid'>
            {(user.content.feed) && (user.content.feed.map((element, index) => (
              <div className='in-grid__item' key={`in-gridItem-${index}`}>
                <img className='img-fluid' src={element.src} alt={element.alt} loading="lazy"/>
              </div>
            )))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;