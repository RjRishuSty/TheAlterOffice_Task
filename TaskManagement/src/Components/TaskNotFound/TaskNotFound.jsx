import { Box, Typography } from '@mui/material'
import React from 'react'

const TaskNotFound = ({item}) => {
    console.log(item)
  return (
    <Box sx={{width:'100%',minHeight:'20vh',display:'flex',justifyContent:'center',alignItems:'center'}}>
        <Typography
          sx={{ fontSize: "15px", fontWeight: 500, color: "#2F2F2F" }}
        >
          No Tasks in {item.id==='in-progress'?"Progress":item.label}
        </Typography>
    </Box>
  )
}

export default TaskNotFound