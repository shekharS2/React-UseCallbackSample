import { useCallback, useState } from 'react';
import List from './List';

import './App.css';

function App() {
	// useMemo: Returns and stores the calculated value of a function in a variable
	// useCallBack: Returns and stores the actual function itself in a variable
	
	const [number, setNumber] = useState(0);
	const [textColor, setTextColor] = useState(true);

	const getItems = useCallback(() => { // mocks an API call
		return [number, number + 1, number + 2];
	}, [number]);
	
	const divStyle = {
		width: '100px',
		height: '20px',
		backgroundColor: textColor ? 'white' : 'black',
		color: textColor ? 'black' : 'white'
	};
	
	
	return <>
		<input type='number' min={0} defaultValue={0} onChange={e => setNumber(parseInt(e.target.value))} ></input>
		<button onClick={() => setTextColor(prev => !prev)} >Change Theme</button>
		<div style={divStyle} >{number}</div>
		<List getItems={getItems} />
	</>;
}

export default App;
