import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Linking} from "react-native";

const AlbumDetail = ({ album, navigation }) => {
   return (
      <View style={styles.cardContainerStyle}>
        <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
          <Image
            style={styles.thumbnailStyle}
            source={{
              uri: album.thumbnail_image
            }}
          />
          <View style={styles.headerContentStyle}>
            <Text style={styles.titlestyle}>{album.title}</Text>
            
          </View>
        </View>
        <View style={styles.cardSectionStyle}>
            <Image
              style={styles.imageStyle}
              source={{
                uri: album.image
              }}
            />
        </View>
        <View style={styles.fouricons}>
              <Image source={{url:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1024px-Heart_coraz%C3%B3n.svg.png"}}
            style={{width:28,height:28,marginLeft:15}}/>
              <Image source={{url:"https://lh3.googleusercontent.com/proxy/s-Rf5xH2096211s9jl9bF8tyBMTj-ez5N6JCgi0dHZ2L_RPhyEm_Hc2Fbr7Z_kFT-7ICh5zgbnvzWdadY_WU6G3X23ZlboS4tUo3SvnaJ_fTnoLCgWBpYEYzb1CmFWX4i6OLZWCfpEtzpM8"}}
            style={{width:28,height:28,marginLeft:15}}/>
            <Image source={{url:"https://4.bp.blogspot.com/-h7NFagObuOg/WUYc0KK7uQI/AAAAAAAAHRY/SXSMFtD0LoI_aTYA9zVR9y-slCmBe48fwCLcBGAs/s1600/How%2BTo%2BSee%2BDeleted%2BDirect%2BMessages%2BOn%2BInstagram.png"}}
            style={{width:28,height:28,marginLeft:15}}/>
            <Image source={{url:"https://cpng.pikpng.com/pngl/s/125-1255467_instagram-clipart-instagram-post-bookmark-symbol-on-instagram.png"}}
            style={{width:28,height:28,marginLeft:238}}/>
        </View>
        <View style={styles.likesbox}>
          <Text style={styles.likestext}>{album.likes}</Text>
          <View style={styles.articlebox}>
            <Text style={styles.likestext}>{album.title}</Text>
            <Text style={styles.articletext}>{album.article}</Text>
          </View>
        </View>
      </View>
  )};

const styles = StyleSheet.create({
  thumbnailContainerStyle: {
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
    borderRadius:80,
    margin: 5
  },
  headerContentStyle: {
    alignItems:"center",
    flexDirection:"row",
    justifyContent:"space-between",
    paddingLeft: 10,
    flex:1
  },

  titlestyle:{
    fontSize:15,
    fontWeight:"bold",
  },


  cardSectionStyle: {
    padding: 5,
    backgroundColor: "#FFFFFF",
    borderColor: "#FFFFFF",
    borderBottomWidth: 1
  },
  imageStyle: {
    height: 450,
    borderRadius:4,
    marginLeft:2,
    marginRight:2,
    width: null
  },
  fouricons:{
    flexDirection:"row",
    alignItems:"center",
    flex:1,
    backgroundColor:"#FFFFFF",
    height:40
  },
  likesbox:{
    flex:1,
    height:70,
    backgroundColor:"#FFFFFF",
  },
  likestext:{
    fontWeight:"bold",
    marginLeft:16,
    marginTop:5
  },
  articlebox:{
    flexDirection:"column",
  },
  articletext:{
    marginTop:5,
    marginLeft:16,
    fontWeight:"400"
  }

});

export default AlbumDetail;
