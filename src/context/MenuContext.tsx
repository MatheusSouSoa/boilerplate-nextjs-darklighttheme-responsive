import React from 'react';

interface MenuContextType {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const MenuContext = React.createContext<MenuContextType | undefined>(undefined);

export const useMenuContext = () => {
  const context = React.useContext(MenuContext);
  if (!context) {
    throw new Error('useMenuContext must be used within a MenuProvider');
  }
  return context;
};

export const MenuProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setMenuOpen] = React.useState(false);

  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  React.useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 640 && isMenuOpen) {
        setMenuOpen(false);
      }
    }

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMenuOpen]);

  return (
    <MenuContext.Provider value={{ isMenuOpen, toggleMenu }}>
      {children}
    </MenuContext.Provider>
  );
};
