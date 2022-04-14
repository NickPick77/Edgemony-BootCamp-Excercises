import './App.css';
import { BookCard } from './components/BookCard';
import { data } from './data/data';

function App() {
    return (
        <div className="App">
            <h1>Books</h1>
            <div className="cards-wrapper">
            {
            data.products.map(item =>
                <BookCard
                    imgUrl={item.img}
                    name={item.name}
                    desc={item.description.split("").slice(0, 200).join("") + "..."}
                    key={item.id} />
                )
            }
      </div>
    
        
        </div>
    );
}

export default App;
