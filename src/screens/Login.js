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
import Icon from "react-native-vector-icons/FontAwesome";

export default function LoginScreen({ navigation }) {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [saveConection, setSaveConection] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [userAuthenticated, setUserAuthenticated] = useState(false);
  const [showErroAut, setShowErroAut] = useState(false);

  const nameUser = "Critiano";
  const user1 = "Cris.h";
  const password1 = "123";

  const signIn = () => {
    console.log("############################");
    if (user1 == user && password1 == password) {
      setUserAuthenticated(true);
      navigation.reset({
        index: 0,
        routes: [{ name: "Routes" }],
      });
      console.log("Usuário autenticado");
    } else {
      console.log("falha na autenticação");
      setShowErroAut(true);
    }
    console.log("Usuário:", user);
    console.log("Senha:", password);
    console.log("Continuar conectado:", saveConection);
  };

  const cadastrar = () => {
    navigation.navigate("Cadastro");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.container}>
      <Modal
        style={{ flex: 1 }}
        animationType="slide"
        transparent={true}
        visible={showErroAut}
      >
        <View style={styles.ErroAut}>
          <Text onPress={() => setShowErroAut(false)} style={styles.txFechar}>
            fechar X
          </Text>
          <Text style={styles.txErroAut}>Usuário ou senha incorreta!</Text>
        </View>
      </Modal>
      <Image
        style={styles.logoMarca}
        source={require("../../assets/logoSF.jpeg")}
      />

      <View style={styles.switchSC}>
        <Text>Continuar conectado</Text>
        <Switch
          value={saveConection}
          onValueChange={() => setSaveConection(!saveConection)}
        />
      </View>
      <TextInput
        placeholder="Usuário"
        autoCorrect={false}
        onChangeText={(text) => setUser(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Senha"
        autoCorrect={false}
        secureTextEntry={!showPassword}
        onChangeText={(text) => setPassword(text)}
        style={styles.input}
      />
      <View>
        <Icon
          name={showPassword ? "eye" : "eye-slash"}
          size={24}
          color="gray"
          style={styles.eyeIcon}
          onPress={togglePasswordVisibility}
        />
      </View>
      <TouchableOpacity onPress={signIn} style={styles.button}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <View style={styles.buttonFP}>
        <TouchableOpacity
          onPress={() => console.log(user, "Solicitou recuperação de senha!")}
        >
          <Text>Esqueci minha senha.</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonFP: {
    alignItems: "center",
    padding: 20,
  },
  input: {
    width: "80%",
    height: 40,
    borderWidth: 1,
    borderColor: "gray",
    marginBottom: 20,
    paddingLeft: 10,
  },
  switchSC: {
    width: "80%",
    flexDirection: "row",
    alignItems: "center",
    columnGap: 100,
    justifyContent: "space-between",
  },
  imagem: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#58be5a",
    alignItems: "center",
    width: "70%",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonW: {
    backgroundColor: "white",
    alignItems: "center",
    width: "70%",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: "white",
  },
  eyeIcon: {
    position: "absolute",
    right: -140,
    top: -54,
  },
  ErroAut: {
    borderRadius: 33,
    backgroundColor: "#ff6878",
    justifyContent: "center",
    marginVertical: "80%",
    marginHorizontal: 20,
    height: 200,
  },
  txErroAut: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
  },
  txFechar: {
    position: "absolute",
    top: 10,
    right: 30,
    textDecorationLine: "underline",
    fontSize: 17,
  },
  logoMarca: {
    width: 190,
    height: 62,
    marginBottom: 50,
  },
});
