import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Detail = (props: any) => {
    const {title,body,id} = props.route.params.info
  return (
    <View style={{flex:1,backgroundColor:'#febe10'}}>
      <View style={{flex:.25,backgroundColor:'#febe10',alignItems:'flex-end',flexDirection:'row',padding:10}}>
        <Text style={{fontWeight:'bold',fontSize:28,color:'#222222'}}>{id}</Text>
      </View>

      <View style={{flex:.25,backgroundColor:'#febe10',alignItems:'flex-end',flexDirection:'row',padding:10}}>
        <View>
        <Text style={{fontWeight:'bold',fontSize:28,color:'#222222'}}>Posts</Text>
        <Text style={{marginTop:10,color:'#222222',fontSize:15}}>Title</Text>
        <Text style={{fontWeight:'bold',fontSize:18,color:'#222222'}}>{title}</Text>
        </View>
      </View>

      <View style={{flex:.5,padding:10,borderTopRightRadius:20,borderTopLeftRadius:20,backgroundColor:'white'}}>
        <Text style={{marginTop:10,color:'#222222',fontSize:15}}>Body</Text>
        <Text style={{fontWeight:'500',color:'black',fontSize:15,marginTop:10}}>{body}</Text>
      </View>
    </View>
  )
}

export default Detail

const styles = StyleSheet.create({})