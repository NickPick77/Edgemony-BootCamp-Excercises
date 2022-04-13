import './styles.css';

export const Avatar = () => {
    
    return (
    
        <section className='Avatar-container'>
            <img src='https://i.pravatar.cc/200' className='Avatar-img' alt='user avatar'></img>
            <div className='id-container'>
                <p>Name</p>
                <p>Surname</p>
            </div>
        </section>
    
    );

};