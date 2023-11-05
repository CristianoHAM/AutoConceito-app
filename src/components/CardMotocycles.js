import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
} from "react-native";
import React, { useState } from "react";

const CardMotocycles = ({ item, update }) => {
  return (
    <View style={styles.item}>
      <View style={styles.cardViewLeft}>
        <Image source={{ uri: item.img }} style={styles.image} />
        <View style={styles.cardViewDown}>
          <TouchableOpacity style={styles.btAtualizar} onPress={update}>
            <Text style={styles.buttonText}>Atualizar</Text>
          </TouchableOpacity>
          <View style={styles.tkm}>
            <Text style={styles.km}>{item.km}</Text>
            <Text style={styles.label}>km</Text>
          </View>
        </View>
      </View>
      <View style={styles.cardViewRight}>
        <View style={styles.cardViewUp}>
          <Text style={styles.name}>
            {item.brand}
            {"\n"}
            {item.model}
            {"\n"}
            {item.year}
          </Text>
        </View>
        <View style={styles.placa}>
          <View style={styles.placaTarja}>
            <Text numberOfLines={5} style={styles.txPlacaTarja}>
              Brasil
            </Text>
          </View>
          <Text numberOfLines={5} style={styles.txPlaca}>
            PYX-1020
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "white",
    justifyItems: "center",
    justifyContent: "space-between",
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginHorizontal: 10,
    marginTop: 20,
    width: 340,
    height: 230,
    rowGap: 10,
  },
  placa: {
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 4,
    borderRadius: 5,
    textAlign: "center",
    justifyContent: "center",
    justifyItems: "center",
  },
  txPlaca: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
  },
  placaTarja: {
    backgroundColor: "blue",
    height: 15,
    textAlign: "center",
    justifyContent: "center",
    justifyItems: "center",
  },
  txPlacaTarja: {
    color: "white",
    textAlign: "center",
    fontSize: 8,
    fontWeight: "bold",
  },
  cardViewLeft: {
    flexDirection: "column",
    justifyContent: "flex-start",
    rowGap: 10,
  },
  cardViewRight: {
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  cardViewUp: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    height: 150,
  },
  cardViewDown: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    columnGap: 5,
  },
  tkm: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  btAtualizar: {
    backgroundColor: "#58be5a",
    borderRadius: 10,
    paddingVertical: 2,
    paddingHorizontal: 5,
  },
  image: {
    borderRadius: 20,
    width: 180,
    height: 160,
  },
  km: { fontSize: 19 },
  name: {
    fontSize: 29,
    fontWeight: "bold",
    color: "black",
    width: 137,
  },
  buttonText: {
    fontSize: 17,
  },
});

export default CardMotocycles;
