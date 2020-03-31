import React from 'react';
import './App.css';
import Profil from './Profil';


export class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      personne:[
          {
            name:'Cinderella',
            photo:'https://aws.vdkimg.com/film/1/1/2/0/112056_backdrop_scale_1280xauto.jpg', 
            description:'Cendrillon, un film de 1950'
          },
          {
            name:'Frozen', 
            photo:'https://i.pinimg.com/originals/13/57/1e/13571ec7b18bd8f2097ba5bd0f91ed4b.jpg', 
            description:'La reine des neiges: Elsa'
          },
          {
            name:'Jasmine', 
            photo:'https://i.pinimg.com/originals/a9/1e/a8/a91ea83a8266ed86fa769d928bf95ca7.jpg', 
            description:'Aladdin film 1992'
          }
        ],

        clickedPersonne:{
          name:'choose',
          photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTVqEtESoJNCxvC64KVZRTDnrLTm5wTeL6piW1CoHLNXt_o_sGS&usqp=CAU',
          description:'...'
        }
      
      }

  
  }

  render(){
  return (
    <div className="App">
      <h1> Hello </h1>
        {
          this.state.personne.map(el => <button onClick={()=> this.setState({clickedPersonne : el})}> {el.name} </button>)
        }
       <div>
         <Profil per={this.state.clickedPersonne}/>
       </div>
    </div>
  )
}
}

export default App;
