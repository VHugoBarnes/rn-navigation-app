import React from "react";
import { Text as RNText } from "react-native";

interface TextProps {
  children: React.ReactNode;
  large?: boolean,
  bold?: boolean,
  secondary?: boolean,
  onLayout?: (event: any) => void;
  capitalize?: boolean
}

const Text: React.FC<TextProps> = (props) => {
  return (
    <RNText
      onLayout={props.onLayout}
      style={{
        fontSize: props?.large ? 24 : 16,
        color: props?.secondary ? "#9CA3AF" : "#1f2937",
        fontWeight: props?.bold ? "bold" : "normal",
        textTransform: props.capitalize ? "capitalize" : "none",
      }}
      onTextLayout={props.onLayout}
    >
      {props.children}
    </RNText>
  );
};

export default Text;
