import { useSelector, useDispatch } from 'react-redux'
import './App.css'
import { RootState } from './redux/store'
import TaskForm from './pages/taskForm/taskForm';
import { deleteTask } from './redux/features/task/taskSlice';
import TaskList from './pages/taskList/taskList';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
 const task = useSelector((store: RootState) => store.tasks)
 const dispatch = useDispatch()
 const handleDelete = (id: string) => {
  dispatch(deleteTask(id))
 }
 console.log(task, 'task')
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
       <Route path="/" element={<TaskList/>}/>
       <Route path="/create" element={<TaskForm/>}/>
       <Route path="/edit-task/:id" element={<TaskForm/>}/>
       </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
