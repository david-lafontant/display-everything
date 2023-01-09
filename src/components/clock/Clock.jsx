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
}

Clock.propTypes = {}

export default Clock;