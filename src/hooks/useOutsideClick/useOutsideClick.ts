import type { RefObject } from 'react';
import { useEffect } from 'react';

export const useOutsideClick = (
  references: RefObject<HTMLElement>[],
  callback: () => void,
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const isOutside = references.every((reference) => {
        return (
          reference.current &&
          !reference.current.contains(event.target as Node)
        );
      });
      if (isOutside) {
        callback();
      }
    };

    document.addEventListener(
      'mousedown',
      handleClickOutside,
    );

    return () => {
      document.removeEventListener(
        'mousedown',
        handleClickOutside,
      );
    };
  }, [references, callback]);
};
