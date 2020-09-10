import React from 'react';

// import PropTypes from 'prop-types';
import ChangeInput from '../../../UIKit/ChangeInput';

import './columnNameField.css';

export default class ColumnNameField extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isColumnNameChanged: false,
    };
  }

  toggleChangeNameForm = () => {
    this.setState(state => ({
      isColumnNameChanged: !state.isColumnNameChanged,
    }));
  };

  changeColumnName = (id, name) => {
    const { changeColumnName } = this.props;
    changeColumnName(id, name);
    this.toggleChangeNameForm();
  };

  render() {
    const { isColumnNameChanged } = this.state;
    const { name, columnId } = this.props;
    return (
      <div className="column__title">
        {!isColumnNameChanged ? (
          <h3 className="column__title--point" onClick={this.toggleChangeNameForm}>
            {name}
          </h3>
        ) : (
          <ChangeInput
            defaultValue={name}
            targetId={columnId}
            onChange={this.toggleChangeNameForm}
            onEnter={this.changeColumnName}
          />
        )}
      </div>
    );
  }
}

// ColumnNameField.propTypes = {
//   changeColumnName: PropTypes.func.isRequired,
//   name: PropTypes.string.isRequired,
//   columnId: PropTypes.string.isRequired,
// };
