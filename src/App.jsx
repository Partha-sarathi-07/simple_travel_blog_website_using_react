import Header from "./components/Header";
import Entry from "./components/Entry";
import data from "./data";

const entryComponent = data.map((place) => {
    return (
        <Entry
            key={place.id}
            {...place}
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
