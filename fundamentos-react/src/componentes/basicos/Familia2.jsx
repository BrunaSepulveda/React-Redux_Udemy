import React,{ cloneElement } from 'react';

export default props => {
  return(
    <div>
      {
        React.Children.map(props.children, (elementChildrenCurrent) => {
          cloneElement(elementChildrenCurrent,{...props})
        })
      }
    </div>
  );
};