import { FC } from 'react';
import { BsTable, BsFillGrid3X2GapFill } from 'react-icons/bs';

interface IDisplayMode {
    mode: string;
    setMode: (mode: 'grid' | 'table') => void;
}

const DisplayMode: FC<IDisplayMode> = (props) => {
    return (
        <div className='m-3 flex justify-end text-2xl'>
            <div
                className={[props.mode === 'grid' ? 'bg-[#d7d7d7]' : '', 'p-2  rounded cursor-pointer'].join(' ')}
                onClick={() => props.setMode('grid')}
            >
                <BsFillGrid3X2GapFill />
            </div>
            <div
                className={[props.mode === 'table' ? 'bg-[#d7d7d7]' : '', 'p-2  rounded cursor-pointer'].join(' ')}
                onClick={() => props.setMode('table')}
            >
                <BsTable />
            </div>
        </div>
    );
};

export default DisplayMode;
