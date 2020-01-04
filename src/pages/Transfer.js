import React, {Component} from 'react';
import axios from 'axios'
import {withRouter} from 'react-router-dom'
import '../App.css';

class Transfer extends Component{
	constructor(props){
		super(props)
		this.state={
            data:null,
            team:null
		}
	}
	componentDidMount(){
        const {id} = this.props.match.params
        
       //this.getTransfer(id)
        const transfer = sessionStorage.getItem("footballapi_transfer_"+id)
       if(transfer===null){
            console.log('fetch')
            this.getTransfer(id)
        }else{
            console.log('get')
            this.setState({
                data:JSON.parse(transfer)
            })
        }
		
	}
	async getTransfer(id){
		const response =await axios.get("https://api-football-v1.p.rapidapi.com/v2/transfers/team/"+id,
			{ 
				headers: {
					"Content-Type":"application/json",
					"x-rapidapi-host":"api-football-v1.p.rapidapi.com",
					"x-rapidapi-key":"e5167789eamsh4381fe939ca9b58p1c4da0jsn59fd19b93f4a"
				}
			}
          )
         
        
        if(response.data.api.results>0){
            var newData=response.data.api.transfers.sort((a, b)=>{
                const bandA = a.transfer_date
                const bandB = b.transfer_date
                let comparison = 0;
                if (bandA > bandB) {
                    comparison = 1;
                } else if (bandA < bandB) {
                    comparison = -1;
                }
                return comparison;
            })
            this.setState({
                data:newData
            })
            sessionStorage.setItem("footballapi_transfer_"+id,JSON.stringify(newData))
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
                            <h4>การซื้อขายนักเตะทีม&nbsp;
                                <img alt="home" src={`https://media.api-football.com/teams/${this.props.match.params.id}.png`} style={{width:'25px'}}/>
                                &nbsp;{this.props.match.params.team}</h4>
                            <table className="players">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Date</th>
                                        <th>From</th>
                                        <th>To</th>
                                        <th>Type</th>
                                    </tr>
                                </thead>
                                <tbody>
                            {
                                
                                 this.state.data.map((item,index)=>{
                                    return(
                                        <tr key={index}>
                                            <td>{index+1}</td>
                                            <td>{item.player_name}</td>
                                            <td>{item.transfer_date}</td>
                                            <td className="left">
                                                {
                                                    item.team_out.team_id &&
                                                    <img alt="home" src={`https://media.api-football.com/teams/${item.team_out.team_id}.png`} style={{width:'25px'}}/>
                                                }
                                                &nbsp;{item.team_out.team_name}</td>
                                            <td className="left">
                                               {
                                                   item.team_in.team_id &&
                                                    <img alt="home" src={`https://media.api-football.com/teams/${item.team_in.team_id}.png`} style={{width:'25px'}}/>
                                               }
                                               &nbsp;{item.team_in.team_name}</td>
                                            <td>{item.type}</td>
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

export default withRouter(Transfer);
