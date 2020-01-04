import React, {Component} from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
import '../App.css';

class Tables extends Component{
	constructor(props){
		super(props)
		this.state={
            data:null
		}
	}
	componentDidMount(){
        const tables = sessionStorage.getItem("footballapi_table")

        if(tables===null){
            console.log('fetch')
            this.getDataTableInfo()
        }else{
            console.log('get')
            this.setState({
                data:JSON.parse(tables)
            })
        }
		
	}
	async getDataTableInfo(){
		const response =await axios.get("https://api-football-v1.p.rapidapi.com/v2/leagueTable/524",
			{ 
				headers: {
					"Content-Type":"application/json",
					"x-rapidapi-host":"api-football-v1.p.rapidapi.com",
					"x-rapidapi-key":"e5167789eamsh4381fe939ca9b58p1c4da0jsn59fd19b93f4a"
				}
			}
          )
        
        if(response.data){
            this.setState({
                data:response.data
            })
            sessionStorage.setItem("footballapi_table",JSON.stringify(response.data))
        }
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
                            <Link to="/">หน้าแรก</Link> > ตารางคะแนน
                            </p>
                            <table>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Team</th>
                                        <th>P</th>
                                        <th>W</th>
                                        <th>D</th>
                                        <th>L</th>
                                        <th>F</th>
                                        <th>A</th>
                                        <th>GD</th>
                                        <th>Pts</th>
                                        <th>Last5</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.data.api.standings[0].map((item,index)=>{
                                            return(
                                                <tr key={index}>
                                                    <td>{item.rank}</td>
                                                    <td className="left">
                                                        <img alt="away" src={item.logo} style={{width:'25px'}}/>
                                                    &nbsp;{item.teamName}
                                                    </td>
                                                    <td>{item.all.matchsPlayed}</td>
                                                    <td>{item.all.win}</td>
                                                    <td>{item.all.draw}</td>
                                                    <td>{item.all.lose}</td>
                                                    <td>{item.all.goalsFor}</td>
                                                    <td>{item.all.goalsAgainst}</td>
                                                    <td>{item.goalsDiff}</td>
                                                    <td>{item.points}</td>
                                                    <td>{item.forme}</td>
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

export default Tables;
