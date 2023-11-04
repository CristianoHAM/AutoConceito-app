import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Switch,
  StyleSheet,
  Modal,
  Button,
} from "react-native";

const LocalScreen = ({ navigation }) => {
  return (
    <View style={styles.conteiner}>
      <Text>local</Text>
      <TextInput
        placeholder="Usuário"
        autoCorrect={false}
        onChangeText={(text) => setUser(text)}
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default LocalScreen;
