import { Box } from '@mui/material';
import React from 'react';

import { MutatingDots } from  'react-loader-spinner';

function Loader() {
  return (
<Box sx={{ 
     position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  }}>

<MutatingDots 
sx={{color:(theme)=>theme.palette.primary.main}}
  height="100"
  width="100"
  color="#2b6777"
  secondaryColor= '#2b6777'
  radius='10.5'
  ariaLabel="mutating-dots-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
 />

</Box>

  );
}

export default Loader;