// Importation des dépendances React nécessaires
import React, { createContext, useContext, useState } from 'react';

// Crée un contexte de thème
const ThemeContext = createContext();

// Hook personnalisé pour accéder au thème et à la fonction de bascule du thème
export const useTheme = () => {
  // Utilise useContext pour accéder au contexte de thème
  return useContext(ThemeContext);
};

// Composant fournissant le contexte de thème à l'ensemble de l'application
export const ThemeProvider = ({ children }) => {
  // État local pour stocker le thème actuel (clair ou sombre)
  const [darkTheme, setDarkTheme] = useState(false);

  // Fonction pour basculer entre le thème clair et sombre
  const toggleTheme = () => {
    // Inverse la valeur de darkTheme
    setDarkTheme(!darkTheme);
  };

  // Rendu du composant
  return (
    // Utilisation de ThemeContext.Provider pour fournir le contexte aux enfants
    <ThemeContext.Provider value={{ darkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
