import React, { Fragment, useEffect, useState } from 'react'
import styled from 'styled-components'
import COLORS from '../assets/colors'




function Label({type, text}:any) {

    const getStyleFromType = () => {
        switch (type) {
            case "warning":
                return {
                    color: COLORS.yellowText,
                    background: COLORS.yellowBackground
                }
                break;
            case "orange":
                return {
                    color: COLORS.orangeText,
                    background: COLORS.orangeBackground
                }
                break;
            default:
                return {
                    color: COLORS.yellowText,
                    background: COLORS.yellowBackground
                }
        }
    };

    const labelStyle = getStyleFromType();

    const LabelWrapper = styled.div`
        color: ${labelStyle.color};
        background: ${labelStyle.background};
        padding: 4px 6px;
        display: inline-block;
        border-radius:4px;
    `

    return (
        <>
            <LabelWrapper>
                { text }
            </LabelWrapper>
        </>
    )


}



export default Label
