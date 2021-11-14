import React,{Component} from 'react'
import  Header from '../components/widgtes/header'
import * as actions from '../services/index';
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faInfoCircle}from '@fortawesome/free-solid-svg-icons'
import '../home.css'

class FavoritesAlbums extends Component{

      state={
        albums:[]
      }
      componentDidMount(){
          let favorites=actions.getFavoritesAlbums();
          this.setState({
              albums:JSON.parse(favorites)
          })
      }
     
        renderAlbums=()=>{
          const {albums}=this.state
          return albums && albums.length ? 
            albums.map((item,index)=>(
          <div key={index} className="col-md-4 mb-3">
          <div className="card border-danger" style={{border:'none',display:'flex'}}>
            <div >
                  
                     
                
                      <div className="card-body" >
                      <img src={item.album.cover_big} alt="" className="card-img-top"/>
                        <div className="text">
                          {item.artist.name}
                        </div>
                  
                        <div className="card-title">
                          {item.title_short}
                        </div>

                      </div>

                <div className="card-footer"style={{width:'10px',zIndex:'1',height:'0.1px',border:'none',backgroundColor:'transparent'}}>
                  <div className="links">
                  <Link to={`/details/${item.album.id}`} className="link"style={{backgroundColor:'transparent'}}><FontAwesomeIcon className="info" icon={faInfoCircle} style={{backgroundColor:'transparent',color:'white',border:'none',position:'relative',bottom:'150px',left:'10px'}}/></Link>
                   
                  </div>
                </div>
                </div>
                </div>
              </div>
              
        ))
        : null
        }
      render(){ 
        console.log(this.setState)
      return (
        <div className="container">
        <div class="row ">
          <div className="col-md-10 " style={{display:'flex',border:'none'}}>
          <div>
             <Header/>
            
             
             </div><div style={{display:'block',marginTop:'20px',marginLeft:'20px'}}>
             <h2 style={{fontFamily:'Quicksand',fontWeight:'300',}}><img src="https://i.imgur.com/4l0ElHk.png" alt="." style={{width:'40%'}}></img>Canciones que te gustan</h2>
              <div className="row">
                
                {this.renderAlbums()}
            </div>
            </div>
            </div>
            </div>
          </div>
          
          

          )}}

      export default FavoritesAlbums