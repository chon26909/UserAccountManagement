import { FC } from 'react';
import { Link } from 'react-router-dom';

const HomePage: FC = () => {
    return (
        <div className='p-5'>
            <div className='my-5'>
                <Link to='users'>go to users page</Link>
            </div>
        </div>
    );
};

export default HomePage;
