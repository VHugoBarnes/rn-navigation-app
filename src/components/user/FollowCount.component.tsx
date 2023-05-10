import React from "react";
import { LayoutChangeEvent, View } from "react-native";
import Text from "../ui/Text.component";
import i18n from "../../i18n/i18n";
import { useLanguage } from "../../contexts/LanguageContext";

interface FollowCountProps {
  count: number,
  isFollowers?: boolean,
  isFollowing?: boolean,

}

const FollowCount: React.FC<FollowCountProps> = (props) => {
  const { language } = useLanguage();
  i18n.locale = language;

  const [text1Width, setText1Width] = React.useState(0);
  const [text2Width, setText2Width] = React.useState(0);

  const handleText1Layout = (event: LayoutChangeEvent) => {
    if (event.nativeEvent.layout) {
      const { width } = event.nativeEvent.layout;
      setText1Width(width);
    }
  };

  const handleText2Layout = (event: LayoutChangeEvent) => {
    if (event.nativeEvent.layout) {
      const { width } = event.nativeEvent.layout;
      setText2Width(width);
    }
  };

  const SEPARATION = 2;
  const viewWidth = text1Width + text2Width + SEPARATION;

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: viewWidth,
        marginRight: 5,
      }}
    >
      <Text bold onLayout={handleText1Layout}>
        {props.count}
      </Text>
      <Text onLayout={handleText2Layout} capitalize secondary>
        {props.isFollowers && i18n.t("followers")}
        {props.isFollowing && i18n.t("following")}
      </Text>
    </View>
  );
};

export default FollowCount;
