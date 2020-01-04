import React, {Component} from 'react';
import axios from 'axios'
import {withRouter} from 'react-router-dom'
import '../App.css';

class H2h extends Component{
	constructor(props){
		super(props)
		this.state={
            data:null
		}
	}
	componentDidMount(){
        const {id,id2} = this.props.match.params
        const h2h = sessionStorage.getItem("footballapi_h2h_"+id+"_"+id2)

        if(h2h===null){
            console.log('fetch')
            this.getDataH2hInfo(id,id2)
        }else{
            console.log('get')
            this.setState({
                data:JSON.parse(h2h)
            })
        }
		
	}
	async getDataH2hInfo(id,id2){
		const response =await axios.get("https://api-football-v1.p.rapidapi.com/v2/fixtures/h2h/"+id+"/"+id2,
			{ 
				headers: {
					"Content-Type":"application/json",
					"x-rapidapi-host":"api-football-v1.p.rapidapi.com",
					"x-rapidapi-key":"e5167789eamsh4381fe939ca9b58p1c4da0jsn59fd19b93f4a"
				}
			}
          )
       // console.log(response.data)
        if(response.data){
            this.setState({
                data:response.data
            })
            sessionStorage.setItem("footballapi_h2h_"+id+"_"+id2,JSON.stringify(response.data))
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
                        <div>
                            <p className="bread">
                            <button onClick={()=>this.handleClick()}> &larr; ย้อนกลับ</button>
                            </p>
                            <table>
                                <thead>
                                    <tr>
                                        <th className="text-center">
                                        <img alt="home" src={this.state.data.api.teams[0].team_logo} style={{width:'25px'}}/>&nbsp;
                                        {this.state.data.api.teams[0].team_name}</th>
                                        <th className="text-center">
                                        <img alt="home" src={this.state.data.api.teams[1].team_logo} style={{width:'25px'}}/>&nbsp;
                                        {this.state.data.api.teams[1].team_name}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <table>
                                               <thead>
                                                <tr>
                                                        <th>&nbsp;</th>
                                                        <th>W</th>
                                                        <th>D</th>
                                                        <th>L</th>
                                                        <th>Total</th>
                                                    </tr>
                                               </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Home</td>
                                                        <td>{this.state.data.api.teams[0].statistics.wins.home}</td>
                                                        <td>{this.state.data.api.teams[0].statistics.draws.home}</td>
                                                        <td>{this.state.data.api.teams[0].statistics.loses.home}</td>
                                                        <td>{this.state.data.api.teams[0].statistics.played.home}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Away</td>
                                                        <td>{this.state.data.api.teams[0].statistics.wins.away}</td>
                                                        <td>{this.state.data.api.teams[0].statistics.draws.away}</td>
                                                        <td>{this.state.data.api.teams[0].statistics.loses.away}</td>
                                                        <td>{this.state.data.api.teams[0].statistics.played.away}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Total</td>
                                                        <td>{this.state.data.api.teams[0].statistics.wins.total}</td>
                                                        <td>{this.state.data.api.teams[0].statistics.draws.total}</td>
                                                        <td>{this.state.data.api.teams[0].statistics.loses.total}</td>
                                                        <td>{this.state.data.api.teams[0].statistics.played.total}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                        <td>
                                            <table>
                                               <thead>
                                                <tr>
                                                        <th>&nbsp;</th>
                                                        <th>W</th>
                                                        <th>D</th>
                                                        <th>L</th>
                                                        <th>Total</th>
                                                    </tr>
                                               </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Home</td>
                                                        <td>{this.state.data.api.teams[1].statistics.wins.home}</td>
                                                        <td>{this.state.data.api.teams[1].statistics.draws.home}</td>
                                                        <td>{this.state.data.api.teams[1].statistics.loses.home}</td>
                                                        <td>{this.state.data.api.teams[1].statistics.played.home}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Away</td>
                                                        <td>{this.state.data.api.teams[1].statistics.wins.away}</td>
                                                        <td>{this.state.data.api.teams[1].statistics.draws.away}</td>
                                                        <td>{this.state.data.api.teams[1].statistics.loses.away}</td>
                                                        <td>{this.state.data.api.teams[1].statistics.played.away}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Total</td>
                                                        <td>{this.state.data.api.teams[1].statistics.wins.total}</td>
                                                        <td>{this.state.data.api.teams[1].statistics.draws.total}</td>
                                                        <td>{this.state.data.api.teams[1].statistics.loses.total}</td>
                                                        <td>{this.state.data.api.teams[1].statistics.played.total}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table className="marginTop">
                                <thead>
                                    <tr>
                                        <th colSpan="3" className="text-center">สถิติการพบกัน</th>
                                    </tr>
                                </thead>
                                <tbody>
                                   {
                                       this.state.data.api.fixtures.map((item,index)=>{
                                        return (
                                            <tr key={index}>
                                                <td className="text-center">
                                                <img alt="home" src={item.homeTeam.logo} style={{width:'25px'}}/>&nbsp; 
                                                {item.homeTeam.team_name}</td>
                                                <td className="text-center">
                                                    {
                                                        item.status==="Match Finished"?item.score.fulltime:'เลื่อนการแข่งขัน'
                                                    }
                                                </td>
                                                <td className="text-center">
                                                <img alt="home" src={item.awayTeam.logo} style={{width:'25px'}}/>&nbsp;
                                                {item.awayTeam.team_name}</td>
                                            </tr>
                                        )
                                       })
                                   }
                                </tbody>
                            </table>
                        </div>

                    )
                 }
			</>
		);
	}
}

export default withRouter(H2h);
