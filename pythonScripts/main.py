# Importações das bobliotecas

import pyautogui
import pyperclip
import time
import pandas as pd


"""
# Definindo a pausa padrão do pyautogui
pyautogui.pause = 1

# Encontar a base de dados dos usuários

time.sleep(5)  # Tempo para abrir o navegador, ou dar foco

pyautogui.hotkey('ctrl', 't')  # Nova aba do navegador (no caso Chrome)
pyperclip.copy('https://docs.google.com/spreadsheets/d/1kMBypXb_k16g_ZOjihJYEgRFveyxkq8KYPcyWJtR3D4/edit#gid=0')  # Link da tabela
pyautogui.hotkey('ctrl', 'v')
pyautogui.press('enter')

# Baixar a tabela e importar


time.sleep(3)
pyautogui.click(x=100, y=153)
time.sleep(2)
pyautogui.click(x=230, y=399)
time.sleep(2)
pyautogui.click(x=453, y=403)
time.sleep(2)
pyautogui.press('enter')

"""


time.sleep(5)

# Verificando valores da tabela

tabela = pd.read_excel(r"C:\Users\nohan_qmfhreb\Downloads\PontaDaCanetaUsers.xlsx")

print(tabela)

users = tabela['name']
emails = tabela['email']

print(emails.count())

def enviar_email(x, i):
    pyautogui.hotkey('ctrl', 't')
    pyperclip.copy('https://mail.google.com/mail/u/0/#inbox')
    pyautogui.hotkey('ctrl', 'v')
    pyautogui.press('enter')

    time.sleep(5)

    pyautogui.click(x=91, y=200)
    time.sleep(3)
    pyautogui.write(emails[i])
    time.sleep(3)
    pyautogui.press('tab')
    pyautogui.press('tab')
    pyperclip.copy('Novo post do Ponta da Caneta')
    pyautogui.hotkey('ctrl', 'v')
    time.sleep(3)

    corpo_email = f"""
    #Olá {x}, venha conferir o mais novo post do Blog Ponta da Caneta!

    #link
    #Espero que goste e até a proxima.

    """

    pyautogui.press('tab')
    pyperclip.copy(corpo_email)
    pyautogui.hotkey('ctrl', 'v')
    time.sleep(3)


i = 0
print(i)
while i < emails.count():


    for x in users:
        enviar_email(x, i)
        i= i+1
for y in emails:
    print(y)










