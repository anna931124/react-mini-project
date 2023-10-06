import React ,{useEffect}  from 'react';
import api from '../api'
import { movieReducerActions } from '../redux/reducers/movieSlice';
import { useDispatch } from 'react-redux';
import Banner from '../components/Banner';
import { useSelector } from 'react-redux';
import MovieSlide from '../components/MovieSlide';
import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";


const Home = () => {
  const dispatch = useDispatch()
  // const popularMovies = useSelector(state => state.movie.popularMovies)
  // const topratedMovies = useSelector(state=>state.movie.topratedMovies)
  // const upcomingMovies = useSelector(state=>state.movie.upcomingMovies)
  const {popularMovies,topratedMovies,upcomingMovies,genreList} = useSelector((state)=>state.movie)
  

  

 //스피너
 let [loading, setLoading] = useState(true);
 


  
 

  
  // const popularReq = async()=>{
  //   let res = await api.get('/movie/popular?language=ko-KR&page=1')
  // console.log(res.data.results)
  // }
  // const topRateReq = async()=>{
  //   let res = await api.get('/movie/top_rated?language=ko-KR&page=1')
  // console.log(res.data.results)
  // }
  // const upcomingReq = async()=>{
  //   let res = await api.get('/movie/upcoming?language=ko-KR&page=1')
  // console.log(res.data.results)
  // }

  // 3가지 종류의 영화목록을 묶어서 요청하는 방법
  // -promise.all() : 모든 요청에 대한 응답이 올 때까지 대기
  const getMovieList = async()=>{

    setLoading(true)//데이터 가져오기 전
    const popularList = api.get('/movie/popular?language=ko-KR&page=1')
    const topRateList = api.get('/movie/top_rated?language=ko-KR&page=1')
    const upcomingList = api.get('/movie/upcoming?language=ko-KR&page=1')
    const genreList = api.get('/genre/movie/list?language=ko')

    const [popular,toprated,upcoming,genre]= await Promise.all([popularList,topRateList,upcomingList,genreList])
    console.log(popular.data)
    console.log(toprated.data)
    console.log(upcoming.data)

    dispatch(movieReducerActions.initData({popular:popular.data, toprated: toprated.data, upcoming: upcoming.data ,genre :genre.data.genres}))
    setLoading(false)

    
  }

  useEffect(()=>{
    // popularReq()
    // topRateReq()
    // upcomingReq()
    getMovieList()

  },[])
  return (

    <div>
      {loading? 
      
      <ClipLoader
      color={'#ffffff'}
      loading={loading}
    
      size={150}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
    
    :
    <div className='homeSlide'> 
      <Banner movie = {popularMovies[0]}/>
      <h2 className="movieSlide">인기있는 영화</h2>
      <MovieSlide movies={popularMovies} genres={genreList}/>
      <h2 className="movieSlide">평점이 높은 영화</h2>
      <MovieSlide movies={topratedMovies } genres={genreList}/>
      <h2 className="movieSlide">개봉 예정인 영화</h2>
      <MovieSlide movies={upcomingMovies} genres={genreList}/>
    </div>
    }    
    </div>
    
  )
}

export default Home