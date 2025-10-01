# Arquetipos de usuario – EQUIPO BASKET

Este documento define los perfiles (personas) que guían las decisiones de diseño de la interfaz del proyecto **EQUIPO BASKET**. 
No son usuarios reales, sino arquetipos que representan necesidades, objetivos y contextos de uso.

---

## Arquetipo 1 — **Laura** (Jugadora)

* **Edad:** 21
* **Rol:** Base titular
* **Dispositivo principal:** Móvil y portátil
* **Objetivos:**

  * Tener su ficha clara y actualizada (posición, edad, altura).
  * Reproducir su vídeo de **jugadas destacadas** y compartirlo.
* **Tareas típicas:**

  * Buscarse por **nombre** o **posición**.
  * Abrir su **detalle** y pulsar **Media** para reproducir.
  * Compartir el enlace del vídeo.
* **Dolores / frustraciones:**

  * Perder tiempo buscando el clip o que el reproductor no cargue.
  * Tipografías pequeñas en móvil.
* **Necesidades UX:**

  * Buscador visible y rápido (nombre/posición/edad).
  * Ficha compacta: posición, edad, altura y avatar visibles.
  * Reproductor simple: “click para reproducir / pausar”.
* **Escenario clave:**

  * Laura entra desde el móvil, escribe “lau”, abre su ficha, pulsa **Jugadas destacadas** y comparte el enlace por WhatsApp.
* **Historia de usuario:**

  > Como **jugadora**, quiero **reproducir y compartir** mi vídeo de **jugadas destacadas** para **enviarlo a un entrenador**.
* **Criterios de aceptación:**

  * El buscador filtra por **nombre/posición/edad** mientras escribo.
  * En el detalle se muestran **posición, edad, altura** y avatar.
  * Al pulsar **Media**, aparece el vídeo y **reproduce** (autoplay con mute si procede).
  * Hay opción visible de **compartir**.

---

## Arquetipo 2 — **Miguel** (Entrenador)

* **Edad:** 45
* **Rol:** Staff técnico
* **Dispositivo principal:** Portátil (pantalla grande)
* **Objetivos:**

  * **Comparar** jugadores por **posición** y **edad**.
  * Ver clips rápidos sin solapamientos.
* **Tareas típicas:**

  * Escribir “Escolta 22” y revisar candidatos.
  * Cambiar de jugador en el listado lateral.
  * Pulsar **Jugadas destacadas** y evaluar el clip.
* **Dolores / frustraciones:**

  * Listas largas sin filtro útil.
  * Que el vídeo anterior **siga sonando** al cambiar de jugador.
* **Necesidades UX:**

  * Lista y detalle visibles **lado a lado**.
  * Al cambiar de jugador, el vídeo anterior **se detiene** automáticamente.
* **Escenario clave:**

  * Miguel filtra, abre tres fichas seguidas y ve cada clip sin que se mezclen audios.
* **Historia de usuario:**

  > Como **entrenador**, quiero **filtrar** y **revisar clips** de varios jugadores para **preseleccionar** candidatos.
* **Criterios de aceptación:**

  * El listado muestra **≥ 5 jugadores** y responde al filtro.
  * Al **cambiar de jugador**, el reproductor **se resetea** y no se solapan audios.
  * El bloque **Media** está debajo del avatar y es accesible.

---

## Decisiones de diseño tomadas a partir de los arquetipos

* **Buscador con pipe** por **nombre/posición/edad** (rapidez para Laura y Miguel).
* **Bloque “Media”** debajo del avatar, con **play/pause** claro.
* **Autopause al cambiar de jugador**: el vídeo se detiene al seleccionar otro.
* **Tipografía y elementos ampliados** para mejor lectura en móvil/portátil.
* **Avatares visibles** en lista y detalle para identificación rápida.

---

## KPIs (indicadores de éxito)

* Tiempo para encontrar y reproducir un clip: **≤ 10 s**.
* Nº de clics desde la home hasta ver el vídeo: **≤ 2**.
* Porcentaje de búsquedas exitosas (nombre/posición/edad): **≥ 95 %**.

---
