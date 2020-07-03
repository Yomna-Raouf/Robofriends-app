import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import Spinner from 'react-spinkit';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';
import {setSearchField, requestRobots } from '../actions';
 

// Using Redux to manage States

const mapStateToProps = (state) => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
       // onRequestRobots: () => requestRobots
    }
}

const App = (props) => {

   // const [robots, setRobots] = useState([]);
   // const [searchfield, setSearchfield] = useState('');
   const { searchField, onSearchChange,  robots,  isPending} = props;


   const dispatch = useDispatch()

   useEffect(() =>{
       dispatch(requestRobots())
   },[dispatch])

    
    
    const filteredRobots =  robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })

    return isPending ?
            
    <div className='tc'> 
        <h1>Loading</h1>
        <Spinner name="ball-pulse-sync" color="#0ccac4"/>
    </div> 
    :
    (
        <div className='tc'>
            <h1 className='f1'>RoboFriends</h1>
            <SearchBox handleChange={onSearchChange} />
            <Scroll>
                <ErrorBoundry>
                <CardList robots={filteredRobots}/>
                </ErrorBoundry>
            </Scroll>                    
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);


// Using Functional Components with React Hooks

/*
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
            <SearchBox handleChange={ (e) => setSearchfield(e.target.value) } />
            <Scroll>
                <ErrorBoundry>
                    <CardList robots={filteredRobots}/>
                </ErrorBoundry>
            </Scroll>                    
        </div>
    );
}

export default App;
*/


// Using Class components

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


