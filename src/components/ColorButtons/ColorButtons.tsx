import React from 'react'
import { ColorButtonsProps } from './types'
import { ColorButtonsContainer } from "./styles";
import { ColorButtonCopy } from "../ColorButtonCopy";

export const ColorButtons: React.FC<ColorButtonsProps> = ({ color }) => {
    return (
        <ColorButtonsContainer>
            <ColorButtonCopy color={color}/>
        </ColorButtonsContainer>
    )
}
