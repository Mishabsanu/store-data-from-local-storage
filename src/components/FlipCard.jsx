


import { useContext,useState } from 'react';
import MyContext from '../context/userContext';


const FlipCard = () => {
  const userName = useContext(MyContext);
  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   console.log('Component updated, will run on every render!');
  //   // ... effect logic that depends on count or other state/props ...
  // });

  // useEffect(() => {
  //   console.log('Component mounted, will run only once!');
  //   // ... initialization or data fetching logic ...
  // }, []);

  // useEffect(() => {

  // }, [count]);



  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <h1>{userName}</h1>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

export default FlipCard;

