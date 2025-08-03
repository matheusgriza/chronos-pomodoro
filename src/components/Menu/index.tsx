import {
  HistoryIcon,
  HouseIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
} from 'lucide-react';
import styles from './styles.module.css';
import { useEffect, useState } from 'react';

type AvailableThemes = 'dark' | 'light';

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const storedTheme =
      (localStorage.getItem('theme') as AvailableThemes) || 'dark';
    return storedTheme;
  });

  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  };

  // useEffect(() => {}); //Executes everytime the component renders

  // useEffect(() => {}, []); //Executes only the first time the component renders

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    //Clean up function. It clean anything that the component may be messed when was used. So the first render doesn't get messy.
    /*
    return () => {
      console.log('Enqueued function. Theme will be changed to', theme);
    };
    */
  }, [theme]); //Executes only when the value inside deps changes (theme on this case)

  function handleThemeChange(event: React.MouseEvent) {
    event.preventDefault();
    setTheme(prevTheme => {
      const nextTheme = prevTheme == 'dark' ? 'light' : 'dark';
      return nextTheme;
    });
  }

  return (
    <nav className={styles.menu}>
      <a
        className={styles.menuLink}
        href='#'
        aria-label='Go to home'
        title='Home'
      >
        <HouseIcon />
      </a>

      <a
        className={styles.menuLink}
        href='#'
        aria-label='See historical'
        title='Historical'
      >
        <HistoryIcon />
      </a>

      <a
        className={styles.menuLink}
        href='#'
        aria-label='Go to settings'
        title='Settings'
      >
        <SettingsIcon />
      </a>

      <a
        className={styles.menuLink}
        href='#'
        aria-label='Change theme'
        title='Theme'
        onClick={handleThemeChange}
      >
        {nextThemeIcon[theme]}
      </a>
    </nav>
  );
}
