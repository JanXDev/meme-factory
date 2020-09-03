import React, { Component } from "react";
class MemeGenerator extends Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      randomImg: "http://i.imgflip.com/1bij.jpg",
      allMemeImgs: [],

      componentDidMount() {
        //ensure that data is fetched at the beginning
        fetch("https://api.imgflip.com/get_memes") //call to URL
          .then((response) => response.json()) //turn promise into JS object
          .then((response) => {
            const { memes } = response.data; //pull memes array from response.data
            console.log(memes[0]); // check data is present
            this.setState({ allMemeImgs: memes }); // set allMemeImgs state
          });
      },
    };
  }

  render() {
    return (
      <div>
        <form className="meme-form">
          <input
            type="text"
            name="topText"
            placeholder="Top Text"
            value={this.state.topText}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="bottomText"
            placeholder="Bottom Text"
            value={this.state.bottomText}
            onChange={this.handleChange}
          />
          <button>Gen</button>
        </form>
      </div>
    );
  }

  handleChange(event) {}
}

export default MemeGenerator;
