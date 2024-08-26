import { FileBox } from 'lucide-react';
import React, { ReactElement, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import NavItems from '../NavItems';
import Link from 'next/link';

function SMNavbar(): ReactElement {
  const buttonRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Close sidebar when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="navItems w-[95%] h-[90%] flex justify-between items-center">
      <div className="h-[4rem] w-[9rem] bg-red-500"></div>
      <div className="h-[4rem] w-[4rem] bg-red-500"></div>
      <div 
        className="h-[4rem] w-[4rem] flex items-center justify-center cursor-pointer" 
        ref={buttonRef} 
        onClick={() => setIsSidebarOpen(true)}
      >
        <FileBox className="h-[80%] w-[80%] text-cyan-500 font-extrabold animate-pulse delay-700" />
      </div>
      <AnimatePresence>
        {isSidebarOpen && (
          <Sidebar ref={sidebarRef} onClose={() => setIsSidebarOpen(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}

const Sidebar = React.forwardRef<HTMLDivElement, { onClose: () => void }>(
  ({ onClose }, ref) => {
    return (
      <motion.div 
        ref={ref} 
        className="h-screen w-screen z-50 flex bg-gray-500 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-70 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] absolute top-0 right-0  justify-center items-center"
        initial={{ x: '100%' }} // Start off-screen to the right
        animate={{ x: 0 }} // Move to the viewport
        exit={{ x: '100%' }} // Move back off-screen to the right
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        <div className="h-[60%] w-[85%] bg-gray-500 flex flex-col justify-between items-center">
          {NavItems.map((item, index) => (
            <Link key={index} href={item.link} className="text-black h-auto w-auto text-2xl italic text-playfair">
              {item.name}
            </Link>
          ))}
        </div>
        <span 
          className="absolute top-2 right-2 text-3xl text-white font-extrabold cursor-pointer" 
          onClick={onClose}
        >
          X
        </span>
      </motion.div>
    );
  }
);

Sidebar.displayName = 'Sidebar';

export default SMNavbar;
