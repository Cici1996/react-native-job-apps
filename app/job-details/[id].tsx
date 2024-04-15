import { View, Text, SafeAreaView, ScrollView, RefreshControl, ActivityIndicator } from 'react-native'
import React, { useCallback, useState } from 'react'
import { useFetch } from '../../hook/useFetch'
import { Stack, useGlobalSearchParams } from 'expo-router'
import { COLORS, SIZES, icons } from '../../constants'
import { About, Company, JobFooter, JobTabs, ScreenHeaderBtn, Specific } from '../../components'
import { useRouter } from 'expo-router'

const tabs = ["About", "Qualifications", "Responsibilities"]
const JobDetail = () => {
  const params = useGlobalSearchParams()
  const router = useRouter();
  const [refreshing, setRefreshing] = useState<boolean>(false)
  const [activeTab, setActiveTab] = useState(tabs[0])

  const { data, isLoading, error, refetch } = useFetch('job-details', {
    job_id: params.id
  })

  const onRefresh = useCallback(() => {
    setRefreshing(true)
    refetch()
    setRefreshing(false)
  }, [])

  const displayTabContent = () => {
    switch (activeTab) {
      case "Qualifications":
        return <Specific
          title="Qualifications"
          points={data[0]?.job_highlights?.Qualifications ?? ['N/A']} />
      case "About":
        return <About info={data[0]?.job_description ?? "No data provided"} />
      case "Responsibilities":
        return <Specific
          title="Responsibilities"
          points={data[0]?.job_highlights?.Responsibilities ?? ['N/A']} />
      default:
        break;
    }
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen options={{
        headerStyle: { backgroundColor: COLORS.lightWhite },
        headerShadowVisible: false,
        headerBackVisible: false,
        headerTitle: "",
        headerLeft: () => (
          <ScreenHeaderBtn
            iconUrl={icons.left}
            dimension="60%"
            handlePress={() => router.back()}
          />
        ),
        headerRight: () => (
          <ScreenHeaderBtn
            iconUrl={icons.share}
            dimension="60%"
          />
        )
      }} />
      <>
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        >
          {isLoading
            ? <ActivityIndicator size={"large"} color={COLORS.primary} />
            : error
              ? (
                <Text>Something went wrong</Text>
              )
              : data.length === 0
                ? <Text>No Data</Text>
                : (
                  <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
                    <Company
                      companyLogo={data[0]?.employer_logo}
                      jobTitle={data[0]?.job_title}
                      companyName={data[0]?.employer_name}
                      location={data[0]?.job_country}
                    />
                    <JobTabs
                      tabs={tabs}
                      activeTab={activeTab}
                      setActiveTab={setActiveTab}
                    />
                    {displayTabContent()}
                  </View>
                )}
        </ScrollView>
        <JobFooter url={data[0]?.job_google_link ?? 'https://careers.google.com/jobs/results/'} />
      </>
    </SafeAreaView>
  )
}

export default JobDetail