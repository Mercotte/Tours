/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { useState } from 'react';
const Tour = ({ tour, removeTour }) => {
  const { id, name, info, image, price } = tour;
  const [readMore, setReadMore] = useState(false);

  return (
    <article id={id} className='single-tour'>
      <img className='img' src={image} alt={name}></img>
      <footer>
        <div className='tour-info'>
          <span className='tour-price'>{price}</span>
          <h5>{name}</h5>
          <p>
            {!readMore ? info.substring(0, 200) + '...' : info + ' '}
            <button onClick={() => setReadMore(!readMore)} className='info-btn'>
              {!readMore ? 'Read More' : 'Read Less'}
            </button>
          </p>
          <button
            className='delete-btn btn-block btn'
            onClick={() => removeTour(id)}
          >
            No Interested
          </button>
        </div>
      </footer>
    </article>
  );
};

export default Tour;
