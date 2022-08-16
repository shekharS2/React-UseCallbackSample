import { useEffect, useState } from "react";

const List = ({getItems}) => {
    const [items, setItems] = useState([]);
    
    // without useCallback: useEffect is called every time page re-renders, i.e., getItems() is called even when 'textColor' state (of App component) is updated, even though getItems() is only dependent on 'number' state
    // with useCallback: useEffect runs only when getItems() is updated, i.e., useEffect only runs when 'number' state is updated
    useEffect(() => {
        setItems(getItems());
        console.log('Updating Items...');
    }, [getItems]);
    
    return (
        <div>
            {items.map((item) => <li key={item}>{item}</li>)}
        </div>
    );
};

export default List;