function Story({image, title}) {
    return(
        <div className='in-profile__story in-story'>
            <img src={image.src} alt={image.alt}/>
            <h5>{title}</h5>
        </div>
    )
}

export default Story;