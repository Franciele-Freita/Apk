import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    title: {
      fontWeight:"900",
      fontSize:24,
      color: "#464646",
    },
    subtitle:{
      fontWeight:"400",
      fontSize:16,
      color: "#464646",
    },
    linked:{
      fontWeight:"400",
      fontSize:16,
      color: "#464646",
      textDecorationLine:"underline",
    },
    textCenter:{
      textAlign:'center',
    },
    btn:{
      width:'100%',
      backgroundColor:"#4DDFFF",
      alignItems: "center",
      padding: 10, 
      borderRadius:50,
    },
    btnTitle:{
      fontWeight:"900",
      fontSize:16, 
      color:"#464646",
      textAlign:'center',
    },
    p1:{
      padding:16,
    },
    w100:{
      width:'100%',
    },
    alignItemsCenter:{
      alignItems:'center',
    },
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: "#f8f8f8"
    },
    inputText:{
      backgroundColor:'#fff',
      borderRadius:50,
      borderWidth: 1,
      borderColor: "#DCDCDC",
      paddingHorizontal:20,
      paddingVertical:10,
      fontSize:14,
      fontWeight:"400",
      color:"#464646",
      
    },
    inputPasswordArea:{
      width:'100%', 
      borderColor:'#DCDCDC',
      backgroundColor:'white', 
      borderWidth: 1, 
      paddingHorizontal:20, 
      borderRadius:50, 
      flexDirection:'row', 
      alignItems:'center',

    },
    inputPassword:{
      borderRadius:50, 
      width:'90%',

    },
    inputPasswordIcon:{
      width:'15%', 
      height:'100%',
      alignItems:'center',
      justifyContent:'center',
    },
    mb1:{
      marginBottom:6,

    },
    mb2:{
      marginBottom:12,

    },
    mb3:{
      marginBottom:16,

    },
    mb4:{
      marginBottom:40,

    },
    mb5:{
      marginBottom:50,

    },

});

export default styles;