import React,{useState, useEffect} from 'react'
import Imglike from "../../assets/img/Like_button.svg"
import { useDispatch, useSelector } from 'react-redux'
import { addFavourite } from '../../reducks/favourites/operations'
import { getFavourites } from '../../reducks/favourites/selectors'

const Thumbnail = ({place}) => {
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
        <div class="thumbnail">
        {showLikeButton && (<div class="like">
        <img src={Imglike} onClick={() =>{clickFavourite(place)} } alt="" />
        </div>)}
        <img src={place.image} alt="" />
        <p class="thumbheading">{place.name}</p>
        <p class="thumbtext">
           {place.description}
        </p>
    </div>     
    )
}

export default Thumbnail
