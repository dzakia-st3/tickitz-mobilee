import React from 'react'
import Layout from '../layout'
import PaymentMethod from '../../components/payment/paymentMethod'
import PersonalInfo from '../../components/payment/personalInfo'
import { ScrollView } from 'react-native'

const PaymentLayout = () => {
  return (
    <Layout>
      <ScrollView>
        <PaymentMethod />
        <PersonalInfo />
      </ScrollView>
    </Layout>
  )
}

export default PaymentLayout