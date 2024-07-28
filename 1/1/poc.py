import socket
import json
SERVER_IP = "10.13.84.131"
SERVER_PORT = 5001
client_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
client_socket.connect((SERVER_IP, SERVER_PORT))
credentials = json.dumps({"username": None, "password": None }) 
client_socket.sendall(credentials.encode('utf-8'))
response = client_socket.recv(1024).decode('utf-8')
#Authenticated successfully
print(response)
