'use client'
import React from 'react'
import { motion} from 'motion/react';
import { usePathname } from 'next/navigation';

const Template = ({children}:{children:React.ReactNode}) => {
    const pathname = usePathname();
  return (
        <motion.div
            key={pathname}
            initial={{filter:'blur(4px)'}}
            animate={{filter:'blur(0px)'}}
            transition={{duration:1}}
        >
            {children}
        </motion.div>
  )
}

export default Template