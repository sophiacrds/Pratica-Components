import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
   margin: 0;
   padding: 0;
   box-sizing: border-box;
}
`;

export const Cards = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`;

export const CardBox = styled.section`
	width: 300px;
	height: 300px;
	margin: 2rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	background: #f2f2ea;
	position: relative;
	overflow: hidden;
	border-radius: 5px;
	box-shadow: 0px 0px 20px 2px #0000002b;
`;

export const ImgContainer = styled.div`
	width: 80%;
	width: 80%;
	position: absolute;
	z-index: 9;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 1rem 0 0 0;
	img {
		width: 85%;
		object-fit: cover;
	}
`;

export const Label = styled.div`
	width: 85%;
	height: 55%;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	padding: 1rem 1rem 2rem;
	position: absolute;
	bottom: -20px;
	z-index: 0;
	background: #9c9c9d;
	border-radius: 20px;
`;

export const LabelText = styled.div`
	width: 100%;
	height: fit-content;
`;
