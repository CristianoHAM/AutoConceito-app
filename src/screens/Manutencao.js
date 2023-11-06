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

import ManutecoesList from "../data/ManutecoesList";
import CardVeicleManutecoes from "../components/CardVeicleManutencoes";
import CardManutecoes from "../components/CardManutecoes";

const ManutençõesScreen = ({ navigation }) => (
  <SafeAreaView style={styles.container}>
    <SectionList
      sections={ManutecoesList}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item, index) => item + index}
      renderSectionHeader={({ section: { brand, model, year, placa } }) => (
        <CardVeicleManutecoes
          brand={brand}
          model={model}
          year={year}
          placa={placa}
        />
      )}
      renderItem={({ item }) => <CardManutecoes item={item} />}
    />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //paddingTop: StatusBar.currentHeight,
    //marginHorizontal: ,
    backgroundColor: "#c2c2c2",
    paddingBottom: 80,
  },
});

export default ManutençõesScreen;
