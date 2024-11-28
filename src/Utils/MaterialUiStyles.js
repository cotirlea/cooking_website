const filterStyle = {
  color: 'rgb(215, 231, 231)',      // Initial color
  fontSize: '2vw',
  borderWidth: '3px',
  borderColor: 'rgba(53, 57, 53)',
  borderStyle: 'solid',
  paddingLeft: '2vw',
  paddingRight: '2vw',
  paddingTop: '1vh',
  paddingBottom: '1vh',
  borderRadius: '20px',
  transition: 'all 0.5s ease', 
  '&:hover': {
    color: 'rgb(255, 255, 255)',   
    backgroundColor: 'rgba(53, 57, 53)',
    transform: 'scale(1.05)',      
  },
};

const menuItem = {
    color: 'rgba(255,255,255)',   
    backgroundColor: 'rgb(14,14,14)',
    borderBottom: '3px solid #3539354d',
    transition: 'all 0.5s ease', 

    ":hover": {
        color: 'rgb(255, 255, 255)',   
        backgroundColor: 'rgba(53, 57, 53)',
    },
}

const selectedMenuItem = {
    color: 'rgb(255, 255, 255)',   
    backgroundColor: 'rgba(53, 57, 53)',
    borderBottom: '3px solid rgb(14,14,14)',
    ":hover": {
        color: 'rgb(255, 255, 255)',   
        backgroundColor: 'rgba(53, 57, 53)',
    },
}

const textFieldStyle = {
  '& .MuiOutlinedInput-root': {
    padding: '10px',
    border: '3px solid rgba(53, 57, 53, 0.3)',
    borderBottom: '3px solid rgba(53, 57, 53)',
    borderRadius: '20px',
    transition: 'background-color 0.5s ease, opacity 0.5s ease, transform 0.5s ease', 
    opacity: 1,
    marginRight:'2vw',
  },
  '& .MuiOutlinedInput-root:hover': {
    transition: 'border-color 0.5s ease, opacity 0.5s ease, transform 0.5s ease', 
    borderColor: 'rgba(53, 57, 53)', 
  },
  '& .MuiOutlinedInput-input': {
    fontFamily: 'CustomFont',
    color: 'rgb(215, 231, 231)',
    fontSize: '2vw', 
  },
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
  '& .MuiOutlinedInput-root.Mui-focused': {
    transition: 'background-color 0.5s ease, opacity 0.5s ease, transform 0.5s ease', 
    backgroundColor: 'rgba(53, 57, 53)',
  }
};


const titleFieldStyle = {
  '& .MuiOutlinedInput-root': {
    padding: '10px',
    border: '3px solid rgba(215, 231, 231, 0.5)', 
    borderRadius: '20px',
    transition: 'border-color 0.5s ease, opacity 0.5s ease, transform 0.5s ease', 
    opacity: 1,
  },
  '& .MuiOutlinedInput-root:hover': {
    borderColor: 'rgb(215, 231, 231)', 
  },
  '& .MuiOutlinedInput-input': {
    fontFamily: 'CustomFont',
    color: 'rgb(215, 231, 231)',
    fontSize: '50px', 
    lineHeight: '1.2',
    padding: '10px 14px',
  },
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
  '& .MuiOutlinedInput-root.Mui-focused': {
    borderColor: 'rgb(215, 231, 231)',
  }
};


export{filterStyle,titleFieldStyle,menuItem,textFieldStyle,selectedMenuItem}