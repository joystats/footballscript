import React, {Component} from 'react';
import {Switch, Route, NavLink} from 'react-router-dom'
import Home from './pages/Home'
import Match from './pages/Match'
import H2h from './pages/H2h'
import Tables from './pages/Tables'
import Matchday from './pages/Matchday'
import Front from './pages/Front'
import About from './pages/About'
import Advertise from './pages/Advertise'
import Topscorer from './pages/Topscorer'
import Teams from './pages/Teams'
import Trans from './pages/Trans'
import Players from './pages/Players'
import Transfer from './pages/Transfer'
import Lineup from './pages/Lineup'

class App extends Component{
	
	render(){
		return (
			<div className="container">
                <div className="left-side">
                    <h1 className="pridi">EPL</h1>
                    <ul className="navLink">
                        <li><NavLink exact to="/">หน้าแรก</NavLink></li>
                        <li><NavLink to="/matchday">โปรแกรมนัดถัดไป</NavLink></li>
                        <li><NavLink to="/fixture">โปรแกรมทั้งฤดูกาล</NavLink></li>
                        <li><NavLink to="/tables">ตารางคะแนน</NavLink></li>
						<li><NavLink to="/teams">รายชื่อนักเตะ</NavLink></li>
						<li><NavLink to="/trans">การซื้อขายนักเตะ</NavLink></li>
                        <li><NavLink to="/topscorer">อันดับดาวซัลโว</NavLink></li>
                        <li><NavLink to="/advertise">ติดต่อโฆษณา</NavLink></li>
                        <li><NavLink to="/about">เกี่ยวกับเรา</NavLink></li>
                    </ul>
					<p className="social-icon">
						<i className="fab fa-facebook"></i>
						<i className="fab fa-instagram"></i>
						<i className="fab fa-google-plus"></i>
						<i className="fab fa-facebook-messenger"></i>
					</p>
                </div>
                <div className="right-side">
					<Switch>
						<Route path="/matchday" component={Matchday}/>
						<Route path="/tables" component={Tables}/>
						<Route path="/h2h/:id/:id2" component={H2h}/>
						<Route path="/match/:id" component={Match}/>
						<Route path="/fixture" component={Home}/>
						<Route path="/about" component={About}/>
						<Route path="/topscorer" component={Topscorer}/>
						<Route path="/advertise" component={Advertise}/>
						<Route path="/teams" component={Teams}/>
						<Route path="/trans" component={Trans}/>
						<Route path="/player/:id/:team" component={Players}/>
						<Route path="/transfer/:id/:team" component={Transfer}/>
						<Route path="/lineup/:id" component={Lineup}/>
						<Route path="/" exact component={Front}/>>
					</Switch>
                </div>
            </div>
		);
	}
}

export default App;
