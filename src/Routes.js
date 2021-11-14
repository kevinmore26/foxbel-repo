
import{Route} from 'react-router-dom'

import PortadaView from './views/PortadaView'

import DetailsAlbum from './components/detailsAlbum'

import DetailSong from './views/detailsSong'
import FavoritesAlbums from './components/favoritesAlbums'

export default function Routes ()
{return(
    <div>
       <Route path="/" exact component={PortadaView} />
       
       
       <Route path="/details/:id" exact component={DetailsAlbum} />
       <Route path="/track/:id" exact component={DetailSong} />
       <Route path="/favorites" exact component={FavoritesAlbums} />

      
    
    </div>
    )


  
}