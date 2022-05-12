import React from 'react';

class NameInput extends React.Component {
  render() {
    const { onInputChange, name } = this.props;

    return (
      <>
        <label>Nome</label>
        <input
          type='text'
          name='name'
          id='name'
          maxlength='40'
          required
          onChange={onInputChange}
          value={name}
        />
      </>
    );
  }
}

export default NameInput;

// onKeyUp={ this.value.toUpperCase() }

//   onChange={onInputChange}
//   value={name.toUpperCase()}
