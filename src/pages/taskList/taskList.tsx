import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../redux/store'
import { deleteTask } from '../../redux/features/task/taskSlice';


const taskList = () => {
    const task = useSelector((store: RootState) => store.tasks)
    const dispatch = useDispatch()
    const handleDelete = (id: string) => {
     dispatch(deleteTask(id))
    }
    console.log(task, 'task')
  return (
    <div>{
        task.map(task => (
          <div key={task.id}>
            <h3>
              {task.title}
            </h3>
            <p>
              {task.description}
            </p>
            <button onClick={() => handleDelete(task.id)}>delete</button>
          </div>

        ))
      }</div>
  )
}

export default taskList