import React from 'react'
import Imgdislike from '../../assets/img/dislike.png'
import Favourites from '../../containers/Favourites'

import { useDispatch } from 'react-redux'
import { deleteFavourite } from '../../reducks/favourites/operations'

const FavCard = ({favourite}) => {
    const dispatch = useDispatch()
    return (
        <div class="gridcontent row">
                
        <div class="image">
           <img class="mainimage" src={favourite.image} alt="" />
           <div class="like">
              <img src={Imgdislike} onClick={() => dispatch(deleteFavourite(favourite.id))}
 alt="" />
        </div>
          </div>
           <div class="textcontent">
         <div class="gridheading">
              <h1>{favourite.name}</h1>
        </div>
        <div class="gridsubheading"> 
            <h2>{favourite.place_type}</h2>
        </div>
         <div class="gridtext">
         <p>{favourite.time_to_travel}</p>
              <p>
                {favourite.description}
             </p>
        </div>
         <div class="input-button">
            <a class="direction" href={favourite.googel_map_link}>Directions</a>
         </div>
      </div>
      </div>
    )
}

export default FavCard
