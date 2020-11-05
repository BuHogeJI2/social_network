import React from 'react'
import css from './Dialogs.module.css'

const Dialogs = (props) => {
    return (
        <div className={css.dialogs}>
            <div className={css.dialog_items}>
                <div className={css.dialog}>Alesya</div>
                <div className={css.dialog}>Nikita</div>
                <div className={css.dialog}>Vlad</div>
                <div className={css.dialog}>Andrew</div>
                <div className={css.dialog}>IT-kamasutra</div>
            </div>
            <div className={css.messages}>
                <div className={css.message}>Hi!</div>
                <div className={css.message}>When to the gym?</div>
                <div className={css.message}>Where is cities???</div>
            </div>
        </div>
    )
}

export default Dialogs