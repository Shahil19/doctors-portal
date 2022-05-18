import React from 'react';

const PrimaryButton = ({ children }) => {
    return (
        <button class="btn btn-primary uppercase text-white bg-gradient-to-r from-primary to-secondary my-2">{children}</button>
    );
};

export default PrimaryButton;