import React from 'react'

export const required = (value) => {
    if (!value) {
        return 'Required Field'
    } return undefined;
}

export const maxLength = (length) => (value) => {
    if (value.length > length) {
        return `Max length is ${length}`
    } return undefined;
}