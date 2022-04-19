import "./styles.css";
export const WeatherCard = (props) => {

    return(
        <div className="card-container">
            <div className="info-container">
                <div>
                    <h1>{props.cityName}</h1>
                    <h2>{props.mainTemp}</h2>
                </div>
                <hr></hr>
                <div>
                    <p>{props.temp}</p>
                </div>
            </div>  
            
            <img src={props.imgUrl} />
        </div>
    )

}