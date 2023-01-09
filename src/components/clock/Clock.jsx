import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Clock = ({value}) => {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    setInterval(() => setDate(new Date()), 1000);
  }, []);

  if (!value) {
    return (

      <p>
        {date.toLocaleString('en-US', {
          hour: 'numeric',
          minute: 'numeric',
          hour12: true,
        })}
      </p>
    )
  }

  if (Array.isArray(value)) {
    return (
      <ul>
        {
          value.map(item => <li key={item}>{item}</li>)
        }
      </ul>
    );
  }

  switch (typeof value) {
    case 'number':
    case 'string':
      return (<p>{value}</p>);
    case 'object':
      const list = Object.values(value);
      return (
        <ul>
          {list.map(item => <li key={item}>{item}</li>)}
        </ul>
      )

    default:
      return <p>inadequate input</p>;
  }
}

Clock.propTypes = {
  value: PropTypes.any
}

export default Clock;