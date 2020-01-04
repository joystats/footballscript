import React, {Component} from 'react';
import axios from 'axios'
import {withRouter} from 'react-router-dom'
import '../App.css';

class Lineup extends Component{
	constructor(props){
		super(props)
		this.state={
            data:null,
            team:null
		}
	}
	componentDidMount(){
        const {id} = this.props.match.params
        const lineup = sessionStorage.getItem("footballapi_lineup_"+id)

        if(lineup===null){
            console.log('fetch')
            this.getLineup(id)
        }else{
            console.log('get')
            this.setState({
                data:JSON.parse(lineup)
            })
        }
		
	}
	async getLineup(id){
		const response =await axios.get("https://api-football-v1.p.rapidapi.com/v2/lineups/"+id,
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
            sessionStorage.setItem("footballapi_lineup_"+id,JSON.stringify(response.data))
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
                            <div className="boxs">
                                <div className="box">
                                    <table className="players">
                                        <thead>
                                            <tr>
                                            {this.fetchLineUpsTeam(0)}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                this.fetchLineUps(0)
                                            }
                                        </tbody>
                                    </table>
                                </div>
                                <div className="box">
                                    <table className="players">
                                        <thead>
                                            <tr>
                                            {this.fetchLineUpsTeam(1)}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                this.fetchLineUps(1)
                                            }
                                        </tbody>
                                    </table>          
                                </div>
                            </div>
                        </>                
                    )
                 }
			</>
		);
    }
    fetchLineUpsTeam(id){
        return(
            <th colSpan="3">{Object.keys(this.state.data.api.lineUps)[id]} ({this.state.data.api.lineUps[Object.keys(this.state.data.api.lineUps)[id]].formation})</th>
        )
    }
    fetchLineUps(id){
        return this.state.data.api.lineUps[Object.keys(this.state.data.api.lineUps)[id]].startXI.map((item,index)=>{
            return (
                <tr key={index}>
                    <td>{item.player}</td>
                    <td>{item.number}</td>
                    <td>{item.pos}</td>
                </tr>
            )
        })
    }
}

export default withRouter(Lineup);
