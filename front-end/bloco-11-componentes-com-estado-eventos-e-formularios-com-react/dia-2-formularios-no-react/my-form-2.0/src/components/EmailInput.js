import React from 'react';

class EmailInput extends React.Component {
    render() {
        const { onInputChange, email } = this.props;

        return (
            <>
                <label>Email</label>
                <input
                    type='email'
                    name='email'
                    id='email'
                    maxlength='50'
                    required
                    onChange={ onInputChange }
                    value={ email }
                />
            </>
        );
    }
}

export default EmailInput;
