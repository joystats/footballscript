import React, {Component} from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
import '../App.css';

class Home extends Component{
	constructor(props){
		super(props)
		this.state={
			data:null
		}
	}
	componentDidMount(){
		const footballapi = sessionStorage.getItem("footballapi")
		if(footballapi===null){
			console.log('fetch')
			this.getFixtures()
		}else{
			console.log('get')
			this.setState({
				data:JSON.parse(footballapi)
			})
		}
		
		
		//this.getDataAxios()
	}
	async getFixtures(){
		const response = await axios.get("https://api-football-v1.p.rapidapi.com/v2/fixtures/league/524",
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
		this.setState({
			data:response.data
		})
		sessionStorage.setItem("footballapi",JSON.stringify(response.data))
	}
	async getDataAxios(){
		/*const response =
		  await axios.get("https://api-football-v1.p.rapidapi.com/v2/statistics/fixture/157015",
			{ 
				headers: {
					"Content-Type":"application/json",
					"x-rapidapi-host":"api-football-v1.p.rapidapi.com",
					"x-rapidapi-key":"e5167789eamsh4381fe939ca9b58p1c4da0jsn59fd19b93f4a"
				}
			}
		  )*/
		//console.log(response.data)
	}
	render(){
		return (
			<>
				 {
                    !this.state.data &&
                    <h3>LOADING...</h3>
                }
				{
					
					this.state.data &&
					(
						<>
                            <p className="bread">
                            <Link to="/">หน้าแรก</Link> > โปรแกรมทั้งฤดูกาล
                            </p>
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
									//console.log(this.state.data.api.fixtures[101].homeTeam.team_name)
									this.state.data.api.fixtures.map((item,index)=>{
										//console.log(item)
										return (
											<tr key={index}>
												<td>{index+1}</td>
												<td className="left"><img alt="home" src={item.homeTeam.logo} style={{width:'25px'}}/>
													&nbsp;{item.homeTeam.team_name}</td>
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
												<td className="left"><img alt="away" src={item.awayTeam.logo} style={{width:'25px'}}/>
													&nbsp;{item.awayTeam.team_name}</td>
												<td>{item.score.halftime}</td>
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
								</tbody>
							</table>
						</>
					)
				}
			</>
		);
	}
}

export default Home;
