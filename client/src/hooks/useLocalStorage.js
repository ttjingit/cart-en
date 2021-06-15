import { useState } from 'react';

const useLocalStorage = (keyname, defaultValue) => {
    const [data, setStateData] = useState(() => {
        const item = localStorage.getItem(keyname);
        return item ? JSON.parse(item) : defaultValue;
    });

    const setData = (value) => {
        value = value instanceof Function ? value(data) : value;
        setStateData(value);
        localStorage.setItem(keyname, JSON.stringify(value));
    };

    return { data, setData };
};

export default useLocalStorage;
