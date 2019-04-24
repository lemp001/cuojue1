import React, { Component } from 'react'
import store from '../../store'

class Home extends Component {
  constructor (props) {
    super (props)
    this.state=store.getState()
    store.subscribe(this.handleStoreChange)
  }
  render () {
    console.log('this.state',this.state)
    return (
      <div style={{padding: 20}}>
        <div>234</div>
        <div>456</div>
        <div>789</div>
        <div>今天下雨</div>
        <input 
          value={this.state.inputValue}
          onChange={(e) => this.handleInputChange(e.target.value)}  
        />
        <button
          style={{paddingLeft: 20}}
          onClick={this.handleClickChange}
        >按钮</button>
        {
          this.state.list.map((item, index) => <div key={index} onClick={() => this.handleDelete(index)}>{item}</div>)
        }
      </div>
    )
  }
  handleInputChange = (value) => {
    const action = {
      type: 'input_change_value',
      inputValue: value
    }
    store.dispatch(action)
  }
  handleClickChange = () => {
    const action = {
      type: 'button_click_change',
      value: this.state.inputValue
    }
    store.dispatch(action)
  }
  handleDelete = (index) => {
    const action = {
      type: 'delete_div',
      index,
    }
    store.dispatch(action)
  }
  handleStoreChange = () => {
    this.setState(store.getState())
  }
}

export default Home