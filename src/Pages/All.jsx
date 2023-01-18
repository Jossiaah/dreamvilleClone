import React, { useState } from 'react'
import BackDrop from '../Components/BackDrop';
import Banner from '../Components/Banner';
import Legal from '../Components/Legal';
import Logo from '../Components/Logo';
import Navbar from '../Components/Navbar';
import ProductCard from '../Components/ProductCard';
import ShoppingBag from '../Components/ShoppingBag';
import Sidebar from '../Components/Sidebar';

const All = () => {
    const [sideBar, setSideBar] = useState(false);
    const [shoppingBag, setShoppingBag] = useState(false);

    const toggleSideBar = () => {
        setSideBar((prevState) => !prevState)
    }
    const toggleShoppingBag = () => {
        setShoppingBag((prevState) => !prevState)

    }

    return (
        <>
            <Navbar openSideBar={toggleSideBar} openShoppingBag={toggleShoppingBag} />
            <BackDrop sideBar={sideBar} />
            <Sidebar sideBar={sideBar} closeSidebar={toggleSideBar} />
            <ShoppingBag bag={shoppingBag} closeBag={toggleShoppingBag} />
            <Logo />
            <ProductCard />
            <Legal />
            <Banner />
        </>
    )
}

export default All