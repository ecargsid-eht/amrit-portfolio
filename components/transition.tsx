import React from 'react'
import {AnimatePresence} from 'motion/react';


const Transition = ({children}:{children:React.ReactNode}) => {
  return (
    <AnimatePresence>
        {children}
    </AnimatePresence>
  );
}

export default Transition