import React, { useState } from 'react';
import PropTypes from 'prop-types';

import ChangeInput from '../../../UIKit/ChangeInput';

import './columnNameField.css';

const ColumnNameField = ({ name, columnId, changeColumnName }) => {
  const [isColumnNameChanged, setColumnNameChanged] = useState(false);

  const toggleChangeNameForm = () => {
    setColumnNameChanged(prev => !prev);
  };

  const renameColumn = (id, name) => {
    changeColumnName(id, name);
    toggleChangeNameForm();
  };

  return (
    <div className="column__title">
      {!isColumnNameChanged ? (
        <h3 className="column__title--point" onClick={toggleChangeNameForm}>
          {name}
        </h3>
      ) : (
        <ChangeInput
          defaultValue={name}
          targetId={columnId}
          onChange={toggleChangeNameForm}
          onEnter={renameColumn}
        />
      )}
    </div>
  );
};

ColumnNameField.propTypes = {
  changeColumnName: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  columnId: PropTypes.string.isRequired,
};

export default ColumnNameField;
