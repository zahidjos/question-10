import React from 'react';

const Card = (props) => {
    const{name,email,phone,company}=props.singleData;
    return (
        <div>
            <div className="card mt-5 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title text-center">Name:{name}</h2>
    <p className='text-start'>Email:{email}</p>
    <p className='text-start'>Phone:{phone}</p>
    <p className='text-start'>Company name:{company.name}</p>
   
  </div>
</div>
        </div>
    );
};

export default Card;