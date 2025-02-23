import React from 'react'
import Head from "next/head";
import Nav from '../Nav/Nav';

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Nav />
            <main className="container mx-auto px-4">{children}</main>
        </>
    )
}

