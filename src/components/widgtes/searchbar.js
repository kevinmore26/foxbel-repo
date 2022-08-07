import React,{Component} from 'react'
import {  Nav } from "react-bootstrap";
import "../../index.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser}from '@fortawesome/free-solid-svg-icons'

class Search extends Component{
    state={
        term:''
    }
    handleInputChange=(event)=>{
        this.setState({term:event.target.value})
    }
    submitSearch=(event)=>{
        event.preventDefault();
        let{term}=this.state;
        this.props.searchAlbums(term)
        console.log(term)
    }
    render(){
        return(
            <div className="search mb-2" style={{marginTop:'120px',display:'flex',justifyContent:'center'}}>
                <form onSubmit={(event)=> this.submitSearch(event)}>
                    <div className="row" style={{marginTop:'100px',display:'flex'}}>
                        
                        <div className="col-md-10" >
                            <div className="form-group"  >
                                <input type="text" placeHolder="Buscar" className="form-control p-4"
                                value={this.state.term} style={{position:' absolute',
                                    
                                    right: '270px',
                                top: '20px',
                                    bottom: '0%',
                                   
                                    background: '#FFFFFF',
                                    /* Gray */
                                    
                                    border: '1px solid #828282',
                                    boxSizing: 'border-box',
                                    borderRadius: '100px',width:'524px',height:'25px',margin:'0 auto',left:'100px'}}
                                onChange={(event)=>this.handleInputChange(event)}></input>

                            </div>
                            
                        </div>
                        
                        <div className="col-md-2">
                            <div className="form-group">
                                <button type="submit"className="btn btn-danger" style={{
                                    position: 'absolute',
                                    
                                    right:' 515px',
                                   
                                    bottom: '370px',
                                    backgroundColor:'white',
                                    border:'none',
                                    margin:'0 auto',
                                    top: '27px',
                                    fontFamily: 'Font Awesome 5 Free',
                                    fontStyle: 'normal',
                                    fontWeight: '900',
                                    fontSize: '18px',
                                    lineHeight: '21px',
                                    height:'18px',
                                    /* Soft gray */
                                    color: '#BDBDBD',
                                }}>
                                    <i className="fas fa-search"></i>
                                    <div style={{position:'relative',left:'500px',bottom:'20px'}}><div ><FontAwesomeIcon style={{color:'black'}}icon={faUser} /></div><p style={{color:'black',fontWeight:'200'}}>Kevin More</p></div>

                                </button>

                                
                            </div>
                        </div>
                    </div>
                    
                </form>
                <div style={{display:'flex',borderRadius:'20px',position:'relative',right:'18px'}}>
                        <div >
                                    <img style={{width:'219px',height: '220px',borderRadius:'5px'}} src="https://i.imgur.com/t2yjzhV.jpg" alt="."></img>
                                    <img style={{width: '780px',height: '220px',borderRadius:'0',position:'absolute'}} src=" https://i.imgur.com/nt0of25.jpg" alt="."></img>
                        </div>
                        
                </div>
                <div style={{display:'block',position:'relative',color:'#FFFFFF',backgroundColor:'rgb(255 138 138 / 75%)',right:'20px'}} className="adeleback">
                                    <div style={{fontSize:'10px'}}>
                                        <h3 style={{fontSize:'22px',opacity:'100%',marginTop:'20px',marginLeft:'30px'}}>Adele 21</h3>
                                        <h6 style={{fontSize:'14px',marginLeft:'30px',display:'flex',fontWeight:'200'}}>Lo mejor de Adele <p style={{marginLeft:'10px',color:'#662323',fontWeight:'200'}}>   321,873 seguidores</p></h6>
                                        <h5 style={{fontSize:'12px',marginLeft:'30px',fontWeight:'300',lineHeight:'20px'}}>Adele Laurie Blue Adkins (Tottenham, Londres, Inglaterra, 5 de mayo de 1988), conocida simplemente como Adele, es una cantante, compositora y multinstrumentista británica.8​</h5>
                                    </div>
                                    <div style={{display:'flex',justifyContent:'left',margin:'20px'}}>   
                        <Nav defaultActiveKey="/home" className="flex-column" >
                                    <Nav.Link href="/details/192713382" style={{color:'#FFFFFF',textAlign:'center',width:'130px', backgroundColor:'#E86060',borderRadius:'10px',border:'1px solid #E86060'}}>Reproducir</Nav.Link>
                        </Nav>
                        <Nav.Link href="/favorites"style={{color:'rgb(255 141 141)',marginLeft:'20px',textAlign:'center',width:'130px',opacity:'100%',backgroundColor:'transparent',borderRadius:'10px',border:'1px solid #E86060'}}>Seguir</Nav.Link>
                                    </div>
                          
                        </div>
            </div>
            
        )
    }
}

export default Search