import Head from 'next/head'
import { NavBar } from "../Navigation/navbar"

interface Props {
    children?: any;
}


const Layout = ({ children } : Props) => {



    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <NavBar/>            

            <p>This is the Layout</p>
            { children }
        </>
    )

}


export default Layout