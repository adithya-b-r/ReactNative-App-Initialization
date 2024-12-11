import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Stack } from 'expo-router'

const index = () => {
  return (
    <SafeAreaView>
      <View>
        <Text className='text-3xl w-full text-center underlin'>Welcome</Text>
      </View>
    </SafeAreaView>
  )
}

export default index

const styles = StyleSheet.create({})