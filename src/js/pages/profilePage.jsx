import PROFILE_IMAGE from '../../assets/images/profile/women.webp';
import {IoMdGrid} from 'react-icons/io';
import {BiMoviePlay} from 'react-icons/bi';
import {BsPersonSquare} from 'react-icons/bs';
import Story from '../components/story';
import USER from '../../mock/users/users.json';

function ProfilePage({userID}) {
    const user = USER[userID];
    return(
        <div className='in-profilePage'>
          <div className='container'>
            <div className='in-profileInfo border--bottom'>
                <div className='in-profileInfo__image'>
                    <img className='in-image--profile' src={PROFILE_IMAGE} alt="profile of a user"/>
                </div>
              <div className='in-profileInfo__user'>
                <div className='in-profileUser'>
                  <h1 className='in-profileUser__title'>{user.id}</h1>
                  <div className='in-profileUser__buttons'>
                    <button className='button button--secondary'>Follow</button>
                    <button className='button button--secondary'>Direct Message</button>
                  </div>
                </div>
              </div>
              <div className='in-profileInfo__bio'>
                <h4>{user.info.name}</h4>
                <p>{user.info.bio}</p>
              </div>
              <div className='in-profileInfo__stories in-stories border--bottom'>
                {(user.content.stories.map(element => <Story title={element.title} image={element.image}/>))}
              </div>

              <div className='in-profileInfo__numbers'>
                <h3 className='in-profileInfo__number'>{user.info.postsCount}<span>Posts</span></h3>
                <h3 className='in-profileInfo__number'>{user.info.followersCount}<span>Followers</span></h3>
                <h3 className='in-profileInfo__number in-profileInfo__number--inverted'>{user.info.followingCount}<span>Following</span></h3>
              </div>
            </div>
            <div className='in-profileNavigate border--bottom'>
              <div className='in-profileNavigate__buttons'>
                <button className='in-profileNavigate__button selected button button--icon'><IoMdGrid className='icon'/><span>POSTS</span></button>
                <button className='in-profileNavigate__button button button--icon'><BiMoviePlay className='icon'/><span>REELS</span></button>
                <button className='in-profileNavigate__button button button--icon'><BsPersonSquare className='icon'/><span>TAGGED</span></button>
              </div>
              <div className='in-profileNavigate__grid in-grid'>
                {(user.content.feed) && (user.content.feed.map(element => (
                    <div className='in-grid__item cropImage'>
                        <img className='img-fluid' src={element.src} alt={element.alt}/>
                    </div>
                )))}
              </div>
            </div>
          </div>
        </div>
    );
}

export default ProfilePage;