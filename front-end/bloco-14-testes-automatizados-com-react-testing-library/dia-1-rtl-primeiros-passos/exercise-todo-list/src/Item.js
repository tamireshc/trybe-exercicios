import React from 'react';
import PropTypes from 'prop-types';

class Item extends React.Component {
  constructor() {
    super();
    this.state = {
      enableButton: true,
    };
  }

  changeDisableButton = () => {
    this.setState(({ enableButton }) => ({ enableButton: !enableButton }));
  }

 

  render() {
    const { content, funcRemove } = this.props;
    const { enableButton } = this.state;
    return (
      <div className="Item">
        { content }
        <button type="button" onClick={ this.changeDisableButton }>Selecionar</button>
        <button type="button" disabled={ enableButton } onClick={funcRemove}>Remover</button>
      </div>
    );
  }
}

export default Item;

Item.propTypes = {
  content: PropTypes.string.isRequired,
};
