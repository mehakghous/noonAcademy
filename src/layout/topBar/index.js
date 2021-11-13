import React, { useState } from 'react'
import Button from '../../components/button'
import './style.css'
import Logo from '../../Assets/images/noon-logo.png'
import { Link } from 'react-router-dom'
const TopBar = () => {

    const [selectedRoute, setSelectedRoute] = useState(window.location.pathname)

    const routes = [
        {
            title: "Home",
            path: "/",
            onclick:() => setSelectedRoute("/")
        },
        {
            title: "Career",
            path: "/career",
            onclick:() => setSelectedRoute("/career")
        },
    ]

    return (
        <div id='main-nav'>
            <div id='center-nav'>
                <div id='left'>
                    <img src={Logo} alt="logo" id='logo' />
                    {
                        routes.map((route, i) => {
                            return (
                                <Link
                                    className={`link-btn ${selectedRoute === route.path && "link-btn-selected"}`}
                                    to={route.path}
                                    onClick={route.onclick}
                                    key={i}
                                >
                                    {route.title}
                                </Link>
                            )
                        })
                    }
                </div>
                <div id='right'>
                    <Button className='btn-visibility' title='Sign In' type="primary" />
                    <Button title='Get the App' className='btn-visibility' />
                </div>
            </div>
        </div>
    )
}

export default TopBar
