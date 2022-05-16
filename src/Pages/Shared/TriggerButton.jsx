import React from 'react';

const TriggerButton = ({children}) => {
    return (
        <button className='btn bg-gradient-to-r from-secondary to-primary border-0 font-bold text-white uppercase'>{children}</button>
    );
};

export default TriggerButton;