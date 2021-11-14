import React,{Component} from 'react';
import * as actions from '../services/index'
import  Header from '../components/widgtes/header'
class DetailAlbum extends Component{
    state={
        album:'',
        tracks:[]
    }
    componentDidMount(){
        actions.getAlbum(this.props.match.params.id).then(album=>{
            this.setState({
                album,
                tracks : album.tracks.data
            })
        });
    }
    
    renderTracks =()=>{
        const{tracks}=this.state;
        return tracks && tracks.length ?
             tracks.map((track,index)=>(


            <figure key={index} class="figure" style={{padding:'20px',width:'90vw'}}>

                <figcaption class="figure-caption text-xs-right" style={{fontSize:'20px',color:'#E86060',marginLeft:'30px'}}>{track.title}</figcaption>
                <img src={tracks.cover_small} alt="" className="card-img-top"/>
                
               <audio controls src={track.preview} style={{margin:'20px',width:'65vw',visibility:'inherit'}}>
                 
               </audio>
            </figure>
        ))
        :
        null;
    }
    renderAlbum=()=>{
        const{album}=this.state;
        return  (

            <div  className="col-md-12 mb-3">
                  <div className="card"style={{width:'80%',border:'none',display:'flex'}}>


                   

                    <div className="card-body">
                        <div style={{display:'flex'}}>
                            <div>
                            <img style={{width:'90%'}}src={album.cover_big} alt="" className="card-img-top" />
                            </div>
                            <div style={{display:'block',alignItems:'center', marginTop:'130px',fontFamily:'Quicksand',fontWeight:'300',width:'150px'}}>
                            <h2 className="card-title" style={{width:'25vw',color:'#E86060'}}>
                                 {album.title}
                            </h2>
                            <h4 className="text">
                                {album.release_date}
                            </h4>
                            
                            </div>
                        
                            
                            </div>

                            <div className="card-footer" >
                                {this.renderTracks()}
                            </div>

                    </div>


                      </div>
                      </div>
                      
          )
          
    }
    render(){
        return(
            <div className="container">
          <div class="row ">
            <div className="col-md-10 " style={{display:'flex',border:'none'}}>
            <div >
               <Header/>
               
               </div>
                <div className="row">
                
                  {this.renderAlbum()}
              </div>
              </div>
              </div>
            </div>
          
        )
    }
    }

export default DetailAlbum