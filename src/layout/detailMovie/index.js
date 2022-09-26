import React from "react";
import Layout from '../layout'
import { DetailMovie, Schedule } from "../../components/detail";
import { ScrollView } from "react-native";

const DetailMovieLayout = ({id}) => {
    console.log(id, 'cek isi nya eiii, layout')
    return (
        <Layout>
            <ScrollView>
            <DetailMovie id = {id}/>
            <Schedule id = {id}/>
            </ScrollView>
        </Layout>
    )
}

export default DetailMovieLayout