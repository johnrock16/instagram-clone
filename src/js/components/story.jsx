import PropTypes from 'prop-types';
function Story({image, title}) {
    return(
        <button className='in-profile__story in-story button--transparent' aria-label={`Story ${title}`}>
            <img src={image.src} alt={image.alt} loading="lazy" width="56" height="56"/>
            <h2>{title}</h2>
        </button>
    )
}

Story.propTypes = {
    image: PropTypes.object,
    title: PropTypes.string
}

export default Story;