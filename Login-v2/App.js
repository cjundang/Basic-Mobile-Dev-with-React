import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { loginUser } from "./apiRequest";
const LoginUI = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async () => {
    try {
      const user = await loginUser(username, password);
      Alert.alert("Login Successful", `Welcome ${user.name}`);
      // Proceed to the next screen or perform additional actions
    } catch (error) {
      Alert.alert("Login Failed", error.message);
    }
  };
  const handleGmailLogin = () => {
    Alert.alert("Gmail Login Pressed");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      {/* Email Input */}
      <TextInput
        onChangeText={setUsername}
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={username}
        placeholderTextColor="#aaa"
      />
      {/* Password Input */}
      <TextInput
        onChangeText={setPassword}
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        placeholderTextColor="#aaa"
      />
      {/* Login Button */}
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      {/* OR Divider */}
      <Text style={styles.orText}>OR</Text>
      {/* Gmail Login Button */}
      <TouchableOpacity style={styles.gmailButton} onPress={handleGmailLogin}>
        <Text style={styles.gmailButtonText}>Continue with Gmail</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f7f7f7",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 40,
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  loginButton: {
    width: "100%",
    height: 50,
    backgroundColor: "#4CAF50",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginBottom: 20,
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  orText: {
    fontSize: 16,
    color: "#aaa",
    marginBottom: 20,
  },
  gmailButton: {
    width: "100%",
    height: 50,
    backgroundColor: "#DB4437", // Gmail red color
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  gmailButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
export default LoginUI;
