import React from 'react'
import styled from 'styled-components'
import COLORS from '../assets/colors'

function Avatar({name, thumbnail, size, border}:any) {

    function getInitial(): string {
        let names = name.split(' '),
            initials = names[0].substring(0, 1).toUpperCase();

        if (names.length > 1) {
            initials += names[names.length - 1].substring(0, 1).toUpperCase();
        }

        return initials
    }

    function getSize() : any {
        switch(size) {
            case "xs":
                return 20;
            case "2xs":
                return 25;
            case "md":
                return 32;
            default:
                return 40;
        }
    }

    function getSizeWithBorder(): any {
        return  getSize() + 6
    }
 
    const AvatarWrapper = styled.div`
        border-radius:50%;
        border: ${border ? `3px solid ${COLORS.background}` : '0px solid transparent'};
        margin-left: ${border ? `-6px` : 'none'};
        width:${border ? getSize() + 6 + 'px' : getSize() + 'px'};
        height:${border ? getSize() + 6 + 'px': getSize() + 'px'};
        display:flex;
        align-items:center;
        justify-content:center;
        background: ${COLORS.yellowBackground};
        color: ${COLORS.yellowText};
        font-size: 10px;
        overflow: hidden;
    `

    const AvatarThumb = styled.img`
        object-fit: cover;
    `

    

    return (
        <>
            <AvatarWrapper>
            
                {name ? (
                <div>{getInitial()}</div>
                    ) : (
                <div>
                    <img src={thumbnail ? thumbnail : "default.png"} alt={name ? getInitial() : "Photo de profil"} />
                </div>
                    )}
            </AvatarWrapper>
        </>
    )
}

export default Avatar
