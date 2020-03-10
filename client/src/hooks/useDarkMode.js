import {useEffect} from 'react';
import {useLocalStorage} from './useLocalStorage'

export const useDarkMode = (key, initialValue) => {
    const [darkMode, setDarkMode] = useLocalStorage(key, initialValue);
    useEffect(() =>{
        const body = document.querySelector('body');
        const nav = document.querySelector('nav');

        //toggles dark-mode class
        nav.classList.toggle('dark-mode');
        body.classList.toggle('dark-mode');

    },[darkMode])

    return [darkMode, setDarkMode];
}