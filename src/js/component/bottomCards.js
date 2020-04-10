import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import styled, { keyframes } from "styled-components";
// import { url } from "inspector";
const keyFrame = keyframes`
  0%{
    height: 0%;
    
  }
  60%{
    height: 50%;
    
  }
  100% {
    height: 100%;
  }
`;
const Overlay = styled.div`
	position: absolute;
	bottom: 0;
	background: grey;
	width: 100%;
	opacity: 0.7;
	height: 100%;
	color: white;
	animation: ${keyFrame} 2s ease;
	animation-iteration-count: inherit;
	opacity: ${props => props.opa && props.opop && props.op};
`;
export const BottomCards = () => {
	const [opa, setOpa] = useState(0);
	const [opop, setOpop] = useState(0);
	const [op, setOp] = useState(0);
	return (
		<CardGroup>
			<Card style={{ position: "relative" }} onMouseOver={() => setOpa(0.6)} onMouseLeave={() => setOpa(0)}>
				<Card.Img
					variant="top"
					src="https://image.freepik.com/free-photo/cute-cat-with-sweater-hat_23-2148348114.jpg"
				/>

				<Overlay opa={opa}>
					<p>
						When your cat is staring you down he is probably just trying to get your attention. If the stare
						is intense, this “staring contest” could mean that he is on high alert about someone or a
						situation. It is advised to not look at your cat directly in the eyes. As with any animal, cats
						see this is an act of aggression in preparation for a fight.
					</p>
				</Overlay>
			</Card>
			<Card style={{ position: "relative" }} onMouseOver={() => setOpop(0.6)} onMouseLeave={() => setOpop(0)}>
				<Card.Img
					variant="top"
					src="
                    https://image.freepik.com/free-photo/lovely-pets-composition-with-sleepy-white-cat_23-2147997298.jpg"
				/>

				<Overlay opa={opop}>
					{" "}
					<p>
						When your kitty rubs his head on you, he is doing more than just showing you affection and
						saying hello. He is actually doing something that behaviorist’s call “bunting”. Pheromones are
						actually being released from his head and it is his way of showing ownership over you. Just as a
						cat would rub on furniture to leave his scent to mark his territory- he is showing pride in that
						you are his.
					</p>
				</Overlay>
			</Card>
			<Card style={{ position: "relative" }} onMouseOver={() => setOp(0.6)} onMouseLeave={() => setOp(0)}>
				<Card.Img
					variant="top"
					src="https://image.freepik.com/free-photo/copy-space-cute-cat-weating-fur-cap_23-2148348035.jpg"
				/>

				<Overlay opa={op}>
					<div className="container p-2">
						<p>
							When your cat presses his paws into you, and massages back and forth- this can be a rather
							enjoyable feline behavior. Your kitty’s instinct to do this traces back to their earliest
							days of nursing. By pressing his paws on his mother’s mammary glands, it encouraged better
							milk production. When your cat does this as an adult he is either content, and showing that
							he is happy, or he is trying to alleviate stress and the habit is one to calm him down.
							Either way, take it as a compliment that you remind him of his mommy!
						</p>
					</div>
				</Overlay>
			</Card>
		</CardGroup>
	);
};
