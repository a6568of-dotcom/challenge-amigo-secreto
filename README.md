<div align="center"> 
  <h1>Challenge Amigo Secreto</h1>
</div>

<p align="center">
<img width="450" height="277" alt="amigo-secreto" src="https://github.com/user-attachments/assets/a7e877eb-b934-41ff-9188-5ffc09b23579" />
</p>

Proyecto de página web para juego de sorteo de amigos, donde se ingresen nombres de los amigos, se muestre la lista ordenada y se sorteen para que un nombre sea seleccionado al azar, siendo el "amigo secreto". Proyecto para el programa ONE denominado "Challenge Amigo Secreto".


<h4 align="center">
:white_check_mark: Proyecto completado :white_check_mark:
</h4>

<br>

## Índice
<details>
<sumary>Mostrar / ocultar</sumary>


- [Funcionalidades del proyecto](#hammer-funcionalidades-del-proyecto)
- [Acceso y ejecución del proyecto](#file_folder-acceso-y-ejecución-del-proyecto)
- [Posibles problemas y soluciones](#wrench-posibles-problemas-y-soluciones)
- [Tecnologías utilizadas](#white_check_mark-tecnologías-utilizadas)
- [Autor](#autor)


<details>

<br>

## :hammer: Funcionalidades del proyecto
- **`Añadir nombres en el campo de texto con el botón "Añadir"`**
<p align="center">
<img src="https://github.com/user-attachments/assets/08a6e3ea-904e-4998-9aac-0b12b1b4488f">
</p>

- **`Mostrar debajo la lista de amigos ingresados en orden`**
<p align="center">
<img src="https://github.com/user-attachments/assets/2cc12076-dd6f-4b50-94e9-0d67c7cd1163">
</p>

- **`Validación de entrada: impedir ingresar texto vacío y mostrar alerta`**
<p align="center">
<img src="https://github.com/user-attachments/assets/04ae0652-53fb-4b88-a10f-9a44b779375f">
</p>

- **`Sorteo aleatorio de nombres ingresados y mostrar resultado`**
<p align="center">
<img src="https://github.com/user-attachments/assets/43f1b0a1-715b-4533-a061-a2fdceffb71b">
</p>

- **`Mostrar amigos sorteados en la consola`**
<p align="center">
<img src="https://github.com/user-attachments/assets/f749e8bf-eb15-4ce2-9a7c-f0ef488d8fff">
</p>

<br>

## :file_folder: Acceso y ejecución del proyecto
**1.** Descargue o clone el repositorio.  
**2.** Ejecute el HTML en el navegador.  
**3.** Comience a añadir nombres y presione sortear.  
**4.** Abra la consola para verificar historial de sorteos.

<br>

## :wrench: Posibles problemas y soluciones
- **`Validaciones adicionales de entrada`**  
  Falta evitar números y símbolos.  
  **Solución:** implementación de validación de entrada que sólo admita letras, espacios y algunos carácteres.

- **`Nombres repetidos`**  
  Se pueden repetir nombres.  
  **Solución:** implementación de validación de entrada que no permita duplicados.

- **`Añadir con la tecla Enter`**  
  Sólo se puede añadir clickeando el botón "añadir" y no con Enter.  
  **Solución:** habilitar que al presionar Enter en el campo de texto, se agrege el nombre a la lista.

- **`Amigos sorteados repetidos`**  
  Los nombres sorteados pueden volver a sortearse.  
  **Solución:** implementar una función para no repetir nombres hasta agotar la lista.

- **`Sin botón de reinicio`**  
  Sólo se puede reiniciar al volver a cargar la página.  
  **Solución:** habilitar un botón de reinicio.

- **`Sorteos infinitos`**  
  No existe un límite de sorteos.  
  **Solución:** establecer un límite de sorteos.

<br>

## :white_check_mark: Tecnologías utilizadas
- **`HTML`**
- **`CSS`**
- **`JavaScript`**

<br><br>

## **Autor**
| |
|:--:|
| [<img src="https://github.com/user-attachments/assets/99f059f3-89cd-4ef2-8d2e-5e1411dd933d" width=115><br><sub>Arely Hernández</sub>](https://github.com/a6568of-dotcom)


