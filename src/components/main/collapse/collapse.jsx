import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

function Collapse({ title, content }) {
  const [activeCollapse, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!activeCollapse);
  };

  return (
    <div className="collapse">
      <button className={`label-container ${activeCollapse ? 'close' : 'open'}`} onClick={toggleCollapse}>
        <label>{title}</label>
        <FontAwesomeIcon
          icon={faChevronUp}
          className={activeCollapse ? 'rotate-up' : 'rotate-down'}
        />
      </button>
      {!activeCollapse && <div className='description-collapse'>{content}</div>}
    </div>
  );
}

export default Collapse;
