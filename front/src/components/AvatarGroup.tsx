import React from 'react'
import styled from 'styled-components'
import COLORS from '../assets/colors'
import Avatar from './Avatar';

const Wrapper = styled.div`
    display:flex;
    align-items: center;

` ;
const AvatarCounter = styled.div`
    display:flex;
    border-radius:50%;
    background:${COLORS.yellowBackground};
    color:${COLORS.yellowText};
    width:45px;
    height: 45px;
    justify-content: center;
    align-items: center;
    border: 5px solid ${COLORS.background};
    margin-left:-8px;
` ;



function AvatarGroup({users}:any) {
    


    const count = users.length
    return (
        <>
       <Wrapper>
                {users.map((item:any, index:any) =>
                    users.length <= 2 ?
                        <Avatar key={index} name={item.name} /> :
                        index <=1 ? 
                            <Avatar key={index} name={item.name} border={index === 1 ? true : false}/> :
                        <AvatarCounter>
                            +{users.length - 2}
                        </AvatarCounter>
                    )}
        </Wrapper>
                
        </>
    )
}

export default AvatarGroup
