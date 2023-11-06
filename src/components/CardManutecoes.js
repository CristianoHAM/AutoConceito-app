import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
} from "react-native";
import React, { useState } from "react";

const SeparatorItem = () => {
  return (
    <View style={{ height: 1, width: "100%", backgroundColor: "#a0a0a0" }} />
  );
};

const CardManutecoes = ({ item }) => {
  return (
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
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginVertical: 2,
    marginHorizontal: 10,
    borderRadius: 10,
    // borderColor: "black",
    // borderWidth: 2,
  },

  title: {
    fontSize: 22,
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
});

export default CardManutecoes;
