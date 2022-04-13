import './styles.css';

export const ExperienceBox = (props) => {
    return (
        <section className='Experience-container'>
            <div>
                <h2>
                    {props.work}
                </h2>
                <p>Est commodo non aliqua eiusmod. Laborum velit ex ea deserunt aute ex sunt elit id exercitation. Amet ea cillum eu aliquip ut mollit non officia esse proident. Occaecat minim labore ea reprehenderit velit dolor quis aute eu sit in. Minim ea deserunt ex eiusmod ipsum quis ut ex amet esse excepteur cillum nulla.</p>
            </div>
            
            <div>
                <h2>
                    {props.lang}
                </h2>
                <p>Exercitation laborum dolor minim nostrud commodo laboris duis consectetur velit anim laboris do sint. Commodo eiusmod consequat tempor tempor sunt consequat nostrud laboris labore et laboris esse deserunt occaecat. Aute ea reprehenderit pariatur velit aute tempor et eu tempor.</p>
            </div>
            
            <div>
                <h2>
                    {props.hobby}
                </h2>
                <p>Enim minim exercitation fugiat eiusmod cupidatat ipsum est. Cillum commodo incididunt consequat occaecat magna in culpa mollit sint laborum magna. Aute sunt voluptate cillum esse officia pariatur in cillum consectetur quis aliquip non. Non sit elit voluptate elit sunt sint eiusmod. Est commodo duis consequat quis est esse in nostrud consequat proident.</p>
            </div>
       
        </section>
    );
}
