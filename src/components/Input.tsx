import { ForwardRefRenderFunction, InputHTMLAttributes, FC, useState } from 'react';
import { BsEye, BsEyeSlash } from 'react-icons/bs';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    type: 'text' | 'password';
    label: string;
    errorMessage?: string;
    full?: boolean;
    ref?: React.RefObject<HTMLInputElement>;
}

const inputClass = 'text-[16px] mt-1 px-3 py-2 bg-white border shadow-sm border-gray_text rounded placeholder-slate-400 focus:outline-none';

const InputText = ({ label, full, errorMessage, ref, ...other }: Props) => {
    return (
        <div className={[full ? 'w-full' : 'inline-block', ' mt-2'].join(' ')}>
            <label htmlFor='text' className='block'>
                {label}
            </label>
            <input
                {...other}
                ref={ref}
                type='text'
                className={[
                    full ? 'w-full' : 'w-[250px]',
                    errorMessage && errorMessage.length > 0 ? '!border-red ring-1 ring-red' : 'focus:border-primary focus:ring-1 ring-primary',
                    inputClass
                ].join(' ')}
            />
            {errorMessage && errorMessage.length > 0 ? <div className='text-red'>{errorMessage + ' '}&nbsp;</div> : undefined}
        </div>
    );
};
const InputPassword: FC<Props> = ({ label, full, errorMessage, ref, ...other }) => {
    const [show, setShow] = useState(false);

    return (
        <div className={[full ? 'w-full' : 'inline-block', 'mt-2'].join(' ')}>
            <label htmlFor='text' className='block'>
                {label}
            </label>
            <div className='relative'>
                <input
                    {...other}
                    ref={ref}
                    type={show ? 'text' : 'password'}
                    className={[
                        full ? 'w-full' : 'w-[250px]',
                        show ? '' : 'tracking-[4px]',
                        errorMessage && errorMessage.length > 0 ? '!border-red ring-1 ring-red' : 'focus:border-primary focus:ring-1 ring-primary',
                        inputClass
                    ].join(' ')}
                />
                <div
                    className='text-gray_text absolute top-1.5 right-2 cursor-pointer w-8 h-8 flex items-center justify-center text-[20px]'
                    onClick={() => setShow((s) => !s)}
                >
                    {show ? <BsEye size={25} /> : <BsEyeSlash size={25} />}
                </div>
            </div>
            {errorMessage && errorMessage.length > 0 ? <div className='text-red'>{errorMessage + ' '}&nbsp;</div> : undefined}
        </div>
    );
};
const Input: ForwardRefRenderFunction<HTMLInputElement, Props> = (props) => {
    if (props.type === 'password') return <InputPassword {...props} />;
    return <InputText {...props} />;
};

export default Input;
