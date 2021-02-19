import React, { Component } from 'react';
import Demo from './Demo';
import Cardlist from "./components/card-list/card-list.components";
import Search from './components/saerchbox/searchbox.component';

class Practice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            monster: [],
            SearchField: ''
        }
        this.handlechange = this.handlechange.bind(this);
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ monster: users }))
    }
    handlechange = (e) => {
        this.setState({ SearchField: e.target.value })
    }
    render() {
        const { monster, SearchField } = this.state;
        const FilteredMonster = monster.filter((item) => item.name.toLowerCase().includes(SearchField.toLowerCase()))
        return (
            <div className='app2'>
                <Search placeholder='search monsters' handlechange={this.handlechange} />
                <Cardlist monsters={FilteredMonster}></Cardlist >
            </div>
        )
    }
}

export default Practice