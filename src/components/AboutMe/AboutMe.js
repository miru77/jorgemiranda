import React from "react"
import { Container, Button } from "react-bootstrap"
import CV from "../../images/cv_jorge_miranda.pdf"
import "./AboutMe.scss"

export default function AboutMe() {
  return (
    <Container className="about-me">
      <p>
        Actualmente cuento con 1 año de experiencia en nuevas herramienta de
        desarrollo web front, concentrando ahora mi capacitación en React, React
        Native, NextJS, Gatsby, Strapi y GraphQL; trabajando con Apis y base de
        datos remota con Firebase y MongoDB, Conexión con Servicios Nodejs,
        Apollo Server Etc. Y con algunos conocimiento de Angular y el desarrollo
        Mobile híbrido con Ionic . Estoy en la búsqueda de poder formar parte de
        proyectos con estas nuevas tecnologías.!!
      </p>
      <hr />

      <a href={CV} target="_blank"   rel="noopener noreferrer">
        <Button primary>Descargar CV</Button>
      </a>
    </Container>
  )
}
