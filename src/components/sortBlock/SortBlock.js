

import './sortBlock.scss';
import '../../style/fontSize.scss';

const SortBlock = (props) => {
    return (
        <aside className='sort'>
            <h2 className='fz_12'>Сортировка</h2>
            <button className='fz_12 sort__btn' onClick={props.onSortCity}>по городу</button>
            <button className='fz_12 sort__btn' onClick={props.onSortCompany}>по компании</button>
        </aside>
    )
}

export default SortBlock;