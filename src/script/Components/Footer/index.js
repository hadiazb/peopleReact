import React from 'react';
import {
	Container,
	Title,
	SubContainer,
	SubTitleTwo,
	BoxTwo,
} from './style';
import { Designed } from '../Designed/index';
import { Copyright } from '../Copyright/index';

export const Footer = ({}) => {
	return (
		<Container>
			<Title>RANDOM USER GENERATOR</Title>
			<SubContainer>
				<Designed />
				<Designed />
				<Copyright />
			</SubContainer>
		</Container>
	);
};
