import React,{ cloneElement } from 'react';

export default props => {
  return(
    <div>
      {
        React.Children.map(props.children, (children, i) => { 
          return cloneElement(children,{ ... props, key: i })
        })
        /*
        outra forma de fazer a função sem chamar o React diretamente
        props.children.map((children, i) => {
          return cloneElement(children,{ ... props, key: i })
        })
        */
      }
    </div>
  );
};