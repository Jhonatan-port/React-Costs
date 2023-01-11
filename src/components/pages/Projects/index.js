import { useLocation } from "react-router-dom"
import styles from './Projects.module.css'
import Container from '../../layout/Container'
import LinkButton from '../../layout/LinkButton'
import Message from "../../layout/Message"
import ProjectCard from "../../Project/ProjectCard"
import { useState, useEffect } from "react"


function Projects() {

    const [projects, setProjects] = useState([])

    const location = useLocation()
    let message = ''
    if (location.state) {
        message = location.state.message
    }

    useEffect(() => {
        fetch('http://localhost:5000/projects', {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            },
        }).then(resp => resp.json())
        .then((data) => {
            console.log(data)
            setProjects(data)
        })
        .catch((err) => console.log(err))
    }, [])

    return (
        <div className={styles.project__container}>
            <div className={styles.title__container}>
                <h1>Meus projetos</h1>
                <LinkButton text="Criar projeto" />
            </div>
            {message && <Message type="success" msg={message} />}
            <Container customClass="start">
                {projects.length > 0 &&
                    projects.map((project) =>(
                        <ProjectCard key={project.id} id={project.id} name={project.name} budget={project.budget} category={project.category.name}/>
                    ))
                }
            </Container>
        </div>
    )
}

export default Projects