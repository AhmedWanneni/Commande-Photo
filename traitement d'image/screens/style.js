import { Dimensions } from 'react-native';
const win = Dimensions.get('window');
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

console.log(win); 
let style = {
    container: {
        fontFamily : 'Metropolis',
        flex: 1,
        backgroundColor: '#E5E5E5',
      },
      back_top: {
         fontSize : hp("3.5%"),
          
      },

      top: {
        width : wp("90%"),
        height : hp("20%"),
        backgroundColor: '#E56448',
        borderBottomRightRadius: (win.width + win.height)*90/100,
      },
      top_title_wrap:{
        top : hp("6.2%"),
        left : wp("6%"),
      },
      top_title: {
        
        
        fontSize : hp("4%"),
        lineHeight :hp("4%"),
        fontWeight: 'bold',
        fontFamily : 'Metropolis',
        color : "#222222",
      
      },
      top_title_sign_up: {
        
        fontSize : hp("4%"),
        lineHeight :hp("4%"),
        fontWeight: 'bold',
        fontFamily : 'Metropolis',
        color : "#222222",
      
      },
      top_title_forget_pass:{
        fontSize : hp("2.6%"),
        lineHeight :hp("4%"),
        fontWeight: 'bold',
        fontFamily : 'Metropolis',
        color : "#222222",
      },
      form: {
        
        flexGrow : 2,
        alignSelf : 'center',
        marginTop : hp("4%"),
        width : wp("86%"),
        alignItems :"center",
        
       
      },
      label: {
        fontSize : 11,
        fontFamily : 'Metropolis',
        color : '#9B9B9B',
        width : wp("90%"),
        height : hp("2%"),
        top : hp("-0.6%"),
        left : 0,
        marginBottom : hp("-0.6%"),
      
      },
      forget_txt: {
        width : 343,
        fontWeight : '700',
        fontFamily : 'sans-serif',
        textAlign :'center',
        marginBottom : 10
      },
      field_w: {
        
        width : wp("86%"),
        height: hp("8%"),
        backgroundColor : '#FFFFFF',
        borderRadius : 4,
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 1
       },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        
        
        marginTop : hp("1%"),
        marginBottom : hp("1%"),
        padding :10
      },
      sign_up: {
        alignSelf : "center",
        backgroundColor : '#DB3022',
        width : wp("85%"),
        height : hp("6%"),
        borderRadius : 20,
        alignItems:"center",
        color : "#fff",
        marginBottom : hp("13.2%")
      },
      envoyer_btn: {
        backgroundColor : '#DB3022',
        width : 343,
        height : 48,
        borderRadius : 20,
        alignItems:"center",
        color : "#fff",
        marginBottom : 400
      },
      c_social : {
       
        alignItems : "center",
        marginBottom : hp("7%")
      },
      social_images_wrap: {
        flexWrap: 'wrap', 
        
        flexDirection:'row',
        marginTop : hp("1.3%")
        
        
        
      },
      googleWrap: {
        width : wp("23%"),
        height : hp("8%"),
        backgroundColor : "#fff",
        alignItems : "center",
        borderRadius : 24,
        shadowColor: "rgba(0, 0, 0, 0.05)",
        shadowOffset: {
          width: 8,
          height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 3.84,
        elevation: 2,
      },
      facebookWrap: {
        width : wp("23%"),
        height : hp("8%"),
        backgroundColor : "#fff",
        alignItems : "center",
        borderRadius : 24,
        marginLeft : wp("2%"),
        shadowColor: "rgba(0, 0, 0, 0.05)",
        shadowOffset: {
          width: 8,
          height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 3.84,
        elevation: 2,
      },
      social_images: {
        width : 40,
        height : 40,
        marginTop : 10,
        backgroundColor : "#fff",
        
      },
      forgot: {
        flexWrap: 'wrap',
        marginTop : 15,
        marginBottom : 10,
        width : wp("90%"),
        alignItems : "flex-end",
        flexDirection:'row',
        paddingLeft : 190,
        
      },
      have_account: {
        flexWrap: 'wrap',
        marginTop : hp("1.8%"),
        marginBottom :hp("1.8%"),
        width : wp('85%'),
        alignItems : "flex-start",
        flexDirection:'row-reverse',
        fontFamily : "Metropolis"
      },
      FooterBar:{
        width : wp("30%"),
        height: 5,
        backgroundColor : "#000",
       
        alignSelf : "center"
      },
      // Categorie 
      cat:{
        
        width : wp("83%"),
        height :wp("30%"),
        backgroundColor :  "#fff",
        shadowColor: "rgba(0, 0, 0, 0.05)",
        shadowOffset: {
          width: 8,
          height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 3.84,
        elevation: 2,
        alignSelf : "center",
        marginTop:hp("3%"),
      },
      cat_wrap: {
        width : wp("100%"),
        flex: 1,
        flexDirection: 'row',
      },
      cat_title_wrap: {
        width : wp("40%"),
        height : 126,
      
        alignItems : "center",
        paddingTop : wp("11.5%"),
      },
      cat_title : {
        fontWeight: "bold",
        fontFamily : "Metropolis",
        fontSize : 18
      },
      cat_image_wrap: {
        position : "relative",
        top : hp("-16%"),
        left : wp("40%"),
        width : wp("43%"),
        height: hp("15.6%"),

      },
      cat_image: {
        width : wp("43%"),
        height: hp("15.6%"),
        
        
      },
     Footer: {
       position : "relative",
       bottom : 0,
       flexDirection: 'row',
        width : wp("100%"),
        height : hp("10%"),
        backgroundColor : "#fff",
        marginTop:hp("7%"),
        marginBottom : hp("-1%"),
        
     },
     footer_icons_wrap: {
      width : wp("100%"),
      height : hp("7%"),
      marginTop  : hp("1.3%"),
      marginLeft:wp("2.4%"),
      
      
     },
     footer_icons: {
      fontSize : hp("5%"),
      color : "#b7b7b7"
     },
     footer_icons_shop: {
       fontSize : hp("6%"),
      color : "#e4241a"
     },
     FooterBar_cat:{
      width : 134,
      height: 5,
      backgroundColor : "#000",
      bottom : 0,
      alignSelf : "center"
    },
    backgroundImage:{
      flex:1,
      resizeMode : "cover",
      width : win.width,
      height : win.height,
      
      
    },
      download_btn:{
        position : 'absolute',
        elevation : 1,
        backgroundColor : '#DB3022',
        width : 343,
        height : 48,
        borderRadius : 20,
        alignItems:"center",
        alignSelf : "center",
        color : "#fff",
        top : win.height/2
      },
      take_photo_btn:{
        position : 'absolute',
        elevation : 1,
        backgroundColor : '#DB3022',
        width : 343,
        height : 48,
        borderRadius : 20,
        alignItems:"center",
        alignSelf : "center",
        color : "#fff",
        top: win.height/2 - 70
        
      },
      SuccessContainer: {
        fontFamily : 'Metropolis',
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems : "center"
      },
      success_image: {
        width : wp("55%"),
        height: hp("30%"),
        marginTop : hp("20%")
      },
      success_title: {
        fontSize : hp("5%"),
        fontWeight : "bold",
        marginTop:hp("2%"),
        alignSelf:"center"
      },
      success_desc: {
        textAlign : "center",
        margin : hp("2%"),
        fontFamily : 'Metropolis'
      },
      success_btn: {
        backgroundColor : '#DB3022',
        width : wp("88%"),
        height : hp("6%"),
        borderRadius : 20,
        alignItems:"center",
        color : "#fff",
        marginTop  : hp("18%"),
        marginBottom : hp("2%"),
        paddingTop:hp("1.7%")
      },
      FooterBarSuccess : {
        width :wp("30%"),
        height: 5,
        backgroundColor : "#000",
       bottom : hp("-8,6%"),
        alignSelf : "center"
      },
      PayerContainer:{
        flex:1,
        backgroundColor : "#e5e5e5",
        alignItems : "center"
      },
      payer_chip: {
        position : "absolute",
        top : 110,
        left : 60
      },
      add_cart_wrap: {
        top : hp("-21%"),
        width : wp("97%"),
        height : hp("72%"),
        backgroundColor : "#F9F9F9",
        borderTopRightRadius : 30,
        borderTopLeftRadius : 30,
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 1
       },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        alignItems : "center"
      },
      top_line:{
        width : 60,
        height: 6,
        backgroundColor : "#9B9B9B",
        borderRadius : 20,
        margin : 16
      },
      add_cart_title:{
        fontFamily : "Inter",
        fontSize : 18,
        color : "#222222"
      },
      payer_btn:{
        backgroundColor : '#DB3022',
        width : wp("90%"),
        height : hp("6%"),
        borderRadius : 20,
        alignItems:"center",
        color : "#fff",
       marginTop:hp("5%")
      },
      PayerTitle:{
        fontSize : 20,
        fontFamily : 'Metropolis',
        marginLeft : wp("-30%"),
        marginTop:hp("2%"),
        marginBottom:hp("2%"),
        fontWeight : "bold",
        color : "#222222"
      },
      crop_wrap:{
        position : "relative",
        top:hp("-4%"),
        width : wp("99%"),
        height : hp("55%"),
        backgroundColor : "#F9F9F9",
        borderTopRightRadius : 30,
        borderTopLeftRadius : 30,
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 1
       },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        alignItems : "center",
        alignSelf : "center"
      },
      field_crop:{
        flexWrap: 'wrap', 
        alignItems: 'flex-start',
        flexDirection:'row',
        width : 360,
        height : 44,
        padding : 10,
        backgroundColor :"#FFFFFF",
        marginTop : 10
      },
      crop_item_title:{
        fontWeight : "bold"
      },
      crop_item_btn:{
        backgroundColor : '#DB3022',
        width : 103,
        height : 28,
        borderRadius : 20,
        marginTop:-2,
        marginLeft:44,
        color : "#fff",
        paddingTop : 2,
        textAlign : "center",
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 1
       },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
      },
      CameraContainer:{
        height : 620
      },
      take_photo_wrap: {
        width : 60,
        height : 60,
        backgroundColor : "#db3022",
        alignItems : "center",
        paddingTop : 7,
        borderRadius : 60,
        marginLeft : 30,
        marginTop : 25
      },
      footer_icons_take:{
      fontSize : 40,
      color : "#FFFFFF",
      
      },
      TakeFooter:{
        flex : 1,
       flexDirection: 'row',
        width : wp("100%"),
        height : hp("6.2%"),
        backgroundColor : "#fff",
        
        marginBottom:hp("-2%")
      },
      footer_icons_flash:{
        color : "#222222",
        fontSize : 30,
      },
      footer_icons_flash_wrap:{
        marginLeft : wp("21%"),
        marginTop : hp("6%"),
        height : hp("6%"),
        width : 50
      },
      flip_photo_wrap:{
        marginLeft : 40,
        marginTop : 40,
        height : 60,
        width : 50
      },
      
      footer_flip_icons:{
        color : "#222222",
        fontSize : 30,
      },
      save_photo_wrap:{
        width : 60,
        height : 60,
        backgroundColor : "#db3022",
        alignItems : "center",
        paddingTop : 7,
        borderRadius : 60,
        marginLeft : 10,
        marginTop : 25
      },
      footer_icons_save:{
        fontSize : 40,
      color : "#FFFFFF",
      },
      FooterBarTake:{
        width : 134,
        height: 5,
        backgroundColor : "#000",
        bottom : 50,
        alignSelf : "center",
        marginLeft:-270,
        marginBottom:-190
      },
      mastercard_payer:{
        position : "relative",
        width : 32,
        height : 25,
        top:hp("-2.5%"),
        left:wp("73%")
      },
      HomeContainer:{
        flex: 1,
        backgroundColor : "#f7f7f7",
        alignItems : "center"
      },
      logo: {
        alignSelf : "center",
      },
      WrapLogo:{
        marginTop : hp("10%"),
        marginBottom : hp("10%"),
      },
      HomeLink: {
        backgroundColor : '#DB3022',
        width : wp("90%"),
        height : hp("6%"),
        borderRadius : 20,
        alignItems:"center",
        color : "#fff",
        textAlign : "center",
        fontFamily : "Metropolis",
        paddingTop : 14,
        marginTop : hp("2.2%"),
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 1
       },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
      },
      FooterBarHome:{
      width : 134,
      height: 5,
      backgroundColor : "#000",
      bottom : -90,
      alignSelf : "center"},
      agrandi_photo_wrap:{
        width : wp("60%"),
        height : hp("22%"),
        backgroundColor : "#db3022",
        alignItems : "center",
        paddingTop : 7,
        borderRadius : 60,
        marginLeft : wp("1%"),
        marginTop : wp("2.5%"),
        alignSelf : "center"
      },
      agrandi_icon:{
        fontSize : 140,
      color : "#FFFFFF",
      },
      footer_agrandi_wrap:{
        backgroundColor : "#FFF",
        marginTop : hp("2.43%"),
        height : hp("16%"),
        shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 7,
},
shadowOpacity: 0.43,
shadowRadius: 9.51,

