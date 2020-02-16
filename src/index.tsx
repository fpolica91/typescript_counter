import * as React from "react";
import { render } from "react-dom";


interface IState {
  count: number;
}
class App extends React.Component<{}, IState>{
  public readonly state = {
    count: 0
  }

  public render(){
    return(
    <div>
      
      {this.state.count}
    </div>
    )
  }
}

// interface IState {
//   count: number;
// }

// class App extends React.Component<{}, IState> {
//   public readonly state = {
//     count: 0
//   };

//   private handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
//     const type: string = event.currentTarget.title;

//     this.setState(({ count }) => ({
//       count: type === "decrement" ? count - 1 : count + 1
//     }));
//   };

//   public render() {
//     return (
//       <div>
//         <button title="decrement" onClick={this.handleClick}>
//           -
//         </button>
//         {this.state.count}
//         <button title="increment" onClick={this.handleClick}>
//           +
//         </button>
//       </div>
//     );
//   }
// }

render(<App />, document.getElementById("root"));
