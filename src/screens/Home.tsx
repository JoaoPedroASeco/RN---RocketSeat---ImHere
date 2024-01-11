import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { styles } from "./styles";

export const Home = () => {
  const [users, setUser] = useState(["Joao", "Pedro", "Augusto", "Seco"]);

  const [inputValue, setinputValue] = useState("");

  const handleAddUser = () => {
    if (users.includes(inputValue)) {
      return Alert.alert(
        "Usuario Existente",
        `Este usuario '${inputValue}' ja faz parte da lista, digite outro nome.`
      );
    } else {
      setUser([...users, inputValue]);
      setinputValue("");
    }
  };

  const handleRemoveUser = (name: string) => {
    Alert.alert("Remover", `Remover participante ${name}?`, [
      {
        text: "Sim",
        onPress: () => {
          const newArr = users.filter((user) => user !== name);
          setUser(newArr);
          Alert.alert("Aviso", "Usuario removido");
        },
      },
      {
        text: "Nao",
        onPress: () => Alert.alert("Aviso", "Remocao cancelada"),
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.eventName}>Nome do evento</Text>
        <Text style={styles.eventDate}>Sexta, 4 de Novembto de 2024.</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nome do Usuario"
          placeholderTextColor={"#6b6b6b6b"}
          onChangeText={setinputValue}
          onSubmitEditing={handleAddUser}
          value={inputValue}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddUser}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={users}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <View style={styles.userContainer}>
            <Text style={styles.userName}>{item}</Text>
            <TouchableOpacity
              style={styles.removeButton}
              onPress={() => handleRemoveUser(item)}
            >
              <Text style={styles.removeButtonText}>-</Text>
            </TouchableOpacity>
          </View>
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <Text style={styles.emptyListText}>Adicione usuarios.</Text>
        }
      />
    </View>
  );
};
