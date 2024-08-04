import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import type { ColorButtonCopyProps } from './types';
import { CheckIcon, CopyIcon } from '../Icons';
import {
  ColorButtonCopyContainer,
  CopyButtonMessage,
} from './styles';

export const ColorButtonCopy: React.FC<
  ColorButtonCopyProps
> = ({ color }) => {
  const [isCopied, setIsCopied] = useState(false);

  const animationMs = 3000;

  const handleCopy = () => {
    navigator.clipboard
      .writeText(color)
      .then(() => {
        setIsCopied(true);
      })
      .catch((error) => {
        throw new Error(
          `Failed to copy text to clipboard: ${error}`,
        );
      });
  };

  useEffect(() => {
    let timerId: NodeJS.Timeout;

    if (isCopied) {
      timerId = setTimeout(() => {
        setIsCopied(false);
      }, animationMs);
    }

    return () => clearTimeout(timerId);
  }, [isCopied, animationMs]);

  return (
    <ColorButtonCopyContainer onClick={handleCopy}>
      <CopyIcon />

      {isCopied &&
        createPortal(
          <CopyButtonMessage animationMs={animationMs}>
            <CheckIcon />

            <span>Color copied to the clipboard!</span>
          </CopyButtonMessage>,
          document.querySelector('#root') as HTMLElement,
          'CopyButtonMessage',
        )}
    </ColorButtonCopyContainer>
  );
};
