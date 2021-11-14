import React,{Component} from 'react';
import * as actions from '../services/index'
import  Header from '../components/widgtes/header'
import "../index.css"
class DetailSong extends Component  {
    state={
        album:'',
        tracks:[],
        preview:''
    }
    componentDidMount(){
        actions.getSong(this.props.match.params.id).then(album=>{
            this.setState({
                album,
                track:album,
               cover:album,
                tracks : album
            })
        });
    }
    
    renderTracks =()=>{
        const{tracks}=this.state;
        return tracks && tracks.length ?
             tracks.map((track,index)=>(


            <figure key={index} class="figure" style={{padding:'20px'}}>

                <figcaption class="figure-caption text-xs-right">{track.title}</figcaption>
                <img src={tracks.cover_small} alt="" className="card-img-top"/>
               <audio controls src={[track].preview} style={{margin:'20px',height:'100px'}}>
                   Preview
                   <code>audio</code> 
               </audio>
               
            </figure>
        ))
        :
        null;
    }
    renderAlbum=()=>{
        const{album}=this.state;
        console.log(album.preview)
        console.log(album.title)
        console.log(album)
       
        return  (
                
            <div  className="col-md-12 mb-3">
                  <div className="card" style={{border:'none',marginTop:'200px'}}>
                      <img src={album.cover_big} alt="" className="card-img-top"/>
                      <div className="card-body" style={{fontFamily:'Quicksand',fontWeight:'600'}}>
                      <div className="card" style={{color:'#E86060'}}>
                              {album.title}
                                </div>
                      <span className="text">{album.release_date}</span>
                             
                                <figcaption class="figure-caption text-xs-right">{album.title}</figcaption>
                <div><img src={album.cover_small} alt="" className="card-img-top"/></div>
               <audio controls src={album.preview} style={{margin:'0 auto',width:'70vw'}} className="audiomp3">
                   
                   <code>audio</code> 
               </audio>
                       <div className="card-footer">
                           {this.renderTracks()}
                       </div>
                        </div>
                      </div>
                      </div>
                      
          )
          
    }
    render(){
        return(
        <div className="container" style={{width:'100vw'}}>
            <div class="row mt-4">
           
                    <div  style={{display:'flex',width:'100vw',justifyContent:'space-between'}}>
                        
               
                                         <div style={{height:'120%',marginBottom:'50px',position:'relative',bottom:'30px'}}>
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

export default DetailSong