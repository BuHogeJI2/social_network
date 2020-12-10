import React from 'react';
import css from "../../Main/Users/Users.module.css";

const Paginator = ({getPages, getPagesCount, currentPage, pageClick}) => {
    return (
        <>
        {
            getPages(getPagesCount()).map(p => {
                return <div
                    className={`${css.page_block} ${p === currentPage && css.current_page}`}
                    onClick={() => {
                        pageClick(p)
                    }}
                >{p}
                </div>
            })
        }
        </>
    )
}

export default Paginator;