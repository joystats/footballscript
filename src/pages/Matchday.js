import React, {Component} from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
import '../App.css';

class Match extends Component{
	constructor(props){
		super(props)
		this.state={
            matchDay:null,
            data:null,
            key:[
                'Shots on Goal',
                'Shots off Goal',
                'Total Shots',
                'Blocked Shots',
                'Shots insidebox',
                'Shots outsidebox',
                'Fouls',
                'Corner Kicks',
                'Offsides',
                'Ball Possession',
                'Yellow Cards',
                'Red Cards',
                'Goalkeeper Saves',
                'Total passes',
                'Passes accurate',
                'Passes %'
            ]
		}
    }
    
	componentDidMount(){
        var date=null;
        const d = new Date();
        const year = d.getFullYear()
        const month = d.getMonth()+1;
        const day = d.getDate();
        date = year+"-"+month+"-"+day

        this.getDataMatchDayInfo(date)
		
	}
	async getDataMatchDayInfo(date){
        this.setState({
            matchDay:date
        })
        const response =await axios.get("https://api-football-v1.p.rapidapi.com/v2/fixtures/league/524/"+date,
            { 
                headers: {
                    "Content-Type":"application/json",
                    "x-rapidapi-host":"api-football-v1.p.rapidapi.com",
                    "x-rapidapi-key":"e5167789eamsh4381fe939ca9b58p1c4da0jsn59fd19b93f4a"
                },
                params:{
                    "timezone":"Asia/Bangkok"
                }
            }
        )
        console.log(response.data)
        if(response.data.api.results>0){
            this.setState({
                data:response.data
            })
        }else{
            var date2=null;
            var nextDay = new Date(date);
            nextDay.setDate(nextDay.getDate() + 1);
            const year = nextDay.getFullYear()
            const month = nextDay.getMonth()+1;
            const day = nextDay.getDate();
            date2 = year+"-"+month+"-"+day
            console.log('next')
            setTimeout(()=>{
                this.getDataMatchDayInfo(date2)
                console.log(date2)
            },2000)
        }
	}
	render(){
		return (
			<>
                {
                    !this.state.data &&
                    <h3>LOADING...{this.state.matchDay}</h3>
                }
                {
                    this.state.data &&
                    (
                        <>
                            <p className="bread">
                            <Link to="/">หน้าแรก</Link> > โปรแกรมนัดถัดไป
                            </p>
                            <h4>โปรแกรมแข่งขันวันที่ {this.state.matchDay}</h4>
                            <table>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>เจ้าบ้าน</th>
                                        <th>ผล</th>
                                        <th>ทีมเยือน</th>
                                        <th>ครึ่งแรก</th>
                                        <th>h2h</th>
                                        <th>เวลา</th>
                                        <th>สถานะ</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                    this.state.data.api.fixtures.map((item,index)=>{
                                        return (
                                            <tr key={index}>
                                                <td>{index+1}</td>
                                                <td><img alt="home" src={item.homeTeam.logo} style={{width:'25px'}}/>
                                                    &nbsp;<Link to={`/lineup/${item.fixture_id}`}>{item.homeTeam.team_name}</Link></td>
                                                <td>
                                                    <Link to={`/match/${item.fixture_id}`}>
                                                {
                                                    item.goalsHomeTeam!=null? item.goalsHomeTeam:'?'
                                                }
                                                -
                                                {
                                                    item.goalsAwayTeam!=null ? item.goalsAwayTeam:'?'
                                                }
                                                </Link>
                                                </td>
                                                <td><img alt="away" src={item.awayTeam.logo} style={{width:'25px'}}/>
                                                    &nbsp;<Link to={`/lineup/${item.fixture_id}`}>{item.awayTeam.team_name}</Link></td>
                                                <td>{
                                                    item.score.halftime? item.score.halftime:'?:?'
                                                    }</td>
                                                <td><Link to={`/h2h/${item.homeTeam.team_id}/${item.awayTeam.team_id}`}>h2h</Link></td>
                                                <td>
                                                {item.event_date.substr(0,10)}&nbsp;
                                                {item.event_date.substr(11,5)}
                                                </td>
                                                <td>{item.status}</td>
                                            </tr>
                                        )
                                    })
                                }
                                {
                                    this.state.data.api.results===0 &&
                                    <tr>
                                        <td colSpan="8">ไม่มีโปรแกรมแข่งขัน</td>
                                    </tr>
                                }
                                </tbody>
                            </table>
                        </>
                    )
                 }
			</>
		);
	}
}

export default Match;
