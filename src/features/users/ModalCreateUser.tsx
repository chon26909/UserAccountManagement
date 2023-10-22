import { FC, useEffect, useState } from 'react';
import Modal, { ModalHeader, ModalBody, ModalFooter } from '../../components/Modal';
import { useAppDispatch } from '../../redux/store';
import { createUser } from '../../redux/slices/userSlice';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { AiOutlineClose } from 'react-icons/ai';
import Dialog from '../../components/Dialog';
import Dropdown, { IDropdownOptions } from '../../components/Dropdown';

interface IModalCreateUserProps {
    show: boolean;
    close: () => void;
}

const ModalCreateUser: FC<IModalCreateUserProps> = (props) => {
    const dispatch = useAppDispatch();

    const genderOption: IDropdownOptions = [
        {
            label: '-',
            value: ''
        },
        {
            label: 'male',
            value: 'male'
        },
        {
            label: 'female',
            value: 'female'
        }
    ];

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState(0);
    const [gender, setGender] = useState('');

    const [showConfirm, setShowConfirm] = useState(false);

    const submitCreateUser = () => {
        dispatch(createUser({ firstName: firstName, lastName: lastName, age: age, gender: gender }));
        setShowConfirm(false);
        props.close();
    };

    const confirmCreateUser = () => {
        setShowConfirm(true);
    };

    const cancelCreateUser = () => {
        setShowConfirm(false);
    };

    useEffect(() => {
        setFirstName('');
        setLastName('');
        setAge(0);
        setGender('');
    }, [props.show]);

    return (
        <>
            <Modal isOpen={props.show}>
                <ModalHeader>
                    <div className='flex justify-between items-center'>
                        <div>Create User</div>
                        <div className='rounded-full p-1 cursor-pointer' onClick={() => props.close()}>
                            <AiOutlineClose />
                        </div>
                    </div>
                </ModalHeader>
                <ModalBody>
                    <div>
                        <Input label='firstName' type='text' value={firstName} onChange={(event) => setFirstName(event.target.value)} />
                    </div>
                    <div>
                        <Input label='lastName' type='text' value={lastName} onChange={(event) => setLastName(event.target.value)} />
                    </div>
                    <div>
                        <Input label='age' type='text' value={age} onChange={(event) => setAge(Number(event.target.value))} />
                    </div>
                    <div>
                        <Dropdown options={genderOption} label='gender' value={gender} onChange={(value) => setGender(value)} />
                    </div>
                </ModalBody>
                <ModalFooter>
                    <div className='flex justify-end'>
                        <Button onClick={confirmCreateUser}>craete</Button>
                    </div>
                </ModalFooter>
            </Modal>
            <Dialog
                isOpen={showConfirm}
                title='Confirm create user'
                icon='warning'
                onConfirm={() => submitCreateUser()}
                onCancel={() => cancelCreateUser()}
            />
        </>
    );
};

export default ModalCreateUser;
