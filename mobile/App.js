import 'intl';
// Essa biblioteca é usada para formatar os dados para real R$
import 'intl/locale-data/jsonp/pt-BR';

import * as React from 'react';
// import { Text, View } from 'react-native';

import Routes from './src/routes.js';

export default function App() {
  return (
    // <View>
    //   <Text>Hello Omnistach</Text>
    // </View>
    <Routes />
  );
}


