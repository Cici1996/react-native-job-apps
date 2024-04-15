import { View, Text, TouchableOpacity, Image, Linking } from 'react-native'
import React from 'react'
import styles from './footer.style'
import { icons } from '../../../constants'

interface JobFooterProps {
    url: string
}

const Footer = ({ url }: JobFooterProps) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.likeBtn}>
                <Image source={icons.heartOutline}
                    resizeMode='contain'
                    style={styles.likeBtnImage} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.applyBtn}
            onPress={() => Linking.openURL(url)}>
                <Text style={styles.applyBtnText}>Apply for this job</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Footer