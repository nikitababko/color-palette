import { RefObject, useEffect } from "react";

export const useOutsideClick = (refs: RefObject<HTMLElement>[], callback: () => void) => {
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const isOutside = refs.every(ref => ref.current && !ref.current.contains(event.target as Node));
            if (isOutside) {
                callback();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [refs, callback]);
};



