import React,{useEffect} from 'react'
import Footer from '../components/common/Footer'
import GridContent from '../components/common/GridContent'
import Header from '../components/common/Header'
import Search from '../components/common/Search'
import Thumbnail from '../components/common/Thumbnail'
import Imgbackground from '../assets/img/etio.jpeg'
import ImgEVGAlogo from '../assets/img/EVGA-logo.png'
import ImgSearchicon from '../assets/img/searchicon.png'
import { getPlaces } from '../reducks/places/selectors'
import {getCategories} from '../reducks/categories/selectors'
import { fetchPlaces } from '../reducks/places/operations'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCategories } from '../reducks/categories/operations'
import { fetchFromLocalStorage } from '../reducks/favourites/operations'
const Home = () => {
  const dispatch = useDispatch();
  const selector = useSelector(state => state);
  const places = getPlaces(selector);
  useEffect(() => {
    dispatch(fetchPlaces())
  }, []);
  const categories = getCategories(selector)
  console.log(places);
  useEffect(() => {
   dispatch(fetchCategories());
   dispatch(fetchFromLocalStorage());
  }, []);

  // console.log(categories);

  return (
    <>
       <Header img={ImgEVGAlogo}/>
       <section className="section1">   
           <div className="background">
              <img src={Imgbackground} alt="" />
           </div>
           <Search img={ImgSearchicon}/>
           <div className="heading1">
               Popular things to do in Ethiopia
           </div>
          <div className="grid">
          {categories.map((category) => (
                <GridContent key={category.id} category={category} />
              ))}
          </div>
          <div class="heading1">Tourist Attractions Places in Ethiopia</div>
                <div class="gallery">
                    <div class="row">
                    {places.map((place) => (
                <Thumbnail place={place} />
              ))}
                    </div>
                 </div>
        </section>
        <Footer img={ImgEVGAlogo}/>
    </>
  )
}

export default Home;
