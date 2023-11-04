import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
  StatusBar,
  Button,
} from "react-native";
const dataManuteção = [
  {
    id: "1",
    titulo: "Troca de oleo",
    kmFeito: "13000",
    KmFutura: "16000",
  },
  {
    id: "2",
    titulo: "Troca do filtro de oleo",
    kmFeito: "13000",
    KmFutura: "19000",
  },
  {
    id: "3",
    titulo: "Troca Correia de acessorios",
    kmFeito: "13000",
    KmFutura: "23000",
  },
];
const DATA = [
  {
    title: "Honda CB 500F 2021",
    data: [dataManuteção[0], dataManuteção[1], dataManuteção[2]],
  },
  {
    title: "Yamaha MT-07 2022",
    data: [dataManuteção[0], dataManuteção[1], dataManuteção[2]],
  },
  {
    title: "Harley-Davidson 883 2021",
    data: [dataManuteção[0], dataManuteção[1], dataManuteção[2]],
  },
];

const SeparatorItem = () => {
  return (
    <View style={{ height: 1, width: "100%", backgroundColor: "#a0a0a0" }} />
  );
};
const ManutençõesScreen = ({ navigation }) => (
  <SafeAreaView style={styles.container}>
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.headerList}>{title}</Text>
      )}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text style={styles.title}>{item.titulo}</Text>
          <View style={styles.labelKM}>
            <Text style={styles.label}>Feito com:</Text>
            <View style={styles.labelValue}>
              <Text style={styles.km}>{item.kmFeito}</Text>
              <Text style={styles.label}>km</Text>
            </View>
          </View>
          <SeparatorItem></SeparatorItem>
          <View style={styles.labelKM}>
            <Text style={styles.label}>Realiza novamente com:</Text>
            <View style={styles.labelValue}>
              <Text style={styles.km}>{item.KmFutura}</Text>
              <Text style={styles.label}>km</Text>
            </View>
          </View>
        </View>
      )}
    />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //paddingTop: StatusBar.currentHeight,
    //marginHorizontal: ,
  },
  item: {
    backgroundColor: "#e9e9e9",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 15,
    borderRadius: 8,
  },
  headerList: {
    fontSize: 32,
    backgroundColor: "#fff",
    marginHorizontal: 10,
    marginTop: 10,
  },
  title: {
    fontSize: 24,
    marginBottom: 5,
  },
  header: {
    paddingTop: 35,
    backgroundColor: "blue",
    paddingVertical: 8,
  },
  labelKM: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  labelValue: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    columnGap: 5,
  },
  km: { fontSize: 19 },
  button: {},
});

export default ManutençõesScreen;
