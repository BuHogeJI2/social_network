import React, {useState} from 'react';
import css from './Paginator.module.css'

const Paginator = ({getPagesList, getPagesCount, currentPage, pageClick, portionSize}) => {

    let portionCount = getPagesCount() / portionSize;
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionNumber = portionNumber * portionSize;


    debugger
    return (
        <div className={css.paginator_block}>
            {portionNumber > 1 && <button onClick={() => {
                setPortionNumber(1)
            }}>FIRST
            </button>}
            {portionNumber > 1 && <button onClick={() => {
                setPortionNumber(portionNumber - 1)
            }}>PREV</button>}
            {
                getPagesList(getPagesCount()).filter(page => page >= leftPortionNumber && page <= rightPortionNumber)
                    .map(p => {
                        return <div
                            className={`${css.page_block} ${p === currentPage && css.current_page}`}
                            onClick={() => {
                                pageClick(p)
                            }}
                        >{p}
                        </div>
                    })
            }
            {portionNumber < portionCount && <button onClick={() => {
                setPortionNumber(portionNumber + 1)
            }}>NEXT</button>}
            {portionNumber < portionCount && <button onClick={() => {
                setPortionNumber(portionCount)
            }}>LAST</button>}
        </div>
    )
}

export default Paginator;