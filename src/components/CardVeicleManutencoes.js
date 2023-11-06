import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
} from "react-native";
import React, { useState } from "react";

const CardVeicleManutecoes = ({ brand, model, year, placa }) => {
  return (
    <View style={styles.conteiner}>
      <Text style={styles.title}>
        {brand} {model} {" - "}
        {year}
      </Text>

      <View style={styles.placa}>
        <View style={styles.placaTarja}>
          <Text numberOfLines={5} style={styles.txPlacaTarja}>
            Brasil
          </Text>
        </View>
        <Text numberOfLines={5} style={styles.txPlaca}>
          {placa}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "flex-start",
    marginHorizontal: 5,
    paddingHorizontal: 5,
    paddingVertical: 10,
    marginTop: 10,
    borderRadius: 15,
    // borderColor: "black",
    // borderWidth: 4,
    rowGap: 5,
    marginTop: 20,
    marginBottom: 2,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    width: "100%",
  },
  placa: {
    alignSelf: "center",
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 4,
    borderRadius: 5,
    textAlign: "center",
    justifyContent: "flex-start",
    justifyItems: "center",
    height: 60,
    width: 130,
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
});

export default CardVeicleManutecoes;