elevation: 15,
      },
      FooterBarAgrandi:{
        width : wp("31%"),
        height: 5,
        backgroundColor : "#000",
        bottom : wp("3%"),
        alignSelf : "center",
        elevation : 17
      },
      agrandiPhoto:{
        width : wp("90%"),
        height : hp("55%"),
        
        
        alignSelf:"center"
      },
      agrandi_photo_wrap_img:{
        width : wp("90%"),
        height : hp("55%"),
        marginTop : hp("1%"),
        alignSelf: "center"
      },
      SelectFromList:{
        marginBottom:20,
        width : "100%",      
      },
      wrap_picker:{
        marginTop : hp("6%"),
        width : wp("81%"),
        height : hp("6%"),
        borderWidth : 1,
        borderColor : "#F01F0E",
        borderRadius : 10,
        alignSelf : "center",
        backgroundColor : "#fff"
      },
      PrixWrap:{
        flexDirection :"row",
        width : wp("88%"),
        height: hp("3.8%"),
        alignSelf : "center",
        alignItems : "center",
        marginLeft:wp("18%"),
        marginTop:hp("4%"),
        
      },
      prix_label:{
        fontSize:  18,
        fontWeight : "bold",
        fontFamily: 'Metropolis',
        marginRight : 20
      },
      prix:{
        width : wp("44%"),
        height : hp("4.5%"),
        borderRadius : 10,
        backgroundColor : "#fff",
        borderWidth : 1,
        borderColor : "#F01F0E",
      },
      prix_btn: {
        backgroundColor : '#DB3022',
        width : wp("85%"),
        height : hp("6%"),
        borderRadius : 20,
        alignItems:"center",
        color : "#fff",
        marginBottom : hp("3.9%"),
        marginTop : hp("8%"),
        textAlign : "center",
        paddingTop:13,
        alignSelf : "center"
      },
      Adressfield:{
        width : wp("70%"),
        height: hp("6%"),
        backgroundColor : "#fff",
        alignSelf : "center",
        borderRadius : 10,
        fontFamily : "Metropolis",
        paddingLeft : wp("2.5%")
      },
      adress_btn:{
        backgroundColor : '#DB3022',
        width : String( 100 - ((win.width/343) - 1)*100)+"%",
        height : hp("6.5%"),
        borderRadius : 20,
        alignItems:"center",
        color : "#fff",
        marginBottom : hp("-5%"),
        textAlign : "center",
        paddingTop:13,
        alignSelf : "center"
      },
      TirageCarre_top_img:{
        width : "100%",
        height: hp("16%"),
        backgroundColor :"#000",
        shadowColor: "#000",
        shadowOffset: {
	      width: 0,
	      height: 2,
        },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
      },
      tirage_carre_wrap:{
        width : wp("90%"),
        height : hp("60%"),
        alignSelf :"center",
       
      },
      TriageCarreDi:{
        width : wp("90%"),
        height : hp("9%"),
        backgroundColor : "#fff",
        marginTop : hp("2.2%"),
        alignSelf : "center",
        textAlign : "center",
        color : "#222222",
        fontFamily : "Abel",
        paddingTop : 25,
        shadowColor: "#000",
        shadowOffset: {
	      width: 0,
	      height: 2,
        },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      elevation: 4,
      },
      magnetWrap:{
        flexDirection : "row",
        width : wp("90%"),
        height : hp("14%"),
        backgroundColor : "#fff",
        marginTop : hp("2.2%"),
        alignSelf : "center",
        textAlign : "center",
        color : "#222222",
        fontFamily : "Abel",
        
        shadowColor: "#000",
        shadowOffset: {
	      width: 0,
	      height: 2,
        },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      elevation: 4,
      },
      magnetDesc:{
        width : 213,
        textAlign : "center",
        marginTop :  32
      },
      magnetImg:{
        margin:6
      },
      SizeSmall:{
        width : wp("40%"),
        height : hp("20%"),
        left : wp("4%"),
        top : 20
      },
      SizeMedium:{
        width : wp("40%"),
        height : hp("20%"),
        left : wp("50%"),
        top:hp("-6%")
      },
      SizeLarge:{
        width : wp("40%"),
        height : hp("20%"),
        left : wp("4%"),
        top:hp("-8%")
      },
      save_size_wrap:{
        width : wp("15%"),
        height : wp("15%"),
        backgroundColor : "#db3022",
        alignItems : "center",
        paddingTop : 7,
        borderRadius : 60,
        marginLeft : wp("65%"),
        marginTop : hp("-24%")
      },
      SelectSize_btn_wrap:{
        backgroundColor : '#DB3022',
        width :wp("90%"),
        height : hp("6%"),
        borderRadius : 20,
        alignItems:"center",
        color : "#fff",
        
        
        textAlign : "center",
        paddingTop:hp("1.3%"),
        alignSelf : "center"
      },
      SelectSize_btn:{
       color : "#fff",
       textAlign : "center"
      },
      FooterSize:{
        flex : 1,
       flexDirection: 'row',
        width : win.width,
        
        backgroundColor : "#fff",
        marginTop:hp("1.1%"),
        marginBottom:hp("-1.1%"),
      },
      PrixSizeWrap:{
        flexDirection :"row",
        width : wp("66%"),
        height: hp("6%"),
        alignSelf : "center",
        alignItems : "center",
       textAlign : "center",
        marginTop:hp("14%"),
        marginBottom : hp("3%")
      },
      Magnet_top_img:{
        backgroundColor : "#fff",
        shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,
        padding :hp("1.1%")
      },
      wrap_picker_usb:{
        marginTop : -10,
        width : 180,
        height : 50,
        borderWidth : 1,
        borderColor : "#F01F0E",
        borderRadius : 10,
        alignSelf : "center",
        backgroundColor : "#fff",
        margin : 10,
        
      },
      gravure_btn:{
        marginTop : hp("-1.1%"),
        margin : hp("1.1%"),
        marginBottom : hp("0%"),
        width : wp("45%"),
        height : hp("6%"),
        borderWidth : 1,
        borderColor : "#F01F0E",
        borderRadius : 10,
        alignSelf : "center",
        backgroundColor : "#fff",
        fontWeight : "bold",
        fontFamily : "Alegreya",
        textAlign : "center",
        paddingTop : hp("1.5%")
      },
      save_sizeUSB_wrap:{
        width : wp("16.8%"),
        height : hp("8.8%"),
        backgroundColor : "#db3022",
        alignItems : "center",
        paddingTop : hp("1.5%"),
        borderRadius : 60,
        alignSelf : "center",
        marginLeft : wp("16.8%"),
        marginTop : hp("-13%")
      },
      PrixUSBWrap:{
        flexDirection :"row",
        width : wp("90%"),
        height: hp("6%"),
        alignSelf : "center",
        alignItems : "center",
        marginLeft:wp("50%"),
        
      },
      Ajoute_carte_btn:{
        backgroundColor : '#DB3022',
        width : wp("90%"),
        height : hp("6.1%"),
        borderRadius : 20,
        alignItems:"center",
        color : "#fff",
        alignSelf : "center",
        marginTop : hp("0.5%"),
        marginBottom : hp("0.6M%")
      },
      FooterUSBSize:{
        flex : 1,
       flexDirection: 'row',
        width :win.width,
        
        backgroundColor : "#fff",
        marginTop : wp("1.4%"),
        marginBottom:wp("-1.1%")
      },
      coffertWrap:{
        flexDirection : "row",
        width : wp("90%"),
        height : hp("8.8%"),
        backgroundColor : "#fff",
        marginTop : hp("1.1"),
        alignSelf : "center",
        textAlign : "center",
        color : "#222222",
        fontFamily : "Abel",
        
        shadowColor: "#000",
        shadowOffset: {
	      width: 0,
	      height: 2,
        },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      elevation: 4,
      },
      CoffertImg:{
        width : wp("26%"),
        height : hp("8.8%"),
      },
      CoffertDesc:{
        width : wp("60%"),
        textAlign : "center",
        marginTop:hp("1.1%")
      },
      FooterMagnet:{
        backgroundColor : "#fff",
        marginBottom:hp("-1.1%"),
        marginTop:hp("1.3%")
      },
      email_icon_checked:{
        position : "relative",
        top : hp("-3.5%"),
        left : wp("75%"),
        fontSize : 23,
        color : "#2AA952"
      },
      email_icon_error:{
        position : "absolute",
        top : hp("0.7%"),
        left : wp("75%"),
        fontSize : hp("3%"),
        color : "#F01F0E"
      },
      password_icon_checked:{
        marginLeft:wp("52%"),
        marginTop:hp("1%"),
        fontSize : 20,
        color : "#2AA952"
      },
      password_icon_error:{
        marginLeft:wp("52%"),
        marginTop:hp("1%"),
        fontSize : 20,
        color : "#F01F0E"
      },
      name_icon_checked:{
        marginLeft : wp("40%")
      },
      adress_field_wrap:{
        flexDirection : "row",
        width : wp("88%"),
        backgroundColor : "#fff",
        alignSelf : "center",
        marginBottom : hp("2%"),
        borderRadius : hp("2%")
      },
      adress_name_icon_checked:{
        position : "relative",
        top : hp("1.5%"),
        left : wp("7.5%"),
        alignItems : 'stretch',
       
        fontSize :hp("3%"),
        color : "#2AA952"
      },
      adress_name_icon_error:{
        position : "relative",
        top : hp("1.5%"),
        left : wp("7.5%"),
       
       
        fontSize :hp("3%"),
        color : "#F01F0E"
      },
      ErrorMessage:{
        position : "absolute",
        bottom : hp("47%"),
        color : "#F01F0E",
        alignSelf : "center",
        fontSize : 17,
        fontWeight:  "bold",
        fontFamily : "Metropolis"
        
      },
      HomeLinkWrap:{
        width : wp("90%"),
        height : hp("50%"),
        alignItems : "center",
        alignSelf :  "center"
      },
      field:{
        marginTop:hp("1%"),
        width : wp("70%"), 
        fontSize : hp("2.2%"),
        fontFamily: 'Metropolis'
      },
      have_account_icon:{
        color : "#F01F0E",
      },
      forget_txt_wrap:{
        width : wp("86%"),
        alignSelf : "center",
        alignItems : "center",
        
      },
      CoverImageWrap:{
        width :wp("100%"),
        backgroundColor : "#000"
      },
      PrixContent:{
        width : wp("88%"),
        height : hp("60%"),
        alignSelf : "center"
      },
      UploadSizeWrap:{
        width : wp("94%"),
        height : hp("76%"),
        alignSelf : "center",
        
      },
      cat_wrap:{
        alignSelf : "center",
        width : wp("83%"),
        height : hp("76%"),

      }
}
export {style};