import React from 'react';
import { BoxOne, SubTitle, Img } from './style';

const DEFAULT_IMAGE =
	'https://p.kindpng.com/picc/s/9-99641_pensando-especialmente-en-las-personas-con-movilidad-persona.png';
export const Designed = ({
	cover = DEFAULT_IMAGE,
	image = 'imagen designed',
}) => {
	return (
		<BoxOne>
			<SubTitle>Designed</SubTitle>
			<Img src={cover} alt={image} />
		</BoxOne>
	);
};
