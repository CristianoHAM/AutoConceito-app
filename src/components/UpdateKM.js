import { StyleSheet, Text, View, Modal } from "react-native";

import React, { useEffect, useState } from "react";

const UpdateKM = ({ show }) => {
  const [sh, setSh] = useState(show);

  useEffect(() => {
    // Chama a função do componente chamador quando o componente é renderizado
    setSh(show);
  }, [show]);

  const alterarParametro = () => {
    // Altera o parâmetro
    setSh(false);
  };

  return (
    <Modal
      style={{ flex: 1 }}
      animationType="slide"
      transparent={true}
      visible={sh}
    >
      <View style={styles.conteiner}>
        <Text onPress={() => alterarParametro()} style={styles.fechar}>
          fechar X
        </Text>
        <Text style={styles.mensagem}>Usuário ou senha incorreta!</Text>
      </View>
    </Modal>
  );
};
export default UpdateKM;

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 33,
    justifyContent: "center",
    marginVertical: "80%",
    marginHorizontal: 20,
    height: 200,
    borderBlockColor: "black",
    borderWidth: 2,
  },
  fechar: {
    position: "absolute",
    top: 10,
    right: 30,
    textDecorationLine: "underline",
    fontSize: 17,
  },
  mensagem: {
    alignSelf: "center",
  },
});
