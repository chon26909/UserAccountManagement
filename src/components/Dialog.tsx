import { FC } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Button from './Button';
import { AiFillCheckCircle, AiFillExclamationCircle } from 'react-icons/ai';

interface IDialogProps {
    isOpen: boolean;
    title: string;
    message?: string;
    icon?: 'success' | 'danger' | 'warning' | undefined;
    onConfirm: () => void;
    onCancel: () => void;
}

const IconDialog = ({ icon }: { icon: IDialogProps['icon'] }) => {
    if (icon === 'success')
        return (
            <div className='text-green'>
                <AiFillCheckCircle />
            </div>
        );
    else if (icon === 'warning')
        return (
            <div className='text-primary'>
                <AiFillExclamationCircle />
            </div>
        );
    else if (icon === 'danger')
        return (
            <div className='text-red'>
                <AiFillExclamationCircle />
            </div>
        );
    else return <i></i>;
};

const Dialog: FC<IDialogProps> = (props) => {
    const { isOpen, title, message, icon, onConfirm, onCancel } = props;
    return (
        <AnimatePresence>
            {isOpen ? (
                <motion.div
                    className={`
                        z-auto
                        fixed
                        top-0
                        left-0
                        right-0
                        bottom-0
                        bg-[#000]
                        bg-opacity-50
                     `}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    <motion.div
                        className={`
                            fixed
                            max-w-[430px]
                            h-fit
                            bg-white
                            m-auto
                            top-0
                            left-0
                            right-0
                            bottom-0
                            px-6
                            py-5
                            rounded-lg
                            shadow-md
                        `}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                    >
                        <div className='text-[45px] flex justify-center'>
                            <IconDialog icon={icon} />
                        </div>

                        <div className='text-center text-[22px] font-bold'>{title}</div>
                        <div className='text-center'>{message || ''}</div>
                        <div className='text-center mt-3'>
                            <Button
                                className='mx-2 px-[4rem] !text-black bg-tranperent border-gray border-[1px] box-border border=[1px]'
                                onClick={onCancel}
                            >
                                ยกเลิก
                            </Button>
                            <Button
                                className={[icon === 'danger' ? 'bg-red border-red' : '', 'mx-2 px-[4rem] border-primary border-[1px]'].join(' ')}
                                onClick={onConfirm}
                            >
                                ยืนยัน
                            </Button>
                        </div>
                    </motion.div>
                </motion.div>
            ) : null}
        </AnimatePresence>
    );
};

export default Dialog;
