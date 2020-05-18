import React from 'react';
import { Component } from "react";
import Player from './choosePlayer';

class Status extends Component {
    handleSetPlayer(e){
        this.props.setPlayer(e)

    }
   
    renderWinner(){
        if(this.props.winner){
           return(
             <h2> WINNER IS {this.props.winner}</h2>
            
           )
        } else {
            return this.props.player ? 
         <h2> Next Player is{this.props.player}</h2> :
         <Player player={(e) =>this.handleSetPlayer(e)}/> 

        }
    }
    render(){
    return(<span>{this.renderWinner()}</span>)
            
     
        
    }
}
export default Status;