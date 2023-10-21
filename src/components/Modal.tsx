import { FC, useEffect, useState } from 'react';
interface IModalProps {
    children: JSX.Element | JSX.Element[];
    isOpen: boolean;
    modalClassName?: string;
    bodyClassName?: string;
    loading?: boolean;
}

const Modal: FC<IModalProps> = ({ children, isOpen, modalClassName, bodyClassName }) => {
    const [isOverlay, setIsOverlay] = useState(false);
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsOverlay(true);
            setTimeout(() => {
                setShow(true);
            }, 100);
        } else {
            setShow(false);
            setTimeout(() => {
                setIsOverlay(false);
            }, 270);
        }
    }, [isOpen]);

    if (!show) {
        return <div></div>;
    }

    return (
        <div
            className={`${
                isOverlay ? 'custom-modal fixed inset-0 z-50 bg-black/50 flex items-center justify-center focus:outline outline-none' : ''
            } `}
        >
            <div
                className={`${modalClassName}
                            h-[600px] w-[1000px] 
                            lg:h-[600px] lg:w-4/6
                            md:h-full md:w-full 
                          
                            bg-white
                            overflow-hidden
                            relative rounded-md md:rounded-none
                            
                            transition duration-200
                            ${show ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}
                            `}
            >
                <div className={[bodyClassName, 'h-full '].join(' ')}>{children}</div>
            </div>
        </div>
    );
};

export const ModalHeader: FC<{ children: JSX.Element; className?: string }> = ({ children, className }) => {
    return <div className={[className, 'h-[70px] p-5 border-b-2 border-b-[#dedede] text-xl font-semibold'].join(' ')}>{children}</div>;
};
export const ModalFooter: FC<{ children: JSX.Element; className?: string }> = ({ children, className }) => {
    return <div className={[className, 'h-[80px] p-5'].join(' ')}>{children}</div>;
};

export default Modal;
