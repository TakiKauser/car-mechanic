import React from 'react';

const Expert = (props) => {
    const { name, img, expertize } = props.expert;
    return (
        <div className='col-lg-3 col-md-6 col-sm-12'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h5>{expertize}</h5>
        </div>
    );
};

export default Expert;