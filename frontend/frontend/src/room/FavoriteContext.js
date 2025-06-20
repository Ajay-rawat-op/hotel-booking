
import { createContext, useContext, useState } from 'react';

const FavoriteContext = createContext();

export const useFavorites = () => useContext(FavoriteContext);

export const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (room) => {
    const isAlreadyLiked = favorites.find((r) => r.name === room.name);
    setFavorites((prev) =>
      isAlreadyLiked ? prev.filter((r) => r.name !== room.name) : [...prev, room]
    );
  };

  return (
    <FavoriteContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};
