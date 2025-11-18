import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {OnBoarding} from './screens/onBoarding';

export default function App() {
  return (
    <View  style={{flex:1}}> 
    {/* style={styles.container} */}
        <OnBoarding/>
      <StatusBar style="auto" />
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
