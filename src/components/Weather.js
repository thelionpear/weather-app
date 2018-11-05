import React from "react"; 

//if a component doesn't have state, it doesn't need to be a class 
//delete all of the the "this" and pass in props and. . . 
//instead do const Weather == (props) => {}
//but if you only have one argument in an arrow function, then you don't need parens 
// const Weather == props ==> {} 
//if you are only returning one thing, you can explicitly return. 
//So switch to parens and get rid of render() {return()}

//so this below: 

// class Weather extends React.Component {
//   render() {
//     return(
//       <div>Weather Component
//         {this.props.city && this.props.country && <p>Location: {this.props.city}, {this.props.country}</p>}
//         {this.props.temperature && <p>Temperature: {this.props.temperature}</p>}
//         {this.props.humidity && <p>Humidity: {this.props.humidity}</p>}
//         {this.props.description && <p>Conditions: {this.props.description}</p>}
//         {this.props.error && <p>{this.props.error}</p>}
//       </div>
//     );
//   }
// }

// export default Weather; 

//becomes this: 

const Weather = props => (

  <div className="weather__info">
    {
      props.city && props.country && <p className="weather__key">Location: 
      <span className="weather__value"> {props.city}, {props.country}</span>
      </p>
    }
    {
      props.temperature && <p className="weather__key">Temperature: 
      <span className="weather__value"> {props.temperature}</span>
      </p>
    }
    {
      props.humidity && <p className="weather__key">Humidity: 
      <span className="weather__value"> {props.humidity}</span>
      </p>
    }
    {
      props.description && <p className="weather__key">Conditions: 
      <span className="weather__value"> {props.description}</span>
      </p>
    }
    {
      props.error && <p>
      <span className="weather__error">{props.error}</span>
      </p>
    }
  </div>

)

export default Weather; 