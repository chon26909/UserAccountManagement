import { FC } from 'react';
import { IUser } from '../../types/user';
import '../../styles/user.scss';
import { Link } from 'react-router-dom';

interface IUserCard extends IUser {}

const UserCard: FC<IUserCard> = (user) => {
    const defaultImage = 'https://newadmin.heberjeunes.fr/images/no-photo.png';

    return (
        <div className='card'>
            <div>
                <img src={user.image || defaultImage} alt={user.firstName} />
            </div>
            <div className='fullname'>
                Name : {user.firstName} {user.lastName}
            </div>
            <div>Gender : {user.gender}</div>
            <div className='email'> Email : {user.email}</div>
            <Link to={user.id + '/posts'}>
                <div className='underline'>see posts</div>
            </Link>
        </div>
    );
};

export default UserCard;
