import React, { useState, useEffect } from "react";

import { StyleSheet, Text, View, Button } from "react-native";

import { Box, Center, NativeBaseProvider, ScrollView,AspectRatio,Image } from "native-base";

import axios from "axios";


export default function Home(props) {
  var nombre = "";
  const [query, setQuery] = useState([""]);
  let token = props.route.params.accessToken;
  useEffect(() => {
    const fetch = () => {
      axios
        .get("https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=" + token)
        .then((response) => {
          setQuery(response);
          nombre  = data.name.toString();
          console.log(response.data.name);
          console.log("token : " + token);
        })
        .catch((err) => console.log(err));
         
    };
    fetch();
  }, []);




  return (

    <NativeBaseProvider config={config}>        
          <Center flex={1} px="3">
            <Box
              bg={{
                linearGradient: {
                  colors: ["lightBlue.300", "rose.800"],
                  start: [0, 0],
                  end: [1, 0],
                },
              }}
              p="12"
              rounded="xl"
              _text={{
                fontSize: "md",
                fontWeight: "medium",
                color: "warmGray.50",
                textAlign: "center",
              }}
            >
            
            Bienvenido
           
            </Box>
          </Center>    
    </NativeBaseProvider>
  );
}




const config = {
  dependencies: {
    "linear-gradient": require("expo-linear-gradient").LinearGradient,
  },
};

