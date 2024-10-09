import { useState } from 'react';
import { SafeAreaView, StyleSheet, Switch, Text } from 'react-native';
import { myColors } from '../src/styles/Colors';
import { ThemeContext } from '../src/Context/ThemeContext';
import MyKeyboard from '../src/components/Mykeyboard';



const CalculatorScreen = () => {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={theme}>
      <SafeAreaView style={theme === 'light' ? styles.container : [styles.container, {backgroundColor: 'green'}]}>
        <Switch
          value={theme === 'blue'}
          onValueChange={() => setTheme(theme === 'light' ? 'blue' : 'light')}
        />
        <MyKeyboard />
      </SafeAreaView>
    </ThemeContext.Provider>
  );
}
export default CalculatorScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColors.light,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});