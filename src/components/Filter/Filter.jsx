import React, { Component } from 'react';
import s from './Filter.module.css';

class Filter extends Component {
  state = {};

  handlerFilterSearch = e => {
    const { value } = e.currentTarget;
    const { filterContacts } = this.props;
    // console.log(value);

    filterContacts(value);
  };

  render() {
    const { filterSearch } = this.props;
    const { handlerFilterSearch } = this;

    return (
      <div className={s.filterBox}>
        <h3 className={s.filterTitle}>Find contact by name</h3>
        <input
          className={s.filterInput}
          type="text"
          name="filter"
          value={filterSearch}
          onChange={handlerFilterSearch}
        />
      </div>
    );
  }
}
export default Filter;
