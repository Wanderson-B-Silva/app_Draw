import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Image, TouchableOpacity } from 'react-native';
import CatalogoStyles from '../styleSheet/CatalogoStyles';

const phones = [
  { id: '1', name: 'iPhone 15 Pro', brand: 'Apple', price: 'R$ 7.999', image: 'https://cdn-icons-png.flaticon.com/512/1822/1822892.png' },
  { id: '2', name: 'Galaxy S24 Ultra', brand: 'Samsung', price: 'R$ 6.999', image: 'https://cdn-icons-png.flaticon.com/512/1822/1822892.png' },
  { id: '3', name: 'Pixel 8 Pro', brand: 'Google', price: 'R$ 5.499', image: 'https://cdn-icons-png.flaticon.com/512/1822/1822892.png' },
  { id: '4', name: 'Xiaomi 14', brand: 'Xiaomi', price: 'R$ 4.299', image: 'https://cdn-icons-png.flaticon.com/512/1822/1822892.png' },
  { id: '5', name: 'OnePlus 12', brand: 'OnePlus', price: 'R$ 5.299', image: 'https://cdn-icons-png.flaticon.com/512/1822/1822892.png' },
];

export default function Catalogo() {
  const [search, setSearch] = useState('');
  
  const filteredPhones = phones.filter(phone =>
    phone.name.toLowerCase().includes(search.toLowerCase())
  );

  const renderItem = ({ item }) => (
    <View style={CatalogoStyles.phoneCard}>
      <Image source={{ uri: item.image }} style={CatalogoStyles.phoneImage} />
      <View style={CatalogoStyles.phoneInfo}>
        <Text style={CatalogoStyles.phoneName}>{item.name}</Text>
        <Text style={CatalogoStyles.phoneBrand}>{item.brand}</Text>
        <Text style={CatalogoStyles.phonePrice}>{item.price}</Text>
      </View>
    </View>
  );

  return (
    <View style={CatalogoStyles.container}>
      <Text style={CatalogoStyles.title}>Catálogo de Smartphones</Text>
      <View style={CatalogoStyles.searchContainer}>
        <TextInput
          style={CatalogoStyles.input}
          placeholder="🔍 Pesquisar smartphone..."
          value={search}
          onChangeText={setSearch}
        />
      </View>
      <FlatList
        data={filteredPhones}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={CatalogoStyles.flatlistContent}
      />
    </View>
  );
}