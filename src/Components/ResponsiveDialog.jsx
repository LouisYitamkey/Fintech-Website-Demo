import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Form from './Form';
import { BiChevronRight } from "react-icons/bi";



export default function ResponsiveDialog() {
  const [open, setOpen] = React.useState(false);
  
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



  return (
    <div className=''>
     <Button onClick={handleClickOpen} className=" text-[#f7ab1b] border-[#f7ab1b] text-base hover:text-white hover:border-[#f7ab1b] hover:bg-[#f38d00]   py-2 " variant="outlined">Book a Demo <BiChevronRight size={30} /> </Button>
      <Dialog
       
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          <p className=' md:pl-5 font-light   md:pt-5'>  Please fill out this form.</p>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Form  />
          </DialogContentText>
        </DialogContent>
        <DialogActions className='mr-2'>
            <div className=' '>
            <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
        

            </div>
      
        </DialogActions>
      </Dialog>
    </div>
  );
}
