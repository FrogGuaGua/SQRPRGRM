from multiprocessing import Process, Pipe

def sender(conn):
    conn.send("Hello from sender")
    conn.send([42, None, "test"])
    conn.close()

def receiver(conn):
    print(conn.recv())  
    print(conn.recv())  

if __name__ == '__main__':
    parent_conn, child_conn = Pipe()  
    p1 = Process(target=sender, args=(child_conn,))
    p2 = Process(target=receiver, args=(parent_conn,))
    
    p1.start()
    p2.start()
    
    p1.join()
    p2.join()