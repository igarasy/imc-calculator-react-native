import React, { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import ResultImc from './ResultImc'
import styles from './style'

export default function Form() {
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [messageImc, setMessageImc] = useState('')
  const [imc, setImc] = useState('')
  const [textButton, setTextButton] = useState('Calcular')

  const imcCalculator = () => {
    return setImc(
      (
        Number(weight) /
        (((Number(height) / 100) * Number(height)) / 100)
      ).toFixed(2),
    )
  }

  const validationImc = () => {
    if (weight != '' && height != '') {
      imcCalculator()
      setHeight('')
      setWeight('')
      setMessageImc('Seu IMC é: ')
      setTextButton('Calcular Novamente')
      return
    }
    setImc('')
    setTextButton('Calcular')
    setMessageImc('Preencha o peso e a altura')
  }

  return (
    <View style={styles.formContext}>
      <View style={styles.form}>
        <Text style={styles.formLabel}>Altura em Cm</Text>
        <TextInput
        style={styles.input}
          onChangeText={setHeight}
          value={height}
          placeholder="Digite a altura"
          keyboardType="numeric"
        />
        <Text style={styles.formLabel}>Peso</Text>
        <TextInput
          style={styles.input}
          value={weight}
          onChangeText={setWeight}
          placeholder="Digite o peso"
          keyboardType="numeric"
        />
        <TouchableOpacity onPress={() => validationImc()} style={styles.buttonCalculator}> 
        <Text style={styles.textButtonCalculator}>{textButton}</Text>
        </TouchableOpacity>
      </View>
      <ResultImc messageResultImc={messageImc} resultImc={imc} />
    </View>
  )
}
