import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './popularjobcard.style'
import { checkImageURL } from '../../../../utils';

interface PopularjobCardProps{
    item: any,
    selectedJob: string,
    handleCardPress: (itemData:any) => void
}

const PopularjobCard = ({item,selectedJob,handleCardPress}:PopularjobCardProps) => {
    const itemData = item;
    const style = styles(selectedJob, itemData)
    return (
        <TouchableOpacity style={style.container}
            onPress={() => handleCardPress(itemData)}>
            <TouchableOpacity style={style.logoContainer}>
                <Image source={{ uri: checkImageURL(itemData?.employer_logo) ? itemData?.employer_logo : process.env.EXPO_PUBLIC_DEFAULT_LOGO }}
                    resizeMode='contain'
                    style={style.logoImage} />
            </TouchableOpacity>
            <Text style={style.companyName} numberOfLines={1}>{itemData?.employer_name}</Text>
            <View style={style.infoContainer}>
                <Text style={style.jobName} numberOfLines={1}>
                    {itemData?.job_title}
                </Text>
                <Text style={style.location}>{itemData?.job_country}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default PopularjobCard