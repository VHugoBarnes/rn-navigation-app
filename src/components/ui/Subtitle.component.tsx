import React from "react";
import { Text } from "react-native";

interface SubtitleProps {
  children: React.ReactNode,
}

const Subtitle: React.FC<SubtitleProps> = ({ children }) => {
  return (
    <Text>
      {children}
    </Text>
  );
};

export default Subtitle;
