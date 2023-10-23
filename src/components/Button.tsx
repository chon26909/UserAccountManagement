import { ButtonHTMLAttributes, FC } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    full?: boolean;
}

const Button: FC<ButtonProps> = ({ children, className, full, ...other }) => {
    return (
        <button
            {...other}
            className={[
                className,
                full ? 'w-full' : 'min-w-[130px]',
                'shadow-lg text-white bg-primary py-[0.5rem] px-5  rounded cursor-pointer select-none'
            ].join(' ')}
        >
            {children}
        </button>
    );
};

export default Button;
