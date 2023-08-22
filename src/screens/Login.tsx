import { StyleSheet, Image, View ,Text,KeyboardAvoidingView,TextInput, Pressable, Alert} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon2 from 'react-native-vector-icons/FontAwesome'
import Toast  from 'react-native-toast-message'

const Login = (props: any) => {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('')

 
  const handleLogin = ()=>{
    try {
        const name = 'Light'
        const pass = 'Light'
        if(email === name && password === pass )
        {
            Toast.show({
                type: 'success',
                text1: 'Login Success',
                text2: 'Login Success'
              });
            setTimeout(() => {
                props.navigation.navigate('Home')
            }, 1000);
        }
        else{
            Toast.show({
                type: 'error',
                text1: 'Login Failed',
                text2: 'Invalid credentials'
              });
        }
    } catch (error:any) {
        Toast.show({
            type: 'error',
            text1: 'Login Failed',
            text2: error.message
          });
    }
  }
  

  return (
    <SafeAreaView style={{flex:1,alignItems:'center',marginTop:50}}>
      
      <KeyboardAvoidingView>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontSize: 17,
              fontWeight: "bold",
              marginTop: 12,
              color: "#041E42",
            }}
          >
            Login In to your Account
          </Text>
        </View>

        <View style={{marginTop:70,flexDirection:'row',alignItems:'center',gap:5,backgroundColor:'#d0d0d0',paddingVertical:5,height:50,borderRadius:5}}>
          <Icon2 name='user' color='gray' size={22} style={{marginLeft:10}}/>
          <TextInput onChangeText={(text)=>setEmail(text)} value={email} placeholder='Enter your email' style={{color:'gray',width:300}}/>
        </View>

        <View style={{marginTop:10,flexDirection:'row',alignItems:'center',gap:5,backgroundColor:'#d0d0d0',paddingVertical:5,height:50,borderRadius:5}}>
          <Icon name='lock' color='gray' size={22} style={{marginLeft:10}}/>
          <TextInput onChangeText={(text)=>setPassword(text)} value={password} placeholder='Password' style={{color:'gray',width:300}}/>
        </View>

        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:12}}>
          <Text>Keep me logged in</Text>
          <Text style={{color:'#007fff',fontWeight:'500'}}>Forgot Password</Text>
        </View>

        <View style={{marginTop:50}}>
            <Pressable style={{
              width:200,
              backgroundColor:'#febe10',
              marginLeft:'auto',
              marginRight:'auto',
              padding:15,
              borderRadius:6
            }}
            onPress={()=>handleLogin()}
            >
              <Text style={{textAlign:'center',color:'white',fontSize:16,fontWeight:'bold'}}>Login</Text>
            </Pressable>
        </View>

        </KeyboardAvoidingView>



    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({})