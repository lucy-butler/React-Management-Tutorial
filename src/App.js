import React, { Component } from 'react';
import Customer from './components/Customer';
import './App.css';

const customers = [
{
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': '홍길동',
  'birthday': '960202',
  'gender': '남자',
  'job': '대학생'
},
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name': '이순신',
  'birthday': '890202',
  'gender': '남자',
  'job': '프로그래머'
}
]
class App extends Component {
  render() {
    return (
      <div>
        {
          customers.map(c =>{
            return (
              <Customer 
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />
            );
          })
        }

      </div>
    );
  }
}

export default App;
