import { lazy } from 'react'

export const AboutPageAsync = lazy(
    () => {return new Promise((res, rej) => {
        setTimeout(() => {
            res(null)
        }, 1000);
    }).then(() => {
        return import('pages/about-page/ui/about-page')
    })}
)
