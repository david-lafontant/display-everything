import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Everything = ({input}) => {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    setInterval(() => setDate(new Date()), 1000);
  }, []);

  const myStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#34ebeb'
  }

  if (!input) {
    return (

      <p style={myStyle}>
        {date.toLocaleString('en-US', {
          hour: 'numeric',
          minute: 'numeric',
          hour12: true,
        })}
      </p>
    )
  }

  if (Array.isArray(input)) {
    return (
      <ul style={{listStyleType: 'none', display: 'flex', flexDirection: 'column', gap: '1.1rem'}}>
        {
          input.map(item => <li style={myStyle} key={item}>{item}</li>)
        }
      </ul>
    );
  }

  switch (typeof input) {
    case 'number':
    case 'string':
      return (<p>{input}</p>);
    case 'object':
      const list = Object.inputs(input);
      return (
        <ul style={{listStyleType: 'none'}}>
          {list.map(item => <li style={myStyle} key={item}>{item}</li>)}
        </ul>
      )

    default:
      return <p>inadequate input</p>;
  }
}

Everything.propTypes = {
  input: PropTypes.any
}

export default Everything;