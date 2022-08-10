import React from "react";
import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
   margin: 0;
   padding: 0;
   box-sizing: border-box;
}
`;

export const HeaderBox = styled.header`
	width: 100%;
	height: 200px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export default function Header() {
	return (
		<HeaderBox>
			<h1>Você gosta de saladas?</h1>
		</HeaderBox>
	);
}
