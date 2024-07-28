import React, { useEffect, useRef, useState } from 'react'
import { ColorProps } from './types'
import { ColorContainer, ColorPickerWrapper, ColorText } from "./styles";
import { ColorPicker } from "react-pick-color";
import { useOutsideClick } from "../../hooks";
import { ColorButtons } from "../ColorButtons/ColorButtons";

export const Color: React.FC<ColorProps> = ({ color: colorProp }) => {
    const [color, setColor] = useState('');
    const [isOpenedColorPicker, setIsOpenedColorPicker] = useState(false);

    const colorNameRef = useRef<HTMLDivElement>(null);
    const colorPickerWrapperRef = useRef<HTMLDivElement>(null);

    useOutsideClick([colorNameRef, colorPickerWrapperRef], () => setIsOpenedColorPicker(false));

    useEffect(() => {
        setColor(colorProp)
    }, [colorProp])

    return (
        <ColorContainer
            backgroundColor={color}
        >
            <ColorButtons color={color}/>

            <ColorText
                ref={colorNameRef}
                onClick={() => setIsOpenedColorPicker(true)}
            >
                {color.toUpperCase()}
            </ColorText>

            {isOpenedColorPicker &&
                <ColorPickerWrapper
                    ref={colorPickerWrapperRef}
                >
                    <ColorPicker
                        color={color}
                        onChange={color => setColor(color.hex)}
                    />
                </ColorPickerWrapper>
            }
        </ColorContainer>
    )
}
