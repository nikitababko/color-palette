import React, { useEffect, useState } from 'react'
import { createPortal } from "react-dom";
import { ColorButtonCopyProps } from "./types";
import { CopyIcon } from "../Icons";
import { CopyButtonMessage, CopyIconWrapper } from "./styles";
import { CheckIcon } from "../Icons/CheckIcon";

export const ColorButtonCopy: React.FC<ColorButtonCopyProps> = ({ color }) => {
    const [isCopied, setIsCopied] = useState(false)

    const animationMs = 3000

    const handleCopy = () => {
        navigator.clipboard.writeText(color).then(() => {
            setIsCopied(true)
        }).catch((error) => {
            throw new Error(`Failed to copy text to clipboard: ${error}`);
        })
    }

    useEffect(() => {
        let timerId: NodeJS.Timeout

        if (isCopied) {
            timerId = setTimeout(() => {
                setIsCopied(false)
            }, animationMs)
        }

        return () => clearTimeout(timerId)
    }, [isCopied, animationMs])

    return (
        <CopyIconWrapper onClick={handleCopy}>
            <CopyIcon/>

            {isCopied && createPortal(
                <CopyButtonMessage animationMs={animationMs}>
                    <CheckIcon/>
                    <span>Color copied to the clipboard!</span>
                </CopyButtonMessage>,
                document.getElementById('root') as HTMLElement, 'CopyButtonMessage'
            )}
        </CopyIconWrapper>
    )
}
