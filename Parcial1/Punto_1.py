import os
import pandas as pd
from openpyxl import load_workbook

os.chdir(r"C:\Users\User\Downloads")
fd = os.open( "funciones_sistema_operativo.txt", os.O_RDWR|os.O_CREAT )
mensaje = ('1'+'\n'+
           'Gestionar los recursos adecuadamente para los diferentes procesos'+'\n'+
           '\n'+'2'+'\n'+
           'Hacer de ointermediario con el usuario y la máquina'+'\n'+
           '\n'+'3'+'\n'+
           'Administrar los puertos de entrada y salida'+'\n'+
           '\n'+'4'+'\n'+
           'Administrar las tareas en ejecución y su correcta asignación de recursos'+'\n'+
           '\n'+'5'+'\n'+
           'Administración de la memoria, regular su uso y ocupación')
os.write(fd, (mensaje).encode())
os.close(fd)

writer = pd.ExcelWriter('funciones_sistema_operativo.xlsx',engine='openpyxl')
wb = writer.book
df = pd.DataFrame({'No. Funcion': ['1','2','3','4','5'],
                  'Funcion':
['Gestionar los recursos adecuadamente para los diferentes procesos',
'Hacer de ointermediario con el usuario y la máquina',
'Administrar los puertos de entrada y salida',
'Administrar las tareas en ejecución y su correcta asignación de recursos',
'Administración de la memoria, regular su uso y ocupación']})
df.to_excel(writer, index=False)
wb.save('funciones_sistema_operativo.xlsx')