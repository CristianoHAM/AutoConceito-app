import React from "react";
import { View, Text, VirtualizedList, StyleSheet, Image } from "react-native";

const motocyclesList = [
  {
    id: 33,
    brand: "Honda",
    model: "CB 500F",
    title: "A moto perfeita para o dia a dia",
    year: 2021,
    img: "https://cdn.motor1.com/images/mgl/lZ4Kl/s3/honda-cb-500f-e-cb-500x-2020.jpg",
  },
  {
    id: 34,
    brand: "Yamaha",
    model: "MT-07",
    title: "A moto com o melhor custo-benefício",
    year: 2022,
    img: "https://motonewsbrasil.com/wp-content/uploads/2021/11/2022-yamaha-mt-07-cyan-storm-front-right.jpg",
  },
  {
    id: 35,
    brand: "Harley-Davidson",
    model: "Sportster Iron 883",
    title: "A moto clássica da Harley-Davidson",
    year: 2021,
    img: "https://ultimatemotorcycling.com/wp-content/uploads/2021/02/2021-Harley-Davidson-Sportster-Iron-883-Buyers-Guide-cruiser-motorcycle-1.jpg",
  },

  {
    id: 36,
    brand: "Kawasaki",
    model: "Z900",
    title: "A moto esportiva da Kawasaki",
    year: 2021,
    img: "https://www.motorede.com.br/wp-content/uploads/2020/05/z900-2021-00-1024x768.jpg",
  },
];

const renderItem = ({ item }) => (
  <View style={styles.item}>
    <Image source={{ uri: item.img }} style={styles.image} />
    <View style={styles.content}>
      <Text style={styles.name}>
        {item.brand} {item.model} - {item.year}
      </Text>
      <Text numberOfLines={5} style={styles.title}>
        {item.title}
      </Text>
    </View>
  </View>
);
const SeparatorItem = () => {
  return (
    <View style={{ height: 1, width: "100%", backgroundColor: "#a0a0a0" }} />
  );
};

const getItemHeight = () => 5; // Defina a altura desejada para cada item

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <VirtualizedList
        ItemSeparatorComponent={SeparatorItem}
        data={motocyclesList}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        getItem={(_, index) => motocyclesList[index]}
        getItemCount={() => motocyclesList.length}
        getItemHeight={getItemHeight}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  item: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    justifyItems: "center",
    justifyContent: "space-between",
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  content: {
    flex: 1,
    marginLeft: 16,
  },
  image: {
    borderRadius: 20,
    width: 170,
    height: 150,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    marginBottom: 16,
  },
  title: {
    fontSize: 16,
    color: "#000",
  },
  header: {
    paddingTop: 35,
    backgroundColor: "blue",
    paddingVertical: 8,
  },
  headerTitle: {
    alignSelf: "center",
    fontSize: 36,
    fontWeight: "bold",
    color: "#FFF",
  },
});

export default HomeScreen;
