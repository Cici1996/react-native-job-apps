import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import styleReact from './tabs.style'
import { SIZES } from '../../../constants'

interface TabProps {
  tabs: string[]
  activeTab: string
  setActiveTab: any
}

interface TabButtonProps {
  name: string
  activeTab: string
  onHandleSearchType?: () => void
}

const TabButton = ({ name, activeTab, onHandleSearchType }: TabButtonProps) => {
  const style = styleReact(name, activeTab)
  return (
    <TouchableOpacity style={style.btn}
      onPress={onHandleSearchType}>
      <Text style={style.btnText}>{name}</Text>
    </TouchableOpacity>
  )
}

const Tabs = ({ tabs, activeTab, setActiveTab }: TabProps) => {
  const styleMain = styleReact("", activeTab)

  return (
    <View style={styleMain.container}>
      <FlatList
        data={tabs}
        renderItem={({ item }) => (
          <TabButton
            name={item}
            activeTab={activeTab}
            onHandleSearchType={() => setActiveTab(item)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item}
        contentContainerStyle={{ columnGap: SIZES.small / 2 }}
      />
    </View>
  )
}

export default Tabs