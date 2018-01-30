import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ImgCard from './components/imgcard';
import Form from './components/form';

class App extends Component {
  state = {
    tags: [
      { id: 'ai_fZsLlGwm', name: '#pizza' },
      { id: 'ai_r5ztBK9R', name: '#crust' },
      { id: 'ai_gtDBWvzl', name: '#pepperoni' },
      { id: 'ai_83fRbfX4', name: '#dough' },
      { id: 'ai_GC6FB0cQ', name: '#sauce' },
      { id: 'ai_39ZT5Vqj', name: '#mozzarella' },
      { id: 'ai_FnZCSVMH', name: '#cheese' },
      { id: 'ai_CB8hsS3T', name: '#tomato' },
      { id: 'ai_qTbLR0SR', name: '#salami' },
      { id: 'ai_2GpnH7qr', name: '#pie' },
      { id: 'ai_cF6rHV8d', name: '#ham' },
      { id: 'ai_6dwQh8rX', name: '#frozen pizza' }
    ],
    copyTags:
      '#pizza #crust #pepperoni #dough #sauce #mozzarella #cheese #tomato #salami #pie #ham #frozenpizza',
    imgUrl:
      'https://developer.clarifai.com/static/images/model-samples/food-004.jpg',
    copied: false
  };

  addTags = (results, imgUrl, tagCopy) => {
    console.log(results, imgUrl);
    this.setState({ tags: results, imgUrl: imgUrl, copyTags: tagCopy });
  };

  copied = copied => {
    this.setState({ copied });
  };

  render() {
    return (
      <div className="row valign-wrapper">
        <div className="col s12">
          <Form onSubmit={this.addTags} />
          <ImgCard
            imgUrl={this.state.imgUrl}
            tags={this.state.tags}
            copyTags={this.state.copyTags}
            onCopy={this.copied}
            copied={this.state.copied}
          />
        </div>
      </div>
    );
  }
}

export default App;
