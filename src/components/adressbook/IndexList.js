import React, { Component, Fragment } from 'react';
import { nanoid } from 'nanoid'

const indexList = ["↑","☆","A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U",
"V", "W", "X", "Y", "Z","#"]

export default class IndexList extends Component {

  render() {
    return (
      <Fragment>

            <div className="index-wrap">
                {indexList.map(i => (
                    <div className="each-index" key={nanoid()}>{i}</div>
                ))}
            </div>

      </Fragment>
    );
  }
}
