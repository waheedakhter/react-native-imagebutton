# @waheed_akhter/react-native-imagebutton
An Image button for react native apps.

<h1>Installation</h1>
yarn add @waheed_akhter/react-native-imagebutton


<h1>Usage</h1>



```
import React from "react";
import { View } from "react-native";
import ImageButton from "@waheed_akhter/react-native-imagebutton";

const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <ImageButton
        width={"80%"}
        height={"20%"}
        backgroundColor={"#0f0"}
        borderRadius={50}
        borderWidth={2}
        borderColor={"#ff0"}
        image={require("./assets/img.png")}
        // imageLeft={require("./assets/imageLeft.png")}
        // imageCenter={require("./assets/imageCenter.png")}
        // imageRight={require("./assets/imageRight.png")}
        buttonAlign="center"
        imageResizeMode="stretch"
        text="Press Me!"
        textColor="#fff"
        textWeight="bold"
        textAlign={"center"}
        onPress={() => {
          alert("Button pressed");
        }}
      />
    </View>
  );
};

export default App;

```
