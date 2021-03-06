import socket

sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
port = 5000 # Establecemos el puerto de comunicación
sock.connect(('localhost',port))

try:
    message = input()
    sock.sendall(message.encode())
    amount_received = 0
    amount_expected = len(message)

    while amount_received < amount_expected:
        data = sock.recv(4096)
        amount_received += len(data)
finally:
    sock.close()