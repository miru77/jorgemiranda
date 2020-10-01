import React from "react"

import BasicLayaut from "../layouts/BasicLayout"
import Profile from "../components/Profile"
import AboutMe from "../components/AboutMe"
import "./index.scss"

export default function Index() {
  return (
    <BasicLayaut>
      <Profile />
      <AboutMe />
    </BasicLayaut>
  )
}
