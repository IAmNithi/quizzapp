import React, { Component } from 'react'

export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [{
        key: 'Question1',
        Question: 'Name the world’s largest desert?',
        option1: 'Arabian',
        option2: 'Sahara',
        option3: 'Antarctica',
        option4: 'Arctic',
        Answer: 'Antarctica'
      }, {
        key: 'Question2',
        Question: 'Which man-made landmark can be seen from space?',
        option1: 'Great Wall of China',
        option2: 'The Ancient Pyramids of Giza',
        option3: 'The islands of Dubai',
        option4: 'None',
        Answer: 'None'
      }, {
        key: 'Question3',
        Question: 'Who wrote the classic novel Les Miserables?',
        option1: 'Victor Hugo',
        option2: 'Tom Hooper',
        option3: 'Émile Zola',
        option4: 'Honoré de Balzac',
        Answer: 'Victor Hugo'
      }, {
        key: 'Question4',
        Question: 'How was Achilles killed?',
        option1: 'By an arrow in his heel',
        option2: 'chained to a rock in the Caucasus Mountains',
        option3: 'By an arrow in his chest',
        option4: 'cloak soaked in Nessus blood',
        Answer: 'By an arrow in his heel'
      }],
      Question1: '',
      Question2: '',
      Question3: '',
      Question4: '',
      score: 0,
      result: false
    };
  }
  print() {
    console.log('button is been clicked');
  }
  setoption(event, key, data) {
    console.log(key, data);
    this.setState({
      [key]: data
    })
  }
  submit() {
    let localScore = 0;
    const localData = this.state.data;
    for (let i = 0; i < localData.length; i++) {
      if (localData[i].Answer === this.state[localData[i].key]) {
        localScore = localScore + 1;
      } else {
        localScore = localScore + 0;
      }
    }
    this.setState({
      score: localScore,
      result: true
    })
  }
  back() {
    this.setState({
      score: 0,
      result: false
    })
  }
  question() {
    const question = this.state.data.map((data, index) =>
      <div className="my-3 p-3 bg-white rounded shadow-sm" key={index}>
        <h6 className="border-bottom border-gray pb-2 mb-0">{data.Question}</h6>
        <div className="form-check">
          <div className="media text-muted pt-3">
            <input type="radio" className="form-check-input" name={data.Question} id="Check1" onClick={e => this.setoption(e, data.key, data.option1)} value={this.state[data.key]} />
            <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
              <strong className="d-block text-gray-dark">{data.option1}</strong>
            </p>
          </div>
          <div className="media text-muted pt-3">
            <input type="radio" className="form-check-input" name={data.Question} id="Check2" onClick={e => this.setoption(e, data.key, data.option2)} value={this.state[data.key]} />
            <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
              <strong className="d-block text-gray-dark">{data.option2}</strong>
            </p>
          </div>
          <div className="media text-muted pt-3">
            <input type="radio" className="form-check-input" name={data.Question} id="Check3" onClick={e => this.setoption(e, data.key, data.option3)} value={this.state[data.key]} />
            <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
              <strong className="d-block text-gray-dark">{data.option3}</strong>
            </p>
          </div>
          <div className="media text-muted pt-3">
            <input type="radio" className="form-check-input" name={data.Question} id="Check4" onClick={e => this.setoption(e, data.key, data.option4)} value={this.state[data.key]} />
            <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
              <strong className="d-block text-gray-dark">{data.option4}</strong>
            </p>
          </div>
        </div>
        <small className="d-block text-right mt-3">
          Your Answer: {this.state[data.key]}
        </small>
      </div>
    );
    return question;
  }
  render() {
    return (
      <main role="main" className="container">
        {!this.state.result ?
          <div>
            {
              this.question()
            }
            <button className="btn btn-primary" onClick={e => this.submit(e)}>Submit Answer</button>
          </div> :
          <div>
          <h1>Your Score Is: {this.state.score} / 4</h1>
          <button className="btn btn-primary" onClick={e => this.back(e)}>Back</button>
          </div>
        }
      </main>
    )
  }
}

export default Main
