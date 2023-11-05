import React, { useRef, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  Animated,
  Modal,
  TextInput,
  Button,
  KeyboardAvoidingView,
} from "react-native";
import Pagination from "../components/Pagination";
import motocyclesList from "../data/MotocyclesList";
import CardMotocycles from "../components/CardMotocycles";
import UpdateKM from "../components/UpdateKM";

const HomeScreen = ({ navigation }) => {
  const [index, setIndex] = useState(0);
  const [showUpdateKM, setShowUpdateKM] = useState(false);
  const [updateKM, setUpdateKM] = useState("0");
  const [viewableItems, setViewableItems] = useState(false);
  const scrollX = useRef(new Animated.Value(0)).current;

  const handleOnScroll = (event) => {
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: scrollX,
            },
          },
        },
      ],
      {
        useNativeDriver: false,
      }
    )(event);
  };

  const handleOnViewableItemsChanged = useRef(({ viewableItems }) => {
    //console.log("viewableItems", viewableItems);
    //setViewableItems(viewableItems[0]);
    setUpdateKM(String(viewableItems[0].item.km));
    setIndex(viewableItems[0].index);
  }).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  const up = () => {
    setShowUpdateKM(true);
  };

  return (
    <View style={styles.container}>
      <Modal
        style={{ flex: 1 }}
        animationType="fade"
        transparent={true}
        visible={showUpdateKM}
      >
        <View style={styles.modalBackground}>
          <View
            style={styles.conteiner}
            //behavior="height" // Escolha o comportamento desejado (padding, position, height)
          >
            <View style={styles.fechar}>
              <Text
                onPress={() => setShowUpdateKM(false)}
                style={styles.txFechar}
              >
                fechar X
              </Text>
            </View>
            <View style={styles.conteudoModal}>
              <Text style={styles.mensagem}>
                Insira a quilometragem em km atual do veículo
              </Text>
              <TextInput
                placeholder={updateKM}
                //onChangeText={(text) => setUpdateKM(text)}
                style={styles.input}
                keyboardType="numeric"
              />
              <View style={styles.salvar}>
                <Text
                  style={styles.txSalvar}
                  onPress={() => setShowUpdateKM(false)}
                >
                  Salvar
                </Text>
              </View>
            </View>
          </View>
        </View>
      </Modal>
      <View>
        <FlatList
          data={motocyclesList}
          renderItem={({ item }) => <CardMotocycles item={item} update={up} />}
          horizontal
          pagingEnabled
          snapToAlignment="center"
          showsHorizontalScrollIndicator={false}
          onScroll={handleOnScroll}
          onViewableItemsChanged={handleOnViewableItemsChanged}
          viewabilityConfig={viewabilityConfig}
        />
      </View>
      <View style={styles.viewNotification}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewNotification: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
    justifyItems: "center",
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginHorizontal: 10,
    marginTop: 20,
    marginBottom: 90,
    width: 340,
  },
  container: {
    flex: 1,
    backgroundColor: "#c2c2c2",
    flexDirection: "column",
    justifyContent: "center",
  },
  carouselContent: {
    alignItems: "center",
  },
  content: {
    flex: 1,
    marginLeft: 16,
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
  label: {},
  conteiner: {
    flex: 1,
    flexDirection: "column",
    rowGap: 5,
    position: "absolute",
    top: -100,
    alignSelf: "center",
    backgroundColor: "white",
    borderRadius: 33,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: "80%",
    marginHorizontal: 20,

    width: "95%",
    borderBlockColor: "black",
    borderWidth: 2,
  },
  fechar: {
    borderBlockColor: "black",
    borderWidth: 1,
    borderRadius: 20,
    width: 100,
    textAlign: "center",
    backgroundColor: "#f4dddd",
    position: "absolute",
    top: 10,
    right: 20,
  },
  txFechar: {
    //textDecorationLine: "underline",
    fontSize: 17,
    alignSelf: "center",
    fontWeight: "bold",
  },
  salvar: {
    borderBlockColor: "black",
    borderWidth: 1,
    borderRadius: 20,
    width: 100,
    textAlign: "center",
    backgroundColor: "#58be5a",
  },
  txSalvar: {
    //textDecorationLine: "underline",
    fontSize: 17,
    alignSelf: "center",
    fontWeight: "bold",
    color: "white",
  },

  conteudoModal: {
    flex: 1,
    flexDirection: "column",
    rowGap: 10,
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 60,
    marginBottom: 40,
  },
  mensagem: {
    alignSelf: "center",
  },
  input: {
    width: 100,
    height: 40,
    borderWidth: 1,
    borderColor: "gray",
    alignSelf: "center",
    textAlign: "center",
  },
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Cor de fundo semitransparente
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeScreen;
