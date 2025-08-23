import { lazy } from "react";

export const LoginPageAsync = lazy(() => new Promise((resolve)=>{
    setTimeout(()=>{
        // @ts-expect-error Simulate Delay
        resolve(import('./LoginPage'))
    }, 1500)
}))