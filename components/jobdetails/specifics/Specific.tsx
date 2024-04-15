import { View, Text } from 'react-native'
import React from 'react'
import styles from './specifics.style'

interface SpecificProps {
    title: string,
    points: any
}

const Specific = ({ title, points }: SpecificProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.pointsContainer}>
                {(points ?? []).map((item: any, index: number) => (
                    <View style={styles.pointWrapper} key={item + index}>
                        <View style={styles.pointDot} />
                        <Text style={styles.pointText}>{item}</Text>
                    </View>
                ))}
            </View>
        </View>
    )
}

export default Specific