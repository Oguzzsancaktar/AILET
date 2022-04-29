import React, { useContext, useEffect, useState } from 'react'
import { Button, Image, StyleSheet, View } from 'react-native'
import { AuthContext } from '../context/AuthContext'
import { AxiosContext } from '../context/AxiosContext'
import Spinner from './Spinner'
import * as Keychain from 'react-native-keychain'

import jwtDecode from 'jwt-decode'

const Dashboard = () => {
  const { authAxios } = useContext(AxiosContext)

  const [status, setStatus] = useState('idle')

  const [userId, setUserId] = useState<string>('')

  console.log('response from dashboard')

  useEffect(() => {
    const loadUser = async () => {
      const value = await Keychain.getGenericPassword()
      if (value) {
        const decodedAccessToken: any = await jwtDecode(JSON.parse(value.password).accessToken)
        const { userId } = decodedAccessToken

        const response = await authAxios.get(`/auth/${userId}`)
        console.log('userFromId', response)
        setUserId(userId)
      }
    }
    loadUser()
  }, [userId])

  if (status === 'loading') {
    return <Spinner />
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttonGroup}>
        <Button title="Logout" onPress={() => authContext.logout()} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  image: {
    width: '90%',
    height: '50%',
    resizeMode: 'contain'
  },
  buttonGroup: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%'
  }
})
export default Dashboard
