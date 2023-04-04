import React,{useState} from 'react'


const HocComponent = (WrappedComponent) => {

    const WithCounter = () => {
        const [count, setCount] = useState(0);
    
        const incrementCount = () => {
          setCount(count + 1);
        };
    
        const decrementCount = () => {
          setCount(count - 1);
        };
    
        return (
            <div>
          <WrappedComponent
            count={count}
            incrementCount={incrementCount}
            decrementCount={decrementCount}
           
          />
          </div>
        );
      };
      return WithCounter;   
}

export default HocComponent