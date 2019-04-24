import React, { Component } from 'react'
import store from '../../store'
import {Button, Input, List, Typography} from 'antd'

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
        <Input
          style={{width: 300, marginRight: 20, marginBottom: 20}} 
          value={this.state.inputValue}
          onChange={(e) => this.handleInputChange(e.target.value)}  
        />
        <Button
          style={{}}
          onClick={this.handleClickChange}
        >按钮</Button>
        <List
          style={{width: 300}}
          bordered
          dataSource={this.state.list}
          renderItem={(item, index) => (<List.Item onClick={() => this.handleDelete(index)}><Typography.Text mark>[ITEM]</Typography.Text> {item}</List.Item>)}
        />
       
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