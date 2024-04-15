import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native'
import React, { useState } from 'react'
import styles from './welcome.style'
import { SIZES, icons } from '../../../constants'
import { useRouter } from 'expo-router'
const jobTypes = ["Full-time", "Part-time", "Contractor"]

interface WelcomeProps{
  searchTerm:string,
  setSearchTerm:any,
  handleClick:() => void
}

const Welcome = ({searchTerm,setSearchTerm,handleClick}:WelcomeProps) => {
  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState('Full-time')
  const style = styles("sample", "sample")
  return (
    <View>
      <View style={style.container}>
        <Text style={style.userName}>Hello Cici</Text>
        <Text style={style.welcomeMessage}>Find your perfect Job</Text>
      </View>
      <View style={style.searchContainer}>
        <View style={style.searchWrapper}>
          <TextInput style={style.searchInput}
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
            placeholder='What are you looking for?' />
        </View>
        <TouchableOpacity style={style.searchBtn} onPress={handleClick}>
          <Image
            source={icons.search}
            resizeMode='contain'
            style={style.searchBtnImage}
          />
        </TouchableOpacity>
      </View>
      <View style={style.tabsContainer}>
        <FlatList
          data={jobTypes}
          renderItem={({ item }) => {
            const styleChild = styles(activeJobType, item)
            return (
              <TouchableOpacity style={styleChild.tab} onPress={() => {
                setActiveJobType(item)
                router.push(`/search/${item}`)
              }}>
                <Text style={styleChild.tabText}>{item}</Text>
              </TouchableOpacity>
            )
          }}
          keyExtractor={item => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
        />
      </View>
    </View>
  )
}

export default Welcome