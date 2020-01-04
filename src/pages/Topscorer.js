import React, {Component} from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
import '../App.css';

class Topscorer extends Component{
	constructor(props){
		super(props)
		this.state={
            data:null
		}
	}
	componentDidMount(){
        const topscorer = sessionStorage.getItem("footballapi_topscorer")
      
        if(topscorer===null){
            console.log('fetch')
            this.getDataTableInfo()
        }else{
            console.log('get')
            this.setState({
                data:JSON.parse(topscorer)
            })
        }
		
	}
	async getDataTableInfo(){
		const response =await axios.get("https://api-football-v1.p.rapidapi.com/v2/topscorers/2",
			{ 
				headers: {
					"Content-Type":"application/json",
					"x-rapidapi-host":"api-football-v1.p.rapidapi.com",
					"x-rapidapi-key":"e5167789eamsh4381fe939ca9b58p1c4da0jsn59fd19b93f4a"
				}
			}
          )
        
        //console.log(response.data)
        if(response.data){
            this.setState({
                data:response.data
            })
           sessionStorage.setItem("footballapi_topscorer",JSON.stringify(response.data))
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
                            <Link to="/">หน้าแรก</Link> > อันดับดาวซัลโว
                            </p>
                            <table className="topscorer">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Position</th>
                                        <th>Team</th>
                                        <th>Nationality</th>
                                        <th>Goals</th>
                                        <th>Assists</th>
                                        <th>Shots</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.data.api.topscorers.map((item,index)=>{
                                            return(
                                                <tr key={index}>
                                                    <td>{index+1}</td>
                                                    <td className="left">{item.player_name}</td>
                                                    <td>{item.position}</td>
                                                    <td>
                                                        <img alt="home" src={`https://media.api-football.com/teams/${item.team_id}.png`} style={{width:'25px'}}/>
                                                        {item.team_name}
                                                    </td>
                                                    <td>{item.nationality}</td>
                                                    <td>{item.goals.total}</td>
                                                    <td>{item.goals.assists}</td>
                                                    <td>{item.shots.total}</td>
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

export default Topscorer;
