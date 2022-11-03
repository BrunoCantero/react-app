import {useState} from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../../redux/features/task/taskSlice'

const taskForm = ()  => {
    const [task, setTask] = useState({
        title: '',
        description: ''
    })
    const dispatch = useDispatch()

    const handleChange = (e: any) => {
      setTask({
        ...task,
        [e.target.name]: e.target.value
      })
      console.log(task)
    }
    const deleteTask = () => {
      
    }
    const handleSubmit = (e: any) => {
      e.preventDefault()
      dispatch(addTask(task))
    }

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder='title' onChange={handleChange}/>
        <input type="text" name="description" placeholder='description' onChange={handleChange}/>
        <button type="submit"> Save </button>
    </form>
  )
}

export default taskForm