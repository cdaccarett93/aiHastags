import React, { Component } from 'react';
import Clarifai from 'clarifai';
import keys from '../../config/prod';

const app = new Clarifai.App({
  apiKey: 'a437e508660547c8bf1d98bebf04c582'
});

class Form extends Component {
  state = {
    imgUrl: ''
  };

  handleSubmit = event => {
    event.preventDefault();
    app.models.predict(keys.clarifaiKey, this.state.imgUrl).then(
      response => {
        let tags = response.outputs[0].data.concepts;
        let result = tags.filter(tag => tag.value > 0.8);
        result = result.map(tag => {
          return { id: tag.id, name: '#' + tag.name };
        });
        let tagCopy = result
          .map(tag => {
            return tag.name;
          })
          .join(' ');
        console.log(tagCopy);
        this.props.onSubmit(result, this.state.imgUrl, tagCopy);
      },
      err => {
        // there was an error
        console.log(err);
      }
    );
  };

  render() {
    return (
      <div className="row">
        <form className="" onSubmit={this.handleSubmit}>
          <div className="">
            <div className="col s10 input-field inline">
              <input
                type="text"
                className="validate"
                value={this.state.imgUrl}
                onChange={event =>
                  this.setState({ imgUrl: event.target.value })
                }
              />
              <label>Image Url</label>
            </div>
            <div className="input-field">
              <input
                style={{ color: '#555' }}
                type="submit"
                className="inline col s2 validate btn grey lighten-2 truncate"
                value="Get Tags"
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
