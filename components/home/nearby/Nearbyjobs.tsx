import { View, Text, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native'
import React from 'react'
import styles from './nearbyjobs.style'
import { useRouter } from 'expo-router'
import { COLORS } from '../../../constants'
import { useFetch } from '../../../hook/useFetch'
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard'

const Nearbyjobs = () => {
  const router = useRouter();
  const {data,isLoading,error} = useFetch('search',{
    query:'React developer',
    num_pages:1
  })
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby Jobs</Text>
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
          (data ?? []).map((item) => (
            <NearbyJobCard
            job={item}
            key={`neaby-job-${item?.job_id}`}
            handleCardPress={() => router.push(`/job-details/${item?.job_id}`)}
            />
          ))
        )}
      </View>
    </View>
  )
}

export default Nearbyjobs