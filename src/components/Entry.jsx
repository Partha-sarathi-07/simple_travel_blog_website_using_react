import location_marker from '../assets/marker.png'

function Entry(props) {
    return (
        <div className="card">
            <img 
            className='location_img'
            src={props.img.src} 
            alt={props.img.alt} />
            <div className="info">
                <div className="location_and_heading">
                    <div className='location'>
                        <img 
                        src={location_marker} 
                        alt="location logo" />
                        <span>{props.country}</span>
                        <a href={props.googleMapsLink}>View on Google Maps</a>
                    </div>
                    <h1 className='heading'>{props.title}</h1>
                </div>
                <div className='date_and_description'>
                    <span className='date'>{props.dates}</span>
                    <p className='description'>{props.text}</p>
                </div>
            </div>
        </div>
    )
}

export default Entry