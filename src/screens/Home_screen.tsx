import {StyleSheet, Text, View,ScrollView,RefreshControl, SafeAreaView} from 'react-native';
import React from 'react';
import axios from 'axios'
import Toast from 'react-native-toast-message';

const Home_screen = () => {

    const [data, setData] = React.useState<any>(null);
    const [refreshing, setRefreshing] = React.useState(false);

   

    const posts = async()=>{
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts').then((res: any)=>{
                setData(res.data);
            }).catch((err: any)=>{
                console.log("error",err.message)
            })
        } catch (error: any) {
          Toast.show({
            type: 'error',
            text1: 'Data fetching failed',
            text2: error.message
          });
        }
    }
    React.useEffect(() => {
      posts();
    }, [])

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        posts();
        setTimeout(() => {
          setRefreshing(false);
        }, 2000);
      }, []);
    
  return (
    <SafeAreaView>

      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        {
        data?.map((e:any,index:any)=>{
            return (
                <View style={{borderWidth:1,height:100,borderRadius:5,marginTop:10,padding:5}}>
                  <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                  <Text style={{fontWeight:'bold',color:'#222222'}}>{e.title}</Text>
                  <Text style={{fontWeight:'bold',color:'#222222'}}>{e.id}</Text>
                  </View>
                   <View style={{flexWrap:'wrap',flexDirection:'row'}}> 
                    <Text numberOfLines={3} style={{flex:1,flexWrap:'wrap'}}>{e.body}</Text>
                   </View>
                </View>
            )
        })
      }
      </ScrollView>
     
    </SafeAreaView>
  );
};

export default Home_screen;

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        padding:10
      },
});
