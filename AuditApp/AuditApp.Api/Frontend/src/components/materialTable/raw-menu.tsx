import { IconButton, Menu, MenuItem } from '@mui/material';
import React from 'react'
import MenuIcon from "@mui/icons-material/Menu";

export default function RowMenu({ row, handleEdit, handleDeleteConfirmation} : any) {

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseForTable = () => {
    setAnchorEl(null);
  };

  return (
      <>
          <IconButton
              aria-label="more"
              id="menu-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              aria-haspopup="true"
              onClick={handleClick}
          >
              <MenuIcon fontSize="large" />
          </IconButton>
          <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleCloseForTable}
              anchorOrigin={{
                  vertical: "top",
                  horizontal: "left",
              }}
              transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
              }}
          >
              <MenuItem onClick={() => handleEdit(row)}>Изменить</MenuItem>
              <MenuItem onClick={() => handleDeleteConfirmation(row.id)}>Удалить</MenuItem>
          </Menu>
      </>
  );
}
