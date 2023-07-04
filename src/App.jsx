import { useEffect, useState } from 'react';
import Tours from './Tours';
import Loading from './Loading';
const url = 'https://course-api.com/react-tours-project';

console.log(url);

const App = () => {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const getTours = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        setIsLoading(false);
        setIsError(true);
        return;
      }
      const data = await response.json();
      setTours(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
      console.log(error);
    }
  };

  useEffect(() => {
    getTours();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <h2>Une erreur s&apos;est produite...</h2>;
  }
  const removeTour = (id) => {
    setTours(tours.filter((element) => element.id !== id));
  };
  return (
    <main>
      {tours.length === 0 ? (
        <div className='title'>
          <h2>No tours Left</h2>
          <button onClick={getTours} className='btn'>
            Refresh
          </button>
        </div>
      ) : (
        <Tours tours={tours} removeTour={removeTour} />
      )}
    </main>
  );
};

export default App;
