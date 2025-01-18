import location_marker from '../assets/marker.png'
function Entry() {
    return (
        <div className="card">
            <img 
            className='location_img'
            src="https://scrimba.com/links/travel-journal-japan-image-url" 
            alt="mount fuji image" />
            <div className="info">
                <div className="location_and_heading">
                    <div className='location'>
                        <img 
                        src={location_marker} 
                        alt="location logo" />
                        <span>JAPAN</span>
                        <a href="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu">View on Google Maps</a>
                    </div>
                    <h1 className='heading'>Mount Fuji</h1>
                </div>
                <div className='date_and_description'>
                    <span className='date'>12 jan,2021 - 24 jan,2021</span>
                    <p className='description'>
                        Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Entry