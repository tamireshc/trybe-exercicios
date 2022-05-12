import React from 'react';

class EnderecoInput extends React.Component {
    render() {
        const { onInputChange, endereco } = this.props;

        return (
            <>
                <label>Endreço</label>
                <input
                    type='text'
                    name='endereco'
                    id='endereco'
                    maxlength='200'
                    required
                    onChange={ onInputChange }
                    value={ endereco }

                />
            </>
        );
    }
}

export default EnderecoInput;