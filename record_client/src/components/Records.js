import React, { Component } from 'react';
import { BrowserRouter as Router, Link, NavLink } from 'react-router-dom';
import Route from 'react-router-dom/Route';

class Records extends Component {
  render () {
    return (
      <div className="col-sm-7">
        { this.props.records && this.props.records.map((record, i) => {
            return  (
                <div key={record.id} className="records">
                    <Link to={`/show/${record.id}`}><h3><span className="artist">{ record.artist } </span>| <span className="release">{ record.title } </span></h3></Link>
                    <p>It was released in { record.year } on { record.label }</p>
                    <small>It is an { record.format }</small><br />
                    <button className="btn btn-warning" onClick={() => this.props.handleUpdate(record.id)}> UPDATE </button>
                    <button className="btn btn-danger" onClick={() => this.props.deleteRecord(record.id, i)}> DELETE </button>
                </div>
            )
        })}
      </div>
    )
  }
}

export default Records;
