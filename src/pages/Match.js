import React, {Component} from 'react';
import axios from 'axios'
import {withRouter} from 'react-router-dom'
import '../App.css';

class Match extends Component{
	constructor(props){
		super(props)
		this.state={
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
                
                'Yellow Cards',
                'Red Cards',
                'Goalkeeper Saves',
                'Total passes',
                'Passes accurate',
                'Ball Possession',
                /*'Passes %'*/
            ]
		}
	}
	componentDidMount(){
        const {id} = this.props.match.params
        const info = sessionStorage.getItem("footballapi_info_"+id)

        if(info===null){
            console.log('fetch')
            this.getDataMatchInfo(id)
        }else{
            console.log('get')
            this.setState({
                data:JSON.parse(info)
            })
        }
		
	}
	async getDataMatchInfo(id){

        Promise.all([
            axios.get("https://api-football-v1.p.rapidapi.com/v2/statistics/fixture/"+id,
			{ 
				headers: {
					"Content-Type":"application/json",
					"x-rapidapi-host":"api-football-v1.p.rapidapi.com",
					"x-rapidapi-key":"e5167789eamsh4381fe939ca9b58p1c4da0jsn59fd19b93f4a"
				}
			}
          ),
          axios.get("https://api-football-v1.p.rapidapi.com/v2//fixtures/id/"+id,
			{ 
				headers: {
					"Content-Type":"application/json",
					"x-rapidapi-host":"api-football-v1.p.rapidapi.com",
					"x-rapidapi-key":"e5167789eamsh4381fe939ca9b58p1c4da0jsn59fd19b93f4a"
				}
			}
          )
        ]).then((datas)=>{
           datas[0].data.api.homeTeam=datas[1].data.api.fixtures[0].homeTeam
           datas[0].data.api.awayTeam=datas[1].data.api.fixtures[0].awayTeam
            this.setState({
                data:datas[0].data
            })
            sessionStorage.setItem("footballapi_info_"+id,JSON.stringify(datas[0].data))
        })
        
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
                            <table>
                                <thead>
                                    <tr>
                                        <th className="text-center">
                                            <img alt="home" src={this.state.data.api.homeTeam.logo} style={{width:'25px'}}/>
                                            &nbsp;{this.state.data.api.homeTeam.team_name}
                                        </th>
                                        <th>VS</th>
                                        <th className="text-center">
                                            <img alt="home" src={this.state.data.api.awayTeam.logo} style={{width:'25px'}}/>
                                            &nbsp;{this.state.data.api.awayTeam.team_name}
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.key.map((item,index)=>{
                                            return(
                                                <tr key={index}>
                                                
                                                    <td className="text-center">
                                                        {
                                                            this.state.data.api.statistics[item].home!=null?
                                                            this.state.data.api.statistics[item].home:0
                                                        }
                                                    </td>
                                                    <td className="text-center">
                                                    {item}
                                                    </td>
                                                    <td className="text-center">
                                                    {
                                                        this.state.data.api.statistics[item].away!=null?
                                                        this.state.data.api.statistics[item].away : 0
                                                    }
                                                    </td>
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

export default withRouter(Match);
