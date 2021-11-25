import React, { Fragment, useEffect, useState } from 'react'
import styled from 'styled-components'
import COLORS from '../assets/colors'



function Labels({type, textLabel}:any) {

    const [bg, setBg] = React.useState<string>("#fff000")
    const [color, setColor] = React.useState<string>("#fff000")

    useEffect(() => {

        switch (type) {
            case "ux": 
                setBg(COLORS.uxWritingContain)
                setColor(COLORS.uxWritingColor)
                break;
            case "progress":
                setBg(COLORS.yellowBackground)
                setColor(COLORS.yellowText)
                break;
        }
            
       
    }, [type])

    const LabelContainer = styled.div`
        background-color: ${bg};
        border-radius: 4px;
        display: inline-block;
        color: ${color};
        padding: 6px 4px;
    `



    return (
        <Fragment>
            <LabelContainer>
                { textLabel }
            </LabelContainer>
        </Fragment>
    )
}

export default Labels
