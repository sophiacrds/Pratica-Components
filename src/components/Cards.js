import React from "react";
import * as S from "./CardStyle.js";
import salmon from "../assets/salmon.png";
import bacon from "../assets/bacon.png";
import chicken from "../assets/chicken.png";
import chickenegg from "../assets/chickenegg.png";
import oriental from "../assets/oriental.png";

export default class Cards extends React.Component {
	state = {
		salads: [
			{
				img: salmon,
				name: "Salada de Salmão",
				about: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
			},
			{
				img: bacon,
				name: "Salada de ovos com bacon",
				about: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
			},
			{
				img: chicken,
				name: "Salada cremosa de frango",
				about: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
			},
			{
				img: chickenegg,
				name: "Salada de frango grelhado",
				about: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
			},
			{
				img: oriental,
				name: "Salada oriental",
				about: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
			},
		],
	};

	render() {
		return (
			<S.Cards>
				{this.state.salads.map(({ img, name, about }, index) => (
					<S.CardBox key={index}>
						<S.GlobalStyle />
						<S.ImgContainer>
							<img src={img} alt="" />
						</S.ImgContainer>
						<S.Label>
							<S.LabelText>
								<h3>{name}</h3>
								<p>{about}</p>
							</S.LabelText>
						</S.Label>
					</S.CardBox>
				))}
			</S.Cards>
		);
	}
}
