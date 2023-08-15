
// import * as React from 'react';
// import Button from '@mui/material/Button';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import { useNavigate } from 'react-router-dom';

// export default function MenuItemComponent(props) {
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const open = Boolean(anchorEl);

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   const [subMenuStates, setSubMenuStates] = React.useState({});

//   const handleSubMenuMouseEnter = (index, event) => {
//     setSubMenuStates((prevState) => ({ ...prevState, [index]: event.currentTarget }));
//   };

//   const handleSubMenuMouseLeave = (index) => {
//     setSubMenuStates((prevState) => ({ ...prevState, [index]: null }));
//   };

//   return (
//     <div>
//       <Button
//         id="basic-button"
//         aria-controls={open ? 'basic-menu' : undefined}
//         aria-haspopup="true"
//         aria-expanded={open ? 'true' : undefined}
//         onClick={handleClick}
//       >
//         {props.title}
//       </Button>
//       <Menu
//         id="basic-menu"
//         anchorEl={anchorEl}
//         open={open}
//         onClose={handleClose}
//         MenuListProps={{
//           'aria-labelledby': 'basic-button',
//         }}
//       >
//         {props.subMenu.map((item, index) => (
//           <div className='menuItemContainer' key={index}>
//             <MenuItem
//               onClick={handleClose}
//               onMouseEnter={(event) => handleSubMenuMouseEnter(index, event)}
//               onMouseLeave={() => handleSubMenuMouseLeave(index)}
//               key={item + index}
//             >
//               {item}
//               {subMenuStates[index] && (
//                 <Menu
//                   anchorEl={subMenuStates[index]}
//                   open={Boolean(subMenuStates[index])}
                  
//                   onClose={handleClose}
//                   anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
//                   transformOrigin={{ vertical: 'top', horizontal: 'left' }}
//                 >
//                   {props.subCatData[index]?.map((el, subIndex) => (
//                     <MenuItem key={el.title + subIndex} onClick={handleClose}>
//                       {el.title}
//                     </MenuItem>
//                   ))}
//                 </Menu>
//               )}
//             </MenuItem>
//           </div>
//         ))}
//       </Menu>
//     </div>
//   );
// }

import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function MenuItemComponent(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  console.log(props);
  const navigate = useNavigate(); // Adding useNavigate hook

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [subMenuStates, setSubMenuStates] = React.useState({});

  const handleSubMenuMouseEnter = (index, event) => {
    setSubMenuStates((prevState) => ({ ...prevState, [index]: event.currentTarget }));
  };

  const handleSubMenuMouseLeave = (index) => {
    setSubMenuStates((prevState) => ({ ...prevState, [index]: null }));
  };

  const handleMenuItemClick = (menuItem, subMenuItem,catId) => {
    // Navigating to the appropriate URL when a menu item or submenu item is clicked
    handleClose();
    // navigate(`/menu/${menuItem}/${subMenuItem}`);
    navigate(`/Category/${catId}`);

  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {props.title}
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
        {props.subMenu.map((item, index) => (
          <div className='menuItemContainer' key={index}>
            <MenuItem
              onClick={() => handleMenuItemClick(props.title, item,props.catIds[index])} // Passing title and item as parameters
              onMouseEnter={(event) => handleSubMenuMouseEnter(index, event)}
              onMouseLeave={() => handleSubMenuMouseLeave(index)}
              key={item + index}
            >
              {item}
              {subMenuStates[index] && (
                <Menu
                  anchorEl={subMenuStates[index]}
                  open={Boolean(subMenuStates[index])}
                  onClose={handleClose}
                  anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                  transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                >
                  {props.subCatData[index]?.map((el, subIndex) => (
                    // <MenuItem key={el.title + subIndex} onClick={handleClose}>
                    <MenuItem key={el.title + subIndex} >
                    
                      {/* <Link to={`/Category/${el.cat_id}`}> */}
                      {el.title}
                         {/* </Link> */}


                    </MenuItem>
                  ))}
                </Menu>
              )}
            </MenuItem>
          </div>
        ))}
      </Menu>
    </div>
  );
}
