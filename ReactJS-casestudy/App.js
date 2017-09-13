import React from 'react';
import {Link} from 'react-router';

class App extends React.Component {
  render() {
    return (
       <div>
        <h1><b>WELCOME TO SONATA ONLINE STORE</b></h1>
          <nav className="navbar navbar-inverse">
            <div className="col-md-offset-4">
            <div className="container-fluid">
              <div className="navbar-header">
                <font color="white"><h1><b>PLEASE CHOOSE THE CATEGORY</b></h1></font>
              </div>

            </div>
            </div>
          </nav>
          
              <div className="container-fluid"> 
                <div className="col-md-offset-5">
                  <div className="btn-group text-center">
                  <center>
                    <button className="btn btn-lg btn-default"><Link to="/" activeClassName="active">Home</Link></button>
                    <button className="btn btn-lg btn-default"><Link to="/BooksList" activeClassName="active">Books</Link></button>
                    <button className="btn btn-lg btn-default"><Link to="/DVDList" activeClassName="active">DVD</Link></button>
                  </center>
                  </div>
                 </div> 
              </div>
          
        <main>
          {this.props.children}
        </main>
    </div>
    )
  }
}

export default App;

                  