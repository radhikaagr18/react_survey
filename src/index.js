import React,{Component} from "react";
import ReactDOM from "react-dom";
import * as Survey from "survey-react";
import "survey-react/survey.css";
import "./styles.css";

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
          "type": "imagepicker",
          "choices": [
           {
            "value": "lion",
            "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg"
           },
           {
            "value": "giraffe",
            "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/giraffe.jpg"
           },
           {
            "value": "panda",
            "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg"
           },
           {
            "value": "camel",
            "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/camel.jpg"
           },
           {
            "value": "Accounts",
            "imageLink": "https://www.indiafilings.com/learn/wp-content/uploads/2017/10/Maintaining-Book-of-Accounts-of-Company.jpg"
        }
          ],
          "imageFit": "fill",
          "multiSelect": true,
          "showLabel": true,
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