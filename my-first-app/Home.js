import react from 'react';
import { Text, View,Button } from "react-native";
import {useSelector, useDispatch} from 'react-redux';
import { increment, decrement } from './redux/counterSlice';

export default function Home() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <View style={{ padding: 20}}>
      <Text style={{ fontSize: 20 }}>Counter: {count}</Text>
      <Button title="Increment" onPress={() => dispatch(increment())} />
      <Button title="Decrement" onPress={() => dispatch(decrement())} />
    </View>
  );
}