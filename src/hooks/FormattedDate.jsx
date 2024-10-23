import { useState, useEffect } from 'react';

function useFormattedDate(date) {
    const [formattedDate, setFormattedDate] = useState('');

    useEffect(() => {
        if (date) {
            const newDate = new Date(date);
            const day = newDate.getDate().toString().padStart(2, '0');
            const month = (newDate.getMonth() + 1).toString().padStart(2, '0');
            const year = newDate.getFullYear();

            setFormattedDate(`${day}/${month}/${year}`);
        }
    }, [date]);

    return formattedDate;
}

export default useFormattedDate;