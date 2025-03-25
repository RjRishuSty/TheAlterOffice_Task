import { createSlice } from "@reduxjs/toolkit";

// TODO: Load tasks from localStorage
const loadTasksFromLocalStorage = () => {
  const storedTasks = localStorage.getItem("tasks");
  return storedTasks ? JSON.parse(storedTasks) : [];
};
// TODO:  Save tasks to localStorage
const saveTasksToLocalStorage = (tasks) => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};
//  TODO: Generate timestamp
const getCurrentTimestamp = () => {
  const now = new Date();
  return now.toISOString();
};

// TODO:  Task slice (add,update,delete)
const taskSlice = createSlice({
  name: "Task",
  initialState: {
    task: loadTasksFromLocalStorage(),
    selectedTask: null,
  },
  reducers: {
    // TODO: Add Task
    addTask: (state, action) => {
      const newTask = {
        ...action.payload,
        id: crypto.randomUUID(), // Unique ID
        createdAt: getCurrentTimestamp(), // Set creation date & time
        updatedAt: getCurrentTimestamp(), // Initial update time same as creation
        previousStatus: null,
      };
      state.task.push(newTask);
      saveTasksToLocalStorage(state.task);
    },
    // TODO: Set Tasked task to update..
    setSelectedTaskToUpdate: (state, action) => {
      state.selectedTask = action.payload;
    },
    // TODO: Update Task
    updateTask: (state, action) => {
      const { id, ...updatedData } = action.payload;
      const taskIndex = state.task.findIndex((task) => task.id === id);

      if (taskIndex !== -1) {
        const previousStatus = state.task[taskIndex].status;

        state.task[taskIndex] = {
          ...state.task[taskIndex],
          ...updatedData,
          previousStatus:
            previousStatus || state.task[taskIndex].previousStatus,
          updatedAt: getCurrentTimestamp(),
        };

        saveTasksToLocalStorage(state.task);
      }
    },
    // TODO: Delete Task
    deleteTask: (state, action) => {
      state.task = state.task.filter((task) => task.id !== action.payload);
      saveTasksToLocalStorage(state.task);
    },
    // TODO: DragOrDrop (reorder the task index) Task
    reorderTasks: (state, action) => {
      state.task = action.payload;
      saveTasksToLocalStorage(state.task);
    },
  },
});

export const {
  addTask,
  setSelectedTaskToUpdate,
  updateTask,
  deleteTask,
  reorderTasks,
} = taskSlice.actions;
export default taskSlice.reducer;
