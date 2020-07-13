import React from 'react';
import {
	Container,
	Title,
	Img,
	Item,
	Subcontainer,
} from './style';

export const Formulary = () => {
	return (
		<Container>
			<div>
				<Title>Datos Personales</Title>
				<Subcontainer>
					<Img src='https://randomuser.me/api/portraits/women/1.jpg' />
					<Item>
						Name: <span>Pepito</span>
					</Item>
					<Item>
						email: <span>sd@dsf.vf</span>
					</Item>
					<Item>
						Telefono: <span>00423525</span>
					</Item>
					<Item>
						Genero: <span>Female</span>
					</Item>
				</Subcontainer>
			</div>
		</Container>
	);
};
