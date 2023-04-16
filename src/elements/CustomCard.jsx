import React from "react";
import styled from "styled-components";


const CustomCardStyled = styled.div`
	background-color: #fff;
	border-radius: 10px;
	position: relative;
	padding: 20px;
	color: #444;
	cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
	height:auto;
		&:hover {
            box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}
`

const CustomCard = ({children}) => {
return (
    <CustomCardStyled>
        {children}
    </CustomCardStyled>
)
}

export default CustomCard