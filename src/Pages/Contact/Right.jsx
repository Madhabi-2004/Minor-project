import React from 'react';
function Right(props) {
    const {content,img } = props;
    return (
        <div className="section">
            <img src={img} alt='' width={450} />
                {/* <h2>{title}</h2> */}
                <p>{content}</p>
        </div>
    );
}

export default Right;