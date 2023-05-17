import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {
  useQuery,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query';
import BlogList from './src/pages/BlogList';
import DetBlog from './src/pages/DetBlog';
import MyContext from './src/states/selectedItem';

const MainSatck = createNativeStackNavigator();
const App = () => {
  const queryClient = new QueryClient();
  const [data, setData] = useState('Hello, world!');

  return (
    <MyContext.Provider value={{data, setData}}>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <MainSatck.Navigator
            screenOptions={{
              headerShown: false,
            }}>
            <MainSatck.Screen name="BlogList" component={BlogList} />
            <MainSatck.Screen name="DetBlog" component={DetBlog} />
          </MainSatck.Navigator>
        </NavigationContainer>
      </QueryClientProvider>
    </MyContext.Provider>
  );
};

export default App;
