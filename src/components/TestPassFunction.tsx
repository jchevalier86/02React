import React from 'react';


const TestPassFunction: React.FC<any> = ({ testAlert }) => {
    return (<div>
                <h1>Hello</h1> <div><button onClick={()=>testAlert('hello Johnny')}>click here </button> </div>
            </div>

    )
}

export default TestPassFunction;