import React from 'react'
import LandingPage from '../_component/LandingPage'   
import Servicelucation from '../_component/service_lucation/Servicelucation'
import Feature from '../_component/feature_section/Feature'

export default function page() {
  return (
    <>
  <LandingPage pageName={"Service Zone"}/>
  <Servicelucation/>
  <Feature/>
    </>
  )
}
