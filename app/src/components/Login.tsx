import { View, Text, StyleSheet, SafeAreaView, TextInput, Button, Alert } from 'react-native'
import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import * as Keychain from 'react-native-keychain'
import { AxiosContext } from '../context/AxiosContext'

const Login = () => {
  const [email, setEmail] = useState('info@oguzsancaktar.com')
  const [password, setPassword] = useState('123456')

  const authContext = useContext(AuthContext)
  const { publicAxios } = useContext(AxiosContext)

  const onLogin = async () => {
    try {
      const response = await publicAxios.post('/auth', {
        email,
        password
      })

      console.log('=====>', response)

      const { accessToken, refreshToken } = response.data
      authContext.setAuthState({
        accessToken,
        refreshToken,
        authenticated: true
      })

      await Keychain.setGenericPassword(
        'token',
        JSON.stringify({
          accessToken,
          refreshToken
        })
      )
    } catch (error) {
      Alert.alert('Login Failed', error.response.data.message)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.logo}>Cast</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#fefefe"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={text => setEmail(text)}
          value={email}
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#fefefe"
          secureTextEntry
          onChangeText={text => setPassword(text)}
          value={password}
        />
      </View>
      <Button title="Login" style={styles.button} onPress={() => onLogin()} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%'
  },
  logo: {
    fontSize: 60,
    color: '#fff',
    margin: '20%'
  },
  form: {
    width: '80%',
    margin: '10%'
  },
  input: {
    fontSize: 20,
    color: 'yellow',
    paddingBottom: 10,
    borderBottomColor: '#fff',
    borderBottomWidth: 1,
    marginVertical: 20
  },
  button: {}
})

export default Login
