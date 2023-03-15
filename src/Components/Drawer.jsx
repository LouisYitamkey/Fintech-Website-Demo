import {Drawer , Box, Typography, IconButton } from '@mui/material'
import { VscMenu } from "react-icons/vsc";

import { useState } from 'react'

export const MuiDrawer = () => {

    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

return (
    <>
  
    <IconButton size='large' edge='start' color='inherit' arial-label='logo' onClick={()=> setIsDrawerOpen(true)}  >
       
        <VscMenu/>


    </IconButton>

<Drawer anchor='right' 
open={isDrawerOpen} 
onClose={() => setIsDrawerOpen(false) }>

<Box width='250px' role='presentation'>

    <Typography className='flex justify-center items-center mt-60' variant='h6' component='div'> 

       Mobile Nav Bar Menu Here 

    </Typography>

</Box>

</Drawer>
</>

)    

}





