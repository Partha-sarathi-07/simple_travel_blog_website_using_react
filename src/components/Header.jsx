import globe from '../assets/globe.png'

function Header() {
    return (
        <header>
            <img src={globe} alt="globe logo" />
            <span>my travel journal.</span>
        </header>
    )
}

export default Header;