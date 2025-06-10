import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Telas simuladas
function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📰 Últimas Notícias</Text>
    </View>
  );
}

function CategoriesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📂 Categorias de Notícias</Text>
    </View>
  );
}

function BookmarksScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🔖 Favoritos</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>👤 Meu Perfil</Text>
    </View>
  );
}

// Navegação por abas
const Tab = createBottomTabNavigator();

function Buttomz() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            let iconName;
            switch (route.name) {
              case 'Início':
                iconName = 'home-outline';
                break;
              case 'Categorias':
                iconName = 'grid-outline';
                break;
              case 'Favoritos':
                iconName = 'bookmark-outline';
                break;
              case 'Perfil':
                iconName = 'person-outline';
                break;
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#007AFF',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Início" component={HomeScreen} />
        <Tab.Screen name="Categorias" component={CategoriesScreen} />
        <Tab.Screen name="Favoritos" component={BookmarksScreen} />
        <Tab.Screen name="Perfil" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
  },
});

export default Buttomz;