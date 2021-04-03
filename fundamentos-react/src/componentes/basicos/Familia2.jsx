import React,{ cloneElement } from 'react';

export default props => {
  return(
    <div>
      {
        React.Children.map(props.children, (children) => { 
          return cloneElement(children,props)
        })
      }
    </div>
  );
};