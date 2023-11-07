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
  Linking,
} from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";
import { Ionicons, Feather } from "@expo/vector-icons";

const LocalScreen = ({ navigation }) => {
  const latitude = -19.912522;
  const longitude = -43.9749;
  const handleGetDirections = () => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;
    Linking.openURL(url);
  };
  const handleGetDirectionsToAgendamento = () => {
    const url = `https://api.whatsapp.com/send?phone=5531995425608&text=Ol%C3%A1,%20gostaria%20de%20agendar%20a%20revis%C3%A3o%20do%20meu%20ve%C3%ADculo.`;
    Linking.openURL(url);
  };
  const handleGetDirectionsToWhatsapp = () => {
    const url = `https://api.whatsapp.com/send?1=pt_BR&phone=5531985161801`;
    Linking.openURL(url);
  };

  const phoneNumber = "3134791100"; // Número de telefone para chamada

  const handleCall = () => {
    Linking.openURL(`tel:${phoneNumber}`);
  };
  return (
    <View style={styles.conteiner}>
      <View style={styles.about}>
        <Image
          style={styles.logoMarca}
          source={require("../../assets/logo.jpeg")}
        />
        <Text style={styles.textAbout}>
          Muito mais que uma Auto Peças e Oficina Mecânica. Uma nova experiência
          para você e seu carro. Pensamos com carinho em cada detalhe, antes,
          durante e depois.
        </Text>
      </View>

      <View style={styles.local}>
        <MapView
          style={styles.map}
          region={{
            latitude,
            longitude,
            latitudeDelta: 0.0122, // Ajuste para o zoom desejado
            longitudeDelta: 0.0421, // Ajuste para o zoom desejado
          }}
        >
          <Marker
            coordinate={{ latitude, longitude }}
            title="Endereço Específico"
            description="Descrição do endereço"
          >
            <Callout>
              <View>
                <Button title="Como Chegar" onPress={handleGetDirections} />
              </View>
            </Callout>
          </Marker>
        </MapView>
        <View style={styles.separetion}></View>
        <View style={styles.infoLocal}>
          <Text style={styles.localTx}>
            Av. Dom Pedro II, 3620 - Monsenhor Messias, Belo Horizonte - MG,
            30720-460
          </Text>
          <Button
            style={styles.comoChegar}
            title="Como Chegar"
            onPress={handleGetDirections}
          >
            <Ionicons
              style={styles.iconNotification}
              name="notifications"
              size={20}
              color={"#fff"}
            />
          </Button>
        </View>
      </View>
      <View style={styles.botoes}>
        <View style={styles.lineBotoes}>
          <TouchableOpacity style={styles.ligar} onPress={handleCall}>
            <Feather name="phone-call" size={50} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.whatsapp}
            onPress={handleGetDirectionsToWhatsapp}
          >
            <Feather name="message-circle" size={50} color="#fff" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.agendar}
          onPress={handleGetDirectionsToAgendamento}
        >
          <Text style={styles.textAgendar}>Agendar Revisão</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    backgroundColor: "#c2c2c2",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingBottom: 80,
    rowGap: 20,
    paddingTop: 20,
  },
  about: {
    backgroundColor: "white",
    width: "90%",
    height: "35%",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "space-around",
  },
  logoMarca: {
    width: 190,
    height: 62,
  },
  textAbout: {
    textAlign: "justify",
    alignSelf: "center",
    //marginHorizontal: 10,
    //fontWeight: "bold",
    fontSize: 15,
    //borderColor: "#000",
    //borderWidth: 1,
    width: "95%",
  },
  local: {
    backgroundColor: "white",
    width: "90%",
    height: "30%",
    padding: 10,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  map: {
    width: "45%",
    height: "100%",
    borderRadius: 10,
  },
  separetion: {
    height: "100%",
    width: 1,
    backgroundColor: "#555",
    marginHorizontal: 10,
  },

  infoLocal: {
    width: "45%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 5,
    //borderColor: "#000",
    //borderWidth: 1,
    paddingHorizontal: 0,
  },
  localTx: {
    textAlign: "justify",
    // borderColor: "#000",
    //borderWidth: 1,
    width: "100%",
  },
  comoChegar: {
    width: "100%",
  },
  botoes: {
    width: "90%",
    rowGap: 10,
  },
  lineBotoes: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  ligar: {
    height: 70,
    backgroundColor: "#58be5a",
    borderRadius: 10,
    width: "46%",
    justifyContent: "center",
    alignItems: "center",
  },
  whatsapp: {
    height: 70,
    backgroundColor: "#58be5a",
    borderRadius: 10,
    width: "46%",
    justifyContent: "center",
    alignItems: "center",
  },
  agendar: {
    height: 60,
    backgroundColor: "#58be5a",
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
  },
  textAgendar: {
    color: "#fff",
    alignSelf: "center",
    fontSize: 25,
  },
});

export default LocalScreen;
