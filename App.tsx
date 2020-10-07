/**
 * @format
 */

import React, {FC} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';

import Header from './Header';

const App: FC = () => {
  return (
    <>
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Header />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
