import React, { useContext, useEffect, useState } from "react";
import { FaCcVisa, FaCcApplePay } from "react-icons/fa";
import axios from "axios";

//components
import MovieHero from "../components/MovieHero/MovieHero.component";
import Cast from "../components/Cast/cast.component";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";

//context
import { MovieContext } from "../context/movie.context";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import { NextArrow, PrevArrow } from "../components/HeroCarousal/Arrows.componet";

const MoviePage = () => {
    const {movie} = useContext(MovieContext);
    const [cast, setCaste] = useState([]);
    const {id} = useParams();
    const [similarMovies, setSimilarMovies] = useState([]);
    const [recommended, setRecommended] = useState([]);
    
    useEffect(() => {
        const requestCast = async () => {
        const getCast = await axios.get(`/movie/${id}/credits`);
            setCaste(getCast.data.cast);
        }

        requestCast();
    }, [id]);

    useEffect(() => {
        const requestSimilarMovies = async () => {
        const getSimilarMovies = await axios.get(`/movie/${id}/similar`);
        setSimilarMovies(getSimilarMovies.data.results);
        };

        requestSimilarMovies();
    }, [id]);

    useEffect(() => {
        const requestRecommendedMovies = async () => {
        const getRecommendedMovies = await axios.get(
            `/movie/${id}/recommendations`
        );
        setRecommended(getRecommendedMovies.data.results);
        };

        requestRecommendedMovies();
    }, [id]);

    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        InitialSlide: 0,
        responsive: [
        {
            breakpoints: 1024,
            settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            infinite: true,
            },
        },
        {
            breakpoints: 768,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            InitialSlide: 2,
            },
        },
        {
            breakpoints: 640,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            },
        },
        ],
    };

    const settingsCast = {
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 4,
        initialSlide: 0,
        nextArrow: <NextArrow />,
        responsive: [
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 4,
            slidesToScroll: 3,
            infinite: true,
            },
        },
        {
            breakpoint: 768,
            settings: {
            slidesToShow: 4,
            slidesToScroll: 2,
            initialSlide: 2,
            },
        },
        {
            breakpoint: 640,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            },
        },
        ],
    };

    

    return (
        <>
            <MovieHero />
            <div className="my-12 container px-4 lg:ml-20 lg:w-2/3">
                <div className="flex flex-col items-start gap-3">
                    <h2 className="text-gray-800 text-2xl font-bold">About the movie</h2>
                    <p className="text-lg">
                        {movie.overview}
                    </p>
                </div>
                <div className="my-8">
                    <hr />
                </div>
                <div className="my-8">
                    <h2 className="text-gray-800 text-2xl font-bold mb-3">
                        Applicable Offer
                    </h2>

                    <div className="flex items-start gap-2 bg-yellow-100 rounded-lg border-2 border-yellow-400 border-dashed p-3">
                        <div className="flex flex-col items-start">
                            <h3 className="text-gray-700 text-xl font-bold">New User Offer</h3>
                            <p className="text-gray-600">
                                Receive a complimentary movie rental pass valued at 0.0019 ETH when you make a purchase of at least 0.0019 ETH.                                                                                                                            
                            </p>
                        </div>
                    </div>
                <div/>
              </div>

              <div className="my-8">
                <h2 className="text-gray-800 text-2xl font-bold mb-4">Cast & Crew</h2>
                <Slider {...settingsCast}>
                    {cast.map((castdata) => (
                        <Cast
                        image={`https://image.tmdb.org/t/p/original/${castdata.profile_path}`}
                        castName={castdata.original_name}
                        role={castdata.character}
                        />
                    ))}
                </Slider>
              </div>


              <div className="my-8">
                <hr />
              </div>

              <div className="my-8">
                <PosterSlider
                    config={settings}
                    images={similarMovies}
                    title="You might Also like"
                    isDark={false}
                />
              </div>

              <div className="my-8">
                <hr />
              </div>

              <div className="my-8">
                <PosterSlider
                    config={settings}
                    images={recommended}
                    title="Ether Exclusive"
                    isDark={false}
                />
              </div>
            </div> 
        </>
    );
};

export default MoviePage;