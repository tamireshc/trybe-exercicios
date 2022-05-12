import React from 'react';

class CpfInput extends React.Component {
    render() {
        const { onInputChange, cpf } = this.props;

        return (
            <>
                <label>Cpf</label>
                <input
                    type='text'
                    name='cpf'
                    id='cpf'
                    maxlength='11'
                    required
                    onChange={ onInputChange }
                    value={ cpf }
                />
            </>
        );
    }
}

export default CpfInput;