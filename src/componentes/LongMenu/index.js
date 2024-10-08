import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import './LongMenu.css';

export default function LongMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const aoSelecionar = (e) =>{
    if(e.target.firstChild.data==='Deletar'){
      props.aoDeletar();
      handleClose();
    }
    else{
      console.log(e.target.firstChild.data)
      props.aoEditar();
      handleClose();
    }
  }

  return (
    <div>
      <Button
      style={{position:'relative', left:'110px'}}
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MoreHorizIcon/>

      </Button>
      <Menu 
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        
        <MenuItem onClick={aoSelecionar}>Deletar</MenuItem>
        <MenuItem onClick={aoSelecionar}>Editar</MenuItem>
      </Menu>
    </div>
  );
}
