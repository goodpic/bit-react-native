import * as React from 'react'
import { ReactElement } from 'react'
import { Image, ImageSourcePropType, Text, TextStyle, View, ViewStyle, TouchableOpacity } from 'react-native'

interface Props {
  children?: ReactElement
  fontSize?: number
  height?: number
  imageHeight?: number
  imageSource: ImageSourcePropType | null
  imageWidth?: number
  onPress: () => void
  containerStyle?: ViewStyle
  textStyle?: TextStyle,
  title: string,
}

const ImageCard = (props: Props) => {
  const fontSize = props.fontSize ? props.fontSize : 16
  const result =
    <View style={{ ...styles.cardStyle, ...props.containerStyle, height: props.height || 200 }}>
      {props.imageSource &&
        <Image
          style={{ width: props.imageWidth, height: props.imageHeight }}
          source={props.imageSource} />
      }
      <Text
        accessibilityRole='link'
        style={{...styles.title, width: props.imageWidth, fontSize, ...props.textStyle }}
      >{props.title}</Text>
      {props.children}
    </View>
  if (!props.onPress) return result
  return (
    <TouchableOpacity onPress={props.onPress} accessibilityRole='imagebutton'>
      {result}
    </TouchableOpacity>
  )
}

const styles = {
  cardStyle: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 6,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginBottom: 16,
  },
  title : {
    textAlign: 'center' as 'center',
    color: 'rgba(25, 25, 25, 0.8)',
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 8,
    paddingRight: 8,
  },
}

export { ImageCard }
