import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Image, FlatList, SafeAreaView, } from 'react-native';
import TextInputMask from 'react-native-text-input-mask'
export default function App() {
  const mask = '+1 ([000]) [000]-[0000]';
  return (
    <View>
      <View style={{ padding: 130, paddingTop: 30, alignItems: 'center', justifyContent: 'space-between' }}>
        <View style={{ flexDirection: 'row' }}>
          <Image style={{ width: 50, height: 50, borderRadius: 20, paddingLeft: 10 }} source={require('./assets/lupa.png')} />
        </View>
        <View style={{ position: 'absolute', bottom: 0, alignSelf: 'center', alignItems: 'center' }}>
          <SafeAreaView style={styles.container}>
            <Text>testando</Text>
          </SafeAreaView>

        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
