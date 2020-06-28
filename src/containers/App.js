import React, { useState, useEffect } from 'react';
import Spinner from 'react-spinkit';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';
 


const App = () => {

    const [robots, setRobots] = useState([]);
    const [searchfield, setSearchfield] = useState('');

    useEffect( () => {
        // this code runs once when the component loads 
        // Here I'm going to fetch a random user from the random user generator API
        const fetchData = () => {
           fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setRobots(users) )
        };
        fetchData();
      }, []);
    
    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })

    return !robots.length ?
            
    <div className='tc'> 
        <h1>Loading</h1>
        <Spinner name="ball-pulse-sync" color="#0ccac4"/>
    </div> 
    :
    (
        <div className='tc'>
            <h1 className='f1'>RoboFriends</h1>
            <SearchBox handleChange={ event => setSearchfield(event.target.value)} />
            <Scroll>
                <ErrorBoundry>
                <CardList robots={filteredRobots}/>
                </ErrorBoundry>
            </Scroll>                    
        </div>
    );
}

export default App;

/* class App extends Component  {
    constructor () {
        super();
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(Response => Response.json())
            .then(users => this.setState({robots: users}));
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }

    render () {

        const {robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        return !robots.length ?
            
            <div className='tc'> 
                <h1>Loading</h1>
                <Spinner name="ball-pulse-sync" color="#0ccac4"/>
            </div> 
            :
            (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <ErrorBoundry>
                        <CardList robots={filteredRobots}/>
                        </ErrorBoundry>
                    </Scroll>                    
                </div>
            );
    }

} */


