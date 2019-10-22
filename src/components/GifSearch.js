import React, { Component } from 'react'

function handleSubmit(e) {
  const search = e.target.value
  this.setState({ search })
}

function handleClick(e) {
  e.preventDefault()
  this.props.handleSubmit(this.state.search)
  this.setState({ search: undefined })
}

class GifSearch extends Component {
  state = {
    search: ''
  }

  render() {
    return (
      <div>
        <form onSubmit={handleClick.bind(this)} className="bg-light-red mw7 center pa4 br2-ns ba b--black-10">
          <fieldset className="cf bn ma0 pa0">
            <div className="cf">
              <input onChange={handleSubmit.bind(this)} className="f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns" type='text' />
              <input onClick={handleClick.bind(this)} className="f6 f5-l button-reset fl pv3 tc bn bg-animate bg-black-70 hover-bg-black white pointer w-100 w-25-m w-20-l br2-ns br--right-ns" type="submit" />
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default GifSearch;