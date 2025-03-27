# Task Management Application :-

## Overview
A task management application built with React and Firebase authentication, enabling users to efficiently manage tasks. The application includes features such as task creation, editing, deletion, categorization, sorting, file attachments, and a Kanban board view.

## Live Demo
[Task Management App](https://task-management-psi-fawn.vercel.app)

## Project link
-  https://task-management-psi-fawn.vercel.app

### Features
- User Authentication: Google Sign-In using Firebase.
- Task Management: Create, edit, delete tasks with categorization and due dates.
- Drag-and-Drop: Rearrange tasks using drag-and-drop.
- Sorting & Filtering: Sort tasks by due date and filter by category or tags.
- Batch Actions: Mark multiple tasks as complete or delete them at once.
- Task History & Activity Log: Track changes in tasks.
- File Attachments: Attach files to tasks.
- List & Board Views: Switch between a traditional list and a Kanban board.
- Responsive Design: Works on mobile, tablet, and desktop.

### Tech Stack
##### Frontend: 
- React
- JavaScript
- React Router DOM (with Outlet)
- MUI & MUI Icons

### State Management
- React - Redux
- Redux Toolkit

### Other Libraries
- Firebase Authentication
- DND Kit (for drag-and-drop functionality)
- @dnd-kit/sortable
- Notistack (for notifications)


### Deployment
- Vercel

### Challenges & Solutions
- State Persistence: Used Redux Persist to ensure tasks remain available after a page refresh.
- Drag-and-Drop Issues: Implemented DND Kit for smooth task reordering, avoiding performance issues with other libraries.
- Firebase Authentication: Integrated Google Sign-In using Firebase SDK, ensuring a seamless login experience.



## Installation & Setup

### **Prerequisites**
Ensure you have the following installed:
- Node.js (latest version recommended)
- npm or yarn

### **Steps to Run the Project**
```sh

git clone <https://github.com/RjRishuSty/TheAlterOffice_Task.git >

cd TaskManagement

npm install

npm start


