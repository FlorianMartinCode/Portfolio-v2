import React, { createContext, useContext, useState, useEffect } from 'react';

// Crée un contexte de thème
const ThemeContext = createContext();

// Création de variables pour les noms de classes de thème
const DARK_THEME_CLASS = 'dark-theme';
const LIGHT_THEME_CLASS = 'light-theme';

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

  useEffect(() => {
    // Applique la classe de thème au corps du document en fonction de l'état du thème
    document.body.classList.toggle(DARK_THEME_CLASS, darkTheme);
    document.body.classList.toggle(LIGHT_THEME_CLASS, !darkTheme);
  }, [darkTheme]);

  // Rendu du composant
  return (
    // Utilisation de ThemeContext.Provider pour fournir le contexte aux enfants
    <ThemeContext.Provider value={{ darkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
