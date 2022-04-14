import "./styles.css";

export const BookCard = ({imgUrl, name, desc}) => {
    
    return(
    
        <div className="book-card-container">
        
            <img src={imgUrl} alt="book poster" />
        
            <div className="info-container">
        
                <h2 className="title">{name}</h2>
        
                <p className="desc">{desc}</p>
        
            </div>
        
            <button className="btn">Add to Cart</button>
        
        </div>
    
    )

}