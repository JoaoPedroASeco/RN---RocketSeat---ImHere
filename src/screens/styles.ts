import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131016",
    padding: 24,
  },
  titleContainer: {
    marginBottom: 36,
  },
  eventName: {
    color: `#fdfcfe`,
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 48,
  },
  eventDate: {
    color: "#6b6b6b",
    fontSize: 16,
  },
  inputContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    gap: 16,
    marginBottom: 36,
  },
  input: {
    height: 56,
    backgroundColor: "#1f1e25",
    borderRadius: 5,
    color: "white",
    padding: 16,
    fontSize: 16,
    flex: 1,
  },
  addButton: {
    borderRadius: 5,
    backgroundColor: "#32CE67",
    height: 56,
    width: 56,
  },
  addButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    height: 56,
    width: 56,
    marginLeft: 22,
    marginTop: 15,
  },
  userContainer: {
    gap: 16,
    display: "flex",
    flexDirection: "row",
    flex: 1,
    marginBottom: 16,
  },
  userName: {
    height: 56,
    backgroundColor: "#1f1e25",
    borderRadius: 5,
    color: "white",
    padding: 16,
    fontSize: 16,
    flex: 1,
  },
  removeButton: {
    borderRadius: 5,
    backgroundColor: "#E33B45",
    height: 56,
    width: 56,
  },
  removeButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    height: 56,
    width: 56,
    marginLeft: 22,
    marginTop: 15,
  },
  userListContainer: {
    gap: 16,
  },
  emptyListText: {
    color: "white",
    display: "flex",
    width: "100%",
    textAlign: "center",
  },
});
