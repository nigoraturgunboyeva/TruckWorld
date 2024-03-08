import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid rgb(0, 102, 255)',
  boxShadow: 24,
  p: 4,
};


export default function Navbar() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <nav class="navbar navbar-dark bg-primary fixed-top" style={{height: "80px"}}>
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Truck World</a>
      <button class="navbar-toggler" type="button" onClick={handleOpen}>
      Get In Touch
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="exit"><span onClick={handleClose}>X</span></div>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Baby, wassup !
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Here is our number, call us, we will definitely answer you !

            <h2 className='h22'>+998998887170</h2>
          </Typography>
        </Box>
      </Modal>
    </div>
  </nav>
  );
}