function Story({image, title}) {
    return(
        <div className='in-profile__story in-story'>
            <img src={image.src} alt={image.alt} loading="lazy"/>
            <h2>{title}</h2>
        </div>
    )
}

export default Story;