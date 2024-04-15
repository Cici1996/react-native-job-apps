import { View, Text, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native'
import React, { useState } from 'react'
import styles from './popularjobs.style'
import { useRouter } from 'expo-router'
import { COLORS, SIZES } from '../../../constants'
import PopularjobCard from '../../common/cards/popular/popularjobcard'
import { useFetch } from '../../../hook/useFetch'

const Popularjobs = () => {
  const router = useRouter();
  const { data, isLoading, error } = useFetch('search', {
    query: 'React developer',
    num_pages: 1
  })
  const [selectedJob, setSelectedJob] = useState()
  const handleCardPress = (item: any) => {
    router.push(`/job-details/${item?.job_id}`)
    setSelectedJob(item?.job_id)
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size={"large"} color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <PopularjobCard
                selectedJob={selectedJob ?? ""}
                item={item}
                handleCardPress={handleCardPress} />
            )}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ columnGap: SIZES.medium, paddingBottom: SIZES.xxSmall, paddingLeft: SIZES.xxSmall }}
            horizontal />
        )}
      </View>
    </View>
  )
}

export default Popularjobs