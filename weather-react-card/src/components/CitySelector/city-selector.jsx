import "./styles.css";

const data = [
    {
        LonLat: "9.18951,45.464272",
        cityName: "Milano"
    },
    {
        LonLat: "12.4839,41.894741",
        cityName: "Roma"
    },
    {
        LonLat: "13.35976,38.115822",
        cityName: "Palermo"
    },
    {
        LonLat: "13.78,45.648609",
        cityName: "Trieste"
    },
    {
        LonLat: "8.29313,46.116501",
        cityName: "Domodossola"
    }
]

export const CitySelector = (props) => {
    
    const changeEvent = (event) => {
        const selectedCity = event.target.value.split(",")
        console.log(selectedCity)
        props.notify(selectedCity);
    };

    return (
        <section className="selector-container">
            <select onChange={changeEvent} className="cities-selector">
                <optgroup label="Cities list">
                {data.map((element, index) => (
                    <option key={index} value={element.LonLat}>{element.cityName}</option>
                ))}
                </optgroup>
            </select>
        </section>
    )
}