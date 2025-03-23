export const fields = [
  {
    id: "title",
    label: "Task Title*",
    type: "text",
    placeholder: "Task title",
  },
  {
    id: "description",
    label: "Description",
    type: "textarea",
    placeholder: "Enter task details...",
  },
  {
    id: "category",
    label: "Task Category*",
    type: "checkbox",
    options: [
      { id: "work", label: "Work" },
      { id: "personal", label: "Personal" },
    ],
  },
  { id: "date", label: "Add date*", type: "date", placeholder: "" },
  {
    id: "status",
    label: "Task Status*",
    type: "select",
    options: [
      { id: "todo", label: "To-do" },
      { id: "in-progress", label: "In-Progress" },
      { id: "completed", label: "Completed" },
    ],
  },

  {
    id: "attachment",
    label: "Attachment",
    type: "file",
  },
];
