import Head from 'next/head'
import { FC } from 'react'
import { NavBar, Footer, Modal } from "../index"

interface Props {
    children?: any;
}

export const Layout: FC<Props> = ({ children }) => {

    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
            <NavBar />
            { children }

        </>
    )

}