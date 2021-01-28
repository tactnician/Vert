import React, { useState } from 'react'
import { View, Text, TextInput } from 'react-native'

const FormTemplate = () => {
    const [value, onChangeText] = useState("Placeholder")
    return (
        <View>
            <Text>Template</Text>
            <TextInput 
                onChangeText = {text => onChangeText(text)}
                value = {value}
            />
        </View>
    )
}

export default FormTemplate
