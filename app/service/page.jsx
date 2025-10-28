import React from 'react'
// import Service from '../_component/service_section/Service'
import Service from "../_component/service_section/service";

import Client from '../_component/client_section/Client'
import LandingPage from '../_component/LandingPage'       

export default function page() {
    return (
        <>
            <LandingPage pageName={"Our Service"} />
            <Service />
            <Client />
        </>
    )
}
