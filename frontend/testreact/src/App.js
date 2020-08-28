import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      title: 'Simple CRUD',
      login: []
    }
  }
 //MAKE AJAX CALLS
  componentDidMount(){
    console.log('COMPONENTE ESTA MONTADO');
    var that = this;
    fetch('http://localhost:3000/api/usuario')
      .then(function(response){
        response.json()
          .then(function(data){
            // let usuario = that.state.usuario
            console.log(data);
            // usuario.concat(data);
            that.setState({
              usuario: data
            })
          })
      })
  }
  removeLogin(id){
    let that=this;
    let usuario = this.state.usuario;
    let user = usuario.find(function(user){
      return user.id === id
    });

    var request = new Request('http://localhost:3000/api/remove' + id,{
      method: 'DELETE'
    });

    fetch(request)
      .then(function(response){
        usuario.splice(user,1);
        that.setState({
          usuario: usuario
        })
        response.json()
          .then(function(data){
            console.log(data)
          })
      })
  }

  addLogin(){
    event.preventDefault();
    console.log('cheguei no metodo');
    let data = {
      login_name: this.refs.login.value
    };
    var request = new Request('http://localhost:3000/api/new-login',{
      method: 'POST',
      headers: new Headers({'Content-Type':'application/json'}),
      body: JSON.stringify(data)
    });

    fetch(request)
      .then(function(response){
        response.json()
          .then(function(data){
            console.log(data)
          })
    })
  }
  render() {
    let title = this.state.title;
    let usuario = this.state.usuario
    return (
      <div className="App">
        {title}
        <form ref="countryForm">
          <input type="text" ref="login" placeholder="login_name"/>
          
          <button onClick={this.addLogin.bind(this)}>Add</button>
          
        </form>
        <ul>
        <pre>{JSON.stringify(usuario)}</pre>
        </ul>
      </div>
    );
  }
}

export default App;
