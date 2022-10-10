import React from "react";
import DetailMovieLayout from "../layout/detailMovie";

const DetailScreen = ({route}) => {
    const { id } = route.params
    return (
        <DetailMovieLayout id = {id}/>
    )
}

export default DetailScreen