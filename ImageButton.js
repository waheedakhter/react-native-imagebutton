import React, { Component } from "react";
import {
  TouchableOpacity,
  Text,
  ImageBackground,
  View,
  Image
} from "react-native";

export default class ImageButton extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={{
          backgroundColor: this.props.backgroundColor
            ? this.props.backgroundColor
            : "#fff",
          alignSelf: this.props.buttonAlign
            ? this.props.buttonAlign
            : "flex-start",
          width: this.props.width,
          height: this.props.height,
          borderRadius: this.props.borderRadius ? this.props.borderRadius : 0,
          borderWidth: this.props.borderWidth ? this.props.borderWidth : 0,
          borderColor: this.props.borderColor ? this.props.borderColor : "#000",

          
        }}
      >
        <ImageBackground

          style={{
            flex: 1,
            justifyContent: "center"
          }}

          source={this.props.image}
          resizeMode={
            this.props.imageResizeMode ? this.props.imageResizeMode : "contain"
          }
        >
          <View
            style={{
              flexDirection: "row",
              position: "absolute",
              flex: 1,
              backgroundColor: this.props.backgroundColor
                ? this.props.backgroundColor
                : "#fff"
            }}
          >
            {this.props.imageLeft && (
              <View style={{ flex: 1, flexDirection: "row" }}>
                <Image
                  style={{ flex: 2 }}
                  source={this.props.imageLeft}
                  resizeMode={"contain"}
                />
                <View style={{ flex: 1 }} />
              </View>
            )}
            {this.props.imageCenter && (
              <View style={{ flex: 1, flexDirection: "row" }}>
                <View style={{ flex: 1 }} />
                <Image
                  style={{ flex: 1 }}
                  source={this.props.imageCenter}
                  resizeMode="contain"
                />
                <View style={{ flex: 1 }} />
              </View>
            )}
            {this.props.imageRight && (
              <View style={{ flex: 1, flexDirection: "row" }}>
                <View style={{ flex: 1 }} />
                <Image
                  style={{ flex: 2 }}
                  source={this.props.imageRight}
                  resizeMode={"contain"}
                />
              </View>
            )}
          </View>
          <Text
            style={{
              color: this.props.textColor,
              alignSelf: this.props.textAlign ? this.props.textAlign : "center",
              fontSize: this.props.textSize ? this.props.textSize : 22,
              fontWeight: this.props.textWeight
                ? this.props.textWeight
                : "normal"
            }}
          >
            {this.props.text}
          </Text>
        </ImageBackground>
      </TouchableOpacity>
    );
  }
}
