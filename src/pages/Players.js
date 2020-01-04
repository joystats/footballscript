import React, {Component} from 'react';
import axios from 'axios'
import {withRouter} from 'react-router-dom'
import '../App.css';

class Players extends Component{
	constructor(props){
		super(props)
		this.state={
            data:null,
            team:null
		}
	}
	componentDidMount(){
        const {id} = this.props.match.params

        const players = sessionStorage.getItem("footballapi_players_"+id)
        console.log(players)
        if(players===null){
            console.log('fetch')
            this.getPlayer(id)
        }else{
            console.log('get')
            this.setState({
                data:JSON.parse(players)
            })
        }
		
	}
	async getPlayer(id){
		const response =await axios.get("https://api-football-v1.p.rapidapi.com/v2/players/squad/"+id+"/2019-2020",
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
            sessionStorage.setItem("footballapi_players_"+id,JSON.stringify(response.data))
        }
    }
    handleClick() {
        this.props.history.goBack()
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
                            <button onClick={()=>this.handleClick()}> &larr; ย้อนกลับ</button>
                            </p>
                            <h4>รายชื่อนักเตะทีม&nbsp;
                                <img alt="home" src={`https://media.api-football.com/teams/${this.props.match.params.id}.png`} style={{width:'25px'}}/>
                                &nbsp;{this.props.match.params.team}</h4>
                            <table className="players">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Position</th>
                                        <th>Age</th>
                                        <th>Birth date</th>
                                        <th>Height</th>
                                        <th>Weight</th>
                                        <th>Nationality</th>
                                    </tr>
                                </thead>
                                <tbody>
                            {
                                this.state.data.api.players.map((item,index)=>{
                                    return(
                                        <tr key={index}>
                                            <td rel={item.player_id}>{index+1}</td>
                                            <td>{item.player_name}</td>
                                            <td>{item.position}</td>
                                            <td>{item.age}</td>
                                            <td>{item.birth_date}</td>
                                            <td>{item.height}</td>
                                            <td>{item.weight}</td>
                                            <td>{item.nationality}</td>
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

export default withRouter(Players);
