import { FC, useState, useEffect } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

export type IDropdownOptions = {
    label: string;
    value: string;
}[];

interface IDropdown {
    options: IDropdownOptions;
    label: string;
    full?: boolean;
    value: string;
    onChange: (value: string) => void;
}

const SelectClass = 'mt-1 px-3 py-2 bg-white border shadow-sm border-gray_text rounded placeholder-slate-400 focus:outline-none';

const OptionClass = 'px-3 py-2 hover:bg-[#e7eefa]';

const Dropdown: FC<IDropdown> = ({ options, label, value, full, onChange }) => {
    const [showMenu, setShowMenu] = useState(false);

    const handleClickOpen = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation();
        setShowMenu(true);
    };

    const getLable = () => options.find((item) => item.value === value)?.label;

    useEffect(() => {
        const handle = () => setShowMenu(false);
        window.addEventListener('click', handle);

        return () => window.removeEventListener('click', handle);
    }, []);

    const changeOption = (value: string) => {
        onChange(value);
    };

    return (
        <div className={[full ? 'w-full' : 'w-[250px]', 'my-2'].join(' ')}>
            <div>{label}</div>
            <div className='relative select-none'>
                <div className={[full ? 'w-full' : 'w-[250px]', SelectClass].join(' ')} onClick={handleClickOpen}>
                    <div>{getLable()}</div>
                    <div className='absolute top-3 right-4'>{showMenu ? <FiChevronUp /> : <FiChevronDown />}</div>
                </div>
                {showMenu ? (
                    <div className='bg-white w-full absolute top-[40px] border shadow-lg border-gray_text z-50'>
                        {options
                            .filter(({ value }) => value !== '')
                            .map(({ label, value }) => (
                                <div key={value} className={OptionClass} onClick={() => changeOption(value)}>
                                    {label}
                                </div>
                            ))}
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default Dropdown;
