import React,{Component} from "react";
import ReactDOM from "react-dom";
import * as Survey from "survey-react";
import "survey-react/survey.css";
// import "./styles.css";

class SurveyComponent extends Component{
  constructor(props) {
    super(props);
    this.state = { isCompleted: false };
    this.onCompleteComponent = this.onCompleteComponent.bind(this);
  }
  onCompleteComponent() {
    this.setState({ isCompleted: true });
  }
  render() {
    let json = {
      questions: [
        {
          type: "checkbox",
          name: "income",
          title: "Select all you sources of incomefrom the list below",
          isRequired: true,
          colCount: 4,
          choicesOrder: "asc",
          choices: [
            "Ford",
            "Tesla",
            "Vauxhall",
            "Volkswagen",
            "Nissan",
            "Audi",
            "Mercedes-Benz",  
            "Citroen"
          ]
        }
      ]
    };
    var surveyRender = !this.state.isCompleted ? (
      <Survey.Survey
        json={json}
        showCompletedPage={true}
        onComplete={this.onCompleteComponent}
      />
    ) : null;
    var onCompleteComponent = this.state.isCompleted ? (
    <div>The component after onComplete event{}</div>
    ) : null;
    return (
      <div>
        {surveyRender}
        {onCompleteComponent}
      </div>
    );
  }
}
function App() {
  return (
    <div className="App">
      <h1>Lets Build <b className='tobebold'>Your Income Profile</b></h1>
      <h2>Select All Your Sources of Income From The List Below</h2>
      <SurveyComponent />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);