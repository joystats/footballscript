import React, {Component} from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
import '../App.css';

class Teams extends Component{
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
                            <Link to="/">หน้าแรก</Link> > ค้นหาการซื้อขายจากทีม
                            </p>
                            <ul className="teamList">
                            {
                                this.state.data.api.standings[0].map((item,index)=>{
                                    return(
                                        <li key={index}>
                                                <img alt="away" src={item.logo} style={{width:'25px'}}/>
                                            &nbsp;
                                            <Link to={`/transfer/${item.team_id}/${item.teamName}`}>{item.teamName}</Link>
                                        </li>
                                    )
                                })
                            }
                            </ul>
                        </>                
                    )
                 }
			</>
		);
	}
}

export default Teams;
