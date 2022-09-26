import React from "react";
import DetailMovieLayout from "../layout/detailMovie";

const DetailScreen = ({route}) => {
    const { id } = route.params
    console.log(id, 'cek isi nya eiii, screen')
    return (
        <DetailMovieLayout id = {id}/>
    )
}

export default DetailScreen