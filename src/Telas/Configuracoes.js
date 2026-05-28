import React, { useState } from 'react';
import { View, Text, Switch, Slider, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import ConfiguracoesStyles from '../styleSheet/ConfiguracoesStyles';

export default function Configuracoes() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [themeColor, setThemeColor] = useState('azul');

  const getThemeColor = () => {
    switch(themeColor) {
      case 'azul': return '#2196f3';
      case 'verde': return '#4caf50';
      case 'roxo': return '#9c27b0';
      default: return '#2196f3';
    }
  };

  return (
    <View style={ConfiguracoesStyles.container}>
      <Text style={ConfiguracoesStyles.title}>Configurações</Text>

      <View style={ConfiguracoesStyles.section}>
        <Text style={ConfiguracoesStyles.sectionTitle}>Notificações</Text>
        <View style={ConfiguracoesStyles.switchContainer}>
          <Text style={ConfiguracoesStyles.label}>Receber notificações</Text>
          <Switch
            value={notifications}
            onValueChange={setNotifications}
            trackColor={{ false: '#767577', true: getThemeColor() }}
          />
        </View>
      </View>

      <View style={ConfiguracoesStyles.section}>
        <Text style={ConfiguracoesStyles.sectionTitle}>Aparência</Text>
        <View style={ConfiguracoesStyles.switchContainer}>
          <Text style={ConfiguracoesStyles.label}>Modo escuro</Text>
          <Switch
            value={darkMode}
            onValueChange={setDarkMode}
            trackColor={{ false: '#767577', true: getThemeColor() }}
          />
        </View>
        
        <View style={ConfiguracoesStyles.sliderContainer}>
          <Text style={ConfiguracoesStyles.label}>Tamanho da fonte: {fontSize}px</Text>
          <Slider
            minimumValue={12}
            maximumValue={24}
            step={1}
            value={fontSize}
            onValueChange={setFontSize}
            minimumTrackTintColor={getThemeColor()}
            maximumTrackTintColor="#ddd"
          />
        </View>

        <Text style={[ConfiguracoesStyles.label, { marginTop: 15 }]}>Cor do tema</Text>
        <View style={ConfiguracoesStyles.pickerContainer}>
          <Picker selectedValue={themeColor} onValueChange={setThemeColor}>
            <Picker.Item label="Azul" value="azul" />
            <Picker.Item label="Verde" value="verde" />
            <Picker.Item label="Roxo" value="roxo" />
          </Picker>
        </View>

        <View style={[ConfiguracoesStyles.themePreview, { backgroundColor: getThemeColor() + '20' }]}>
          <Text style={[ConfiguracoesStyles.themePreviewText, { color: getThemeColor(), fontSize: fontSize }]}>
            Pré-visualização do tema
          </Text>
        </View>
      </View>

      <View style={ConfiguracoesStyles.section}>
        <Text style={ConfiguracoesStyles.sectionTitle}>Informações</Text>
        <View style={ConfiguracoesStyles.row}>
          <Text style={ConfiguracoesStyles.label}>Versão do app</Text>
          <Text style={ConfiguracoesStyles.value}>1.0.0</Text>
        </View>
        <View style={ConfiguracoesStyles.row}>
          <Text style={ConfiguracoesStyles.label}>Notificações</Text>
          <Text style={ConfiguracoesStyles.value}>{notifications ? 'Ativadas' : 'Desativadas'}</Text>
        </View>
        <View style={ConfiguracoesStyles.row}>
          <Text style={ConfiguracoesStyles.label}>Modo escuro</Text>
          <Text style={ConfiguracoesStyles.value}>{darkMode ? 'Ativado' : 'Desativado'}</Text>
        </View>
      </View>
    </View>
  );
}