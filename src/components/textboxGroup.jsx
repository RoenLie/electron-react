import React from 'react';

import SummaryTextbox from "./summaryTextbox";

const TextboxGroup = () =>{

    const [state, setState] = React.useState({
        text:'test text'
      });

      const handleChange = event => {
        setState({text: event.target.value });
      };
    
    return (
        <React.Fragment>
            <SummaryTextbox
                id="1"
                value={state.text}
                onChange={handleChange}
            />
        </React.Fragment>
    );
}

export default TextboxGroup;