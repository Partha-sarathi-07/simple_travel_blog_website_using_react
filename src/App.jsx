import Header from "./components/Header";
import Entry from "./components/Entry";
import data from "./data";

const entryComponent = data.map((place) => {
    return (
        <Entry
            key={place.id}
            img={place.img}
            title={place.title}
            country={place.country}
            googleMapsLink={place.googleMapsLink}
            dates={place.dates}
            text={place.text}
        />
    );
});
function App() {
    return (
        <main>
            <Header />
            {entryComponent}
        </main>
    );
}

export default App;
