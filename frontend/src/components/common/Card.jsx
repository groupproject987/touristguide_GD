import React, {useEffect, useState } from 'react'
import { addFavourite } from '../../reducks/favourites/operations'
import { getFavourites } from '../../reducks/favourites/selectors'
import { useSelector, useDispatch } from 'react-redux'
import Imglike from '../../assets/img/Like_button.svg'
import Places from '../../containers/Places'

const Card = ({place}) => {
    const dispatch = useDispatch();
    const clickFavourite = (place) => {
      dispatch(addFavourite(place));
    };
    const selector = useSelector((state) => state);
    const favourites = getFavourites(selector);
    const [showLikeButton, setShowLikeButton] = useState(true);
    useEffect(() => {
      let favoritePlace = favourites.filter(
        (favourite) => favourite.id == place.id
      );
      if (favoritePlace.length > 0) {
        setShowLikeButton(false);
      }
    }, [favourites]);

    return (
        <>
           <div class="gridcontent row">
                
                <div class="image">
                <img class="mainimage" src={place.image} alt="" />
                <div class="like">
                      <img src={Imglike} onClick={() => {clickFavourite(place)}} alt="" />
                </div>
                   
                  </div>
                   <div class="textcontent">
                 <div class="gridheading">
                      <h1>{place.name}</h1>
                </div>
                <div class="gridsubheading"> 
                    <h2>{place.place_type}</h2>
                </div>
                  <div class="gridtext">
                    <p>{place.time_to_travel}</p>

                      <p>
                      {place.description}
                     </p>
                 </div>
                  <div class="input-button">
                     <a href={place.googel_map_link} target="_blank"> Directions </a>
                  </div>
              </div>
              </div>  
        </>
    )
}

export default Card
