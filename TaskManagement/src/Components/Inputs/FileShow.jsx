import { Box } from '@mui/material'
import React from 'react'

const FileShow = ({image,alt}) => {
  return (
    <Box sx={{border:'2px solid red'}}>
        <img  src={image} alt={alt}/>
    </Box>
  )
}

export default FileShow