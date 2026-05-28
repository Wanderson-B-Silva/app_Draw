import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import CompararStyles from '../styleSheet/CompararStyles';

const phonesData = {
  'iPhone 15 Pro': { brand: 'Apple', battery: '3274 mAh', camera: '48MP', display: '6.1"' },
  'Galaxy S24 Ultra': { brand: 'Samsung', battery: '5000 mAh', camera: '200MP', display: '6.8"' },
  'Pixel 8 Pro': { brand: 'Google', battery: '5050 mAh', camera: '50MP', display: '6.7"' },
  'Xiaomi 14': { brand: 'Xiaomi', battery: '4610 mAh', camera: '50MP', display: '6.36"' },
};

export default function Comparar() {
  const [phone1, setPhone1] = useState('iPhone 15 Pro');
  const [phone2, setPhone2] = useState('Galaxy S24 Ultra');

  const phone1Data = phonesData[phone1];
  const phone2Data = phonesData[phone2];

  const getWinner = (value1, value2) => {
    if (!value1 || !value2) return null;
    const num1 = parseInt(value1) || 0;
    const num2 = parseInt(value2) || 0;
    if (num1 > num2) return phone1;
    if (num2 > num1) return phone2;
    return 'Empate';
  };

  return (
    <View style={CompararStyles.container}>
      <Text style={CompararStyles.title}>Comparar Smartphones</Text>
      
      <Text style={CompararStyles.pickerLabel}>Smartphone 1</Text>
      <View style={CompararStyles.pickerContainer}>
        <Picker selectedValue={phone1} onValueChange={setPhone1}>
          {Object.keys(phonesData).map(phone => (
            <Picker.Item key={phone} label={phone} value={phone} />
          ))}
        </Picker>
      </View>

      <Text style={CompararStyles.pickerLabel}>Smartphone 2</Text>
      <View style={CompararStyles.pickerContainer}>
        <Picker selectedValue={phone2} onValueChange={setPhone2}>
          {Object.keys(phonesData).map(phone => (
            <Picker.Item key={phone} label={phone} value={phone} />
          ))}
        </Picker>
      </View>

      <View style={CompararStyles.resultContainer}>
        <Text style={CompararStyles.resultTitle}>Comparação</Text>
        
        <View style={CompararStyles.comparisonRow}>
          <Text style={CompararStyles.comparisonLabel}>Marca</Text>
          <Text style={CompararStyles.comparisonValue}>
            {phone1Data.brand} vs {phone2Data.brand}
          </Text>
        </View>
        
        <View style={CompararStyles.comparisonRow}>
          <Text style={CompararStyles.comparisonLabel}>Bateria</Text>
          <Text style={CompararStyles.comparisonValue}>
            {phone1Data.battery} vs {phone2Data.battery}
            <Text style={CompararStyles.winnerBadge}>
              {getWinner(phone1Data.battery, phone2Data.battery) === phone1 ? ' 🏆' : 
               getWinner(phone1Data.battery, phone2Data.battery) === phone2 ? ' 🏆' : ''}
            </Text>
          </Text>
        </View>
        
        <View style={CompararStyles.comparisonRow}>
          <Text style={CompararStyles.comparisonLabel}>Câmera</Text>
          <Text style={CompararStyles.comparisonValue}>
            {phone1Data.camera} vs {phone2Data.camera}
            <Text style={CompararStyles.winnerBadge}>
              {getWinner(phone1Data.camera, phone2Data.camera) === phone1 ? ' 🏆' : 
               getWinner(phone1Data.camera, phone2Data.camera) === phone2 ? ' 🏆' : ''}
            </Text>
          </Text>
        </View>
        
        <View style={CompararStyles.comparisonRow}>
          <Text style={CompararStyles.comparisonLabel}>Tela</Text>
          <Text style={CompararStyles.comparisonValue}>
            {phone1Data.display} vs {phone2Data.display}
            <Text style={CompararStyles.winnerBadge}>
              {getWinner(phone1Data.display, phone2Data.display) === phone1 ? ' 🏆' : 
               getWinner(phone1Data.display, phone2Data.display) === phone2 ? ' 🏆' : ''}
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
}