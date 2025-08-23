import { lazy } from "react";

export const HomePageAsync = lazy(()=> new Promise((resolve) => {
    setTimeout(()=> {
        // @ts-expect-error - Simulate Delay
        resolve(import('./Home'))
    }, 1500)
}))