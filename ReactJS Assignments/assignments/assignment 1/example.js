var React = require('react');
var ReactDOM = require('react-dom');

class TMKform extends React.Component {
  constructor(props) {
    super(props);

    this.state = { tmks: []};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    //Definig form here which value is the input value, later to be concatted to tmk[]
    var form = this._input.value;
    var tmk = this.state.value;
    var allTmks = this.state.tmks.concat([form]);
    //Clears input on 'submit'
    this.setState({value: ''});
    this.setState({tmks: allTmks});
    event.preventDefault();
  }

  render() {
  console.log(this.state.tmks);

    return (
      <div className = "tmkSearch">
        <form onSubmit={this.handleSubmit}>
          <label>
            Enter TMK Here: <br />
            <input type="text" name="TMK Number" value={this.state.value} onChange={this.handleChange} ref={(el) => this._input = el}/>
          </label> <br />
          <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}


ReactDOM.render(<TMKform />, document.getElementById('app'));

module.exports = TMKform;