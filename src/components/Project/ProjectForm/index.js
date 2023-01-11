import { useState, useEffect } from 'react'

import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/Submit'

import styles from './ProjectForm.module.css'
function ProjectForm({ handleSubmit, btnText, projectData }) {
  const [project, setProject] = useState(projectData || {})
  const [categories, setCategories] = useState([])




  useEffect(() => {
    fetch('http://localhost:5000/categories', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setCategories(data)
      })
  }, [])

  const submit = (event) => {
    event.preventDefault()
    handleSubmit(project)
  }

  function handleChange(event) {
    setProject({ ...project, [event.target.name]: event.target.value })
    console.log(project)
  }
  function handleCategory(event) {
    setProject({
      ...project,
      category: {
        id: event.target.value,
        name: event.target.options[event.target.selectedIndex].text,
      },
    })
  }

  return (
    <form onSubmit={submit} className={styles.form}>
      <Input type="text" text="Nome do projeto" name="name" placeholder="Insira o nome do projeto" handleOnChange={handleChange} value={project.name ? project.name : ''} />
      <Input type="number" text="orçamento do projeto" name="budget" placeholder="Insira o orçamento do projeto" handleOnChange={handleChange} value={project.budget ? project.budget : ''} />
      <Select name="category_id" text="Selecione a Categoria" options={categories} handleOnChange={handleCategory} value={project.category ? project.category.id : ''} />
      <SubmitButton value={btnText} />
    </form>
  )
}


export default ProjectForm