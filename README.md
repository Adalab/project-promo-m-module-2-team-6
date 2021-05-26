![Adalab](https://beta.adalab.es/resources/images/adalab-logo-155x61-bg-white.png)



# Web para Tarjetas Digitales Personalizables

Vegan Debuggers es una aplicación desarrollada con la finalidad de crear tarjetas digitales personalizables y virtuales que podrán ser compartidas. 
Es una aplicación amigable y fácil de usar, que además colabora con el medio ambiente, ya que el generar tarjetas virtuales tiene las siguientes ventajas:
- Menor consumo de papel. En unos momentos en los que todas estamos concienciadas con el medio ambiente, ahorrar en papel es algo que hay que tener en cuenta.
- Menor coste.  Las tarjetas de visita tradicionales conllevan un coste de impresión, diseño..., etc. Con las tarjetas de visita online todo esto nos lo ahorramos.
- Actualización continúa.  Son muy sencillas de actualizar. ¿Un producto nuevo? ¿Un trabajo acabado digno de enseñar? No te preocupes: todo el mundo que tenga tu tarjeta virtual online verá siempre los cambios que realices.
- Fácil de compartir. Nuestras tarjetas de visita online se pueden compartir por   mail,   GitHub,   Facebook,   Twitter,   Linkedin...   Un   montón   de posibilidades que te facilitan la vida.

## 

## Cómo Funciona:

### Página de Inicio:


## Esquema de funcionamiento

![Esquema](https://github.com/Adalab/project-promo-m-module-2-team-6/blob/main/src/images/Esquema.jpg)

## Herramientas empleadas

- Adalab web starter kit, que es una plantilla de proyecto con funcionalidades preinstaladas y preconfiguradas, que nos facilita la automatización de tareas, ya que incluye un motor de plantillas HTML, el preprocesador SASS y un servidor local y muchas cosas más, que nos ayudan a trabajar más cómodamente, debido a la automatización de tareas.

- Editor de código Visual Studio Code

- Node JS

- Git

**NOTA:** Estas herramientas son las requeridas para poder utilizar o colaborar en el proyecto.

## Estrucutra de las carpetas

src
├─ api // los ficheros de esta carpeta se copian en public/api/
|  └─ data.json
├─ js // los ficheros de esta carpeta se concatenan en el fichero main.js y este se guarda en public/main.js
|  ├─ main.js
|  └─ events.js
├─ scss
|  ├─ core
|  |  ├─ reset
|  |  └─ variables
|  └─ layout
|     ├─ design
|     ├─ fill
|     ├─ footer
|     ├─ header
|     ├─ landing-page
|     ├─ main-card
|     ├─ page
|     ├─ palette
|     ├─ photo
|     └─ share
└─ html
|  └─ partials
|     ├─ design
|     ├─ fill
|     ├─ footer
|     ├─ header
|     ├─ main-cards
|     ├─ main
|     ├─ photo
|     └─ share
└─ js
   └─ partials
      ├─ 00_collapsible
      ├─ 01_form
      ├─ 02_palette
      ├─ 03_photo
      ├─ 04_reset
      ├─ 05_localStorage
      └─ 06_fetch
