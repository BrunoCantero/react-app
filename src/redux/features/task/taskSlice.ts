import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: '1',
        title: 'Task 1',
        description: 'this is task 1',
        completed: false,
    },
    {
        id: '2',
        title: 'Task 2',
        description: 'this is task 2',
        completed: true,
    }

]

export const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        addTask: (state, action) => {
            return [...state, action.payload]
        },
        deleteTask: (state, action) => {
            const taskFound = state.find(task => task.id === action.payload)
            if(taskFound) {
                state.splice(state.indexOf(taskFound), 1)
            }
        }
    }
})
export const { addTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer