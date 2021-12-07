import React, { useState, useEffect } from "react";
import * as RootNavigation from "../Components/RootNavigation";
import {
  Button,
  Box,
  NativeBaseProvider,
  ScrollView,
} from "native-base";
import axios from "axios";


 function Category() {
  const [query, setQuery] = useState([]);
  URL = "https://www.freetogame.com/api/games";

  useEffect(() => {
    const fetch = () => {
     
      axios
        .get(URL)
        .then((response) => {
          setQuery(response.data);
        })
        .catch((err) => console.log(err));
    };
    fetch();
  }, []);

  const config = {
    dependencies: {
      "linear-gradient": require("expo-linear-gradient").LinearGradient,
    },
  };

  let categoria = query.map(function (cat) {
    return cat.genre;
  });
  let categoryGroup = [...new Set(categoria)];
 
  let ct = categoryGroup.map(function(rowobj){
  return {name : rowobj };
  });  
  //console.log(ct);



  return (
    <NativeBaseProvider config={config}>
      <ScrollView>
        {ct.map((item) => (         
          <Box key={item.name}>
            <Button
            
            mb="5"
            p="12"
            overflow="hidden"
            rounded="lg"
            width="95%"
            left="2"
            _text={{
              fontSize: "md",
              fontWeight: "medium",
              color: "warmGray.50",
              textAlign: "center",
            }} 
              onPress={() =>
                RootNavigation.navigate({
                  name: "Card",
                  params: { input: item.name },
                })
              }
            >
              {item.name}
            </Button>
          </Box>
       
        ))}
      </ScrollView>
    </NativeBaseProvider>
  );
}

export default Category;