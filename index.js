import { h, Component } from "preact";
import fetch from 'unfetch';

export default class App extends Component {
  componentDidMount() {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(r => r.json())
           .then(
        (data) => {
                    this.setState({
            isLoaded: true,
            items: data.message
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        
                       <img width="100" src={items}></img>  
                         
        
      );
    }
  }
   
    
  
  
  

}
  

  


