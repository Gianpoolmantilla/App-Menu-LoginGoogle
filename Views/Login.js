import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import * as Google from "expo-auth-session/providers/google";
import * as RootNavigation from "../Components/RootNavigation";
import { Box, Center, NativeBaseProvider } from "native-base";



export default function Login({ navigation }) {
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId:
      "81571073794-uvelk1mf7sqld7k0ofp886ccqsgksftp.apps.googleusercontent.com",
  });

  React.useEffect(() => {
    if (response?.type === "success") {
      console.log(response);
      RootNavigation.navigate("MenuDrawer", {
        screen: "Home",
        params: response.authentication,
      });
    }
  }, [response]);

  const config = {
    dependencies: {
      "linear-gradient": require("expo-linear-gradient").LinearGradient,
    },
  };

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
          Bienvenido! haga click para logearse
    <View>
      <Button
        
        title="Login"
        onPress={() => {
          promptAsync();
        }}
      />
    </View>
    </Box>
      </Center>
    </NativeBaseProvider>
  );
}
