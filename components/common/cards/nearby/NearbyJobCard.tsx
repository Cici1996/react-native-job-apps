import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { checkImageURL } from '../../../../utils';
import style from './nearbyjobcard.style'

interface NearbyJobCardPropd {
    handleCardPress:() => void,
    job:any
}

const NearbyJobCard = ({job,handleCardPress}:NearbyJobCardPropd) => {
    const itemData = job;
    return (
        <TouchableOpacity style={style.container}
            onPress={handleCardPress}>
            <TouchableOpacity style={style.logoContainer}>
                <Image source={{ uri: checkImageURL(itemData?.employer_logo) ? itemData?.employer_logo : process.env.EXPO_PUBLIC_DEFAULT_LOGO }}
                    resizeMode='contain'
                    style={style.logoImage} />
            </TouchableOpacity>
            <View style={style.textContainer}>
                <Text style={style.jobName} numberOfLines={1}>
                    {itemData?.job_title}
                </Text>
                <Text style={style.jobType}>{itemData?.job_employment_type}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default NearbyJobCard