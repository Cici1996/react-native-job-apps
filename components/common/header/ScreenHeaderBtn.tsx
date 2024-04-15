import { Image, TouchableOpacity, ImageSourcePropType,DimensionValue } from "react-native"
import styles from "./screenheader.style"

interface ScreenHeaderBtnProps {
  dimension: DimensionValue,
  handlePress?: () => void,
  iconUrl: ImageSourcePropType
}

const ScreenHeaderBtn = ({ dimension, handlePress, iconUrl }: ScreenHeaderBtnProps) => {

  const style = styles(dimension)

  return (
    <TouchableOpacity style={style.btnContainer} onPress={handlePress}>
      <Image source={iconUrl} resizeMode="cover" style={style.btnImg} />
    </TouchableOpacity>
  )
}

export default ScreenHeaderBtn