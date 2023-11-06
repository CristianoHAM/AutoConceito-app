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
  Dimensions,
} from "react-native";
import Pagination from "../components/Pagination";
import VeicleList from "../data/MotocyclesList";
import CardVeicle from "../components/CardVeicle";
import { Ionicons, Entypo } from "@expo/vector-icons";
import UpdateKM from "../components/UpdateKM";

const screenWidth = Dimensions.get("screen").width;

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

  const viewWidth = screenWidth * 0.95;

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
          data={VeicleList}
          renderItem={({ item }) => <CardVeicle item={item} update={up} />}
          horizontal
          pagingEnabled
          snapToAlignment="center"
          showsHorizontalScrollIndicator={false}
          onScroll={handleOnScroll}
          onViewableItemsChanged={handleOnViewableItemsChanged}
          viewabilityConfig={viewabilityConfig}
        />
        <Pagination
          style={styles.pagination}
          data={VeicleList}
          scrollX={scrollX}
          index={index}
        />
      </View>
      <View style={[styles.viewNotification, { width: viewWidth }]}>
        <View style={styles.headerNotification}>
          <Ionicons
            style={styles.iconNotification}
            name="notifications"
            size={30}
            color={"#555"}
          />
          <Text style={styles.textHN}>Notificações</Text>
        </View>
        <View style={styles.separetionHN} />
      </View>
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
    marginTop: 25,
    marginBottom: 90,
    paddingHorizontal: 0,
  },
  headerNotification: {
    flexDirection: "row",
    // borderWidth: 3,
    //  borderColor: "black",
    height: 40,
    justifyContent: "center",
  },
  textHN: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#555",
    // borderWidth: 3,
    //borderColor: "black",
  },
  iconNotification: {
    position: "absolute",
    alignSelf: "center",
    left: 10,
  },
  separetionHN: {
    height: 1,
    width: "100%",
    backgroundColor: "#555",
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
