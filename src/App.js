import React from "react";
import TaskItem from "./components/TaskItem";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleStateChange = this.handleStateChange.bind(this);
    this.state = {
      tasks: [
        {
          id: "1",
          description: "Estudar Programação",
          isCompleted: false,
        },
        {
          id: "2",
          description: "Ler",
          isCompleted: true,
        },
      ],
    };
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevState);
    console.log("component was updated!");
  }

  handleStateChange() {
    this.setState({
      tasks: [],
    });
  }

  render() {
    return (
      <>
        {this.state.tasks.map((task) => (
          <TaskItem task={task} key={task.id} />
        ))}
        <button onClick={this.handleStateChange}>Limpar tarefas</button>
      </>
    );
  }
}

export default App;

// import { useState } from "react";
// import TaskItem from "./components/TaskItem";

// const App = () => {
//   const [tasks, setTasks] = useState([
// {
//   id: "1",
//   description: "Estudar Programação",
//   isCompleted: false,
// },
// {
//   id: "2",
//   description: "Ler",
//   isCompleted: true,
// },
//   ]);

//   return (
//     <>
//       {tasks.map((task) => (
//         <TaskItem task={task} key={task.id} />
//       ))}
//     </>
//   );
// };

// export default App;
