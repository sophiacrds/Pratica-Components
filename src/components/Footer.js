import React from "react";
import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
   margin: 0;
   padding: 0;
   box-sizing: border-box;
}
`;

export const FooterBox = styled.header`
	width: 100%;
	height: 100px;
	display: flex;
	justify-content: center;
	align-items: center;
	background: #f9f9f9;
`;

export default function Footer() {
	return (
		<FooterBox>
			<p>© 2022 Sophia Leão. All Rights Reserved</p>
		</FooterBox>
	);
}
