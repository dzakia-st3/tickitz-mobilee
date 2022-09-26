import React from "react";
import Layout from '../layout'
import { Seat, Order } from "../../components/order";
import { ScrollView } from "react-native";

const OrderMovieLayout = () => {
    return (
        <Layout>
            <ScrollView>
                <Seat/>
                <Order/>
            </ScrollView>
        </Layout>
    )
}

export default OrderMovieLayout