import { useNavigate } from 'react-router-dom'
import styles from './NewProject.module.css'
import ProjectForm from '../../ProjectForm'

function NewProject() {

    const history = useNavigate()

    function createPost(project) {
        // initialize cost and services
        project.cost = 0
        project.services = []
    
        fetch('http://localhost:5000/projects', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(project),
        })
          .then((resp) => resp.json())
          .then((data) => {
            history('/projects',{state: { message: 'Projeto criado com sucesso!' }})
          })
      }

    return (
        <div className={styles.newproject__container}>
            <h1>Criar projeto</h1>
            <p>Crie seu projeto para adicionar o seu serviço.</p>
            <ProjectForm handleSubmit={createPost} btnText="Criar Projeto" />
        </div>
    )
}

export default NewProject