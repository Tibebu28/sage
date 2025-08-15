import { FlatList, Text, View } from 'react-native';
export default function LazyLoad(){
    const data = Array.from({length: 1000},(_, i) => ({id: i.toString(), name: `Item ${i + 1}` }));
    console.log(data);
    return (
        <View style={{ flex: 1}}>
             
            <FlatList
                data={data}
                horizontal
                
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                 <Text style={{ padding: 20 }}>
                    {item.name}
                </Text>
                )}
            />
        </View>
    );
}