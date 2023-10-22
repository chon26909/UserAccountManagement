import { useState } from 'react';
import Button from '../../components/Button';
import ModalCreateUser from './ModalCreateUser';

const HeaderPageUser = () => {
    const [show, setShow] = useState(true);

    return (
        <>
            <div className='flex justify-between items-end'>
                <h2 className='my-3 text-[32px] font-bold'>User Account Management</h2>
                <div>
                    <Button className='bg-primary w-[200px]' onClick={() => setShow(true)}>
                        Add User
                    </Button>
                </div>
            </div>
            <ModalCreateUser show={show} close={() => setShow(false)} />
        </>
    );
};

export default HeaderPageUser;
