import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../redux/store'
import { deleteTask } from '../../redux/features/task/taskSlice';
import { Link } from 'react-router-dom'


const taskList = () => {
    const task = useSelector((store: RootState) => store.tasks)
    const dispatch = useDispatch()
    const handleDelete = (id: string) => {
     dispatch(deleteTask(id))
    }
    console.log(task, 'task')
  return (
    <div>
        <Link to={'/create'} >Create task</Link>
        {
        task.map(task => (
          <div key={task.id}>
            <h3>
              {task.title}
            </h3>
            <p>
              {task.description}
            </p>
            <button onClick={() => handleDelete(task.id)}>delete</button>
            <Link to={`edit-task/${task.id}`}> Edit Task </Link>
          </div>

        ))
      }</div>
  )
}

export default taskList