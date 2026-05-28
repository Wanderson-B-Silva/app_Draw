import React from 'react';
import { View, Text, Image } from 'react-native';
import HomeStyles from '../styleSheet/HomeStyles';

export default function Home() {
  return (
    <View style={HomeStyles.container}>
      <View style={HomeStyles.card}>
        <Image
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1674/1674298.png' }}
          style={HomeStyles.image}
        />
        <Text style={HomeStyles.title}>Smartphone Hub</Text>
        <Text style={HomeStyles.subtitle}>
          Seu catálogo completo de smartphones
        </Text>
        <Text style={HomeStyles.imageText}>
          Deslize o menu ao lado para navegar
        </Text>
      </View>
    </View>
  );
}