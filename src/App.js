import React, { Component } from 'react';
import Customer from './components/Customer';
import './App.css';

const customer = [
{
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': '홍길동',
  'birthday': '960202',
  'gender': '남자',
  'jop': '대학생'
},
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name': '이순신',
  'birthday': '890202',
  'gender': '남자',
  'jop': '프로그래머'
}
]
class App extends Component {
  render() {
    return (
      <Customer 
        id={customer.id}
        image={customer.image}
        name={customer.name}
        birthday={customer.birthday}
        gender={customer.gender}
        jop={customer.jop}
      />
    );
  }
}

export default App;
