import React from 'react';
import css from './FormConstrols.module.css';

export const Textarea = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error;

    return (
        <div className={hasError ? css.error : ''}>
            <div>
                <textarea {...input} {...props} />
            </div>
            {hasError ? <span>{meta.error}</span> : ''}
        </div>

    )
}

export const Input = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error;

    return (
        <div className={hasError ? css.error : ''}>
            <div>
                <input {...input} {...props} />
            </div>
            {hasError ? <span>{meta.error}</span> : ''}
        </div>

    )
}