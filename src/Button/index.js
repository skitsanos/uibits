import React, {useEffect, useState} from 'react';

export const Button = ({label = 'Untitled'}) =>
{
	const [state, setState] = useState(label);

	useEffect(() =>
	{
		setState(label);
	}, [label]);

	return <div>{state}</div>;
};