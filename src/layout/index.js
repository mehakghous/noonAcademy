import React from 'react'
import Body from './body'
import TopBar from './topBar'
import { Outlet } from 'react-router-dom'
const Layout = () => {
    return (
        <div id='layout-main'>
            <TopBar />
            <Body>
                <Outlet />
            </Body>
        </div>
    )
}

export default Layout
