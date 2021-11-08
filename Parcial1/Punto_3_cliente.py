import socket, webbrowser, os

socketCliente = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
socketCliente.connect(('localhost', 5000))

print("Conexión establecida")
data = socketCliente.recv(4096)
data = data.decode()

pagina = os.open( "pagina_abrir.html", os.O_RDWR|os.O_CREAT )
os.write(pagina, data.encode())
os.close(pagina)

socketCliente.close()
webbrowser.open_new_tab("pagina_abrir.html")

