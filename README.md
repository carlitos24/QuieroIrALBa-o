 **Necesito un baño**
El proyecto trata sobre un nene en medio de córdoba con ganas de hacer pis sin encontrar un lugar para hacerlo xd

La pagina principal es un mapa que direcciona a diferentes tipos de baños entre los que podes encontrar publico, semi privado y privado para que el usuario que necesita un baño pueda acceder rápidamente, además de un acceso a baños para discapacitados Premium y un botón para agregar baños desde el lugar en el que se encuentra el usuario.

La aplicación obtiene la información del lugar donde se encuentra el usuario automáticamente con latitud y longitud con una api de html5 encontramos la ubicación exacta  y en el mapa plasma los lugares disponibles para hacer sus necesidades.

Se va a trabajar con html para la creación modelo de la pagina, además de trabajar con css3 para los estilos de la pagina y con javascript para darle el dinamismo al mapa, con node vamos a levantar el server y con mongoDS vamos a tener la base de datos, con un Ajax buscamos la información al server para devolverlo con un json.

El home son cuatro botones dedicado a los distintos tipos de baños y un mapa con los puntos de los baños cargados al momento de entrar en la pagina con la api funcionando en javascript los botones van a cambiar la cantidad de puntos en el mapa pero no van a recargar la pagina por lo que vamos a usar un Ajax para que se actualicen los puntos.

Va a tener otra pagina que será la secundaria donde con la localización de la misma persona se podrán cargar baños nuevos donde tendrá un formulario para rellenar con datos, (tipo de baño, nombre del lugar y costo en el caso  de los baños privados o semi privado) 

    **Home**
..*	*Public 
..* *Privado
..* *Semi privado
..* *Agregar localización (+)
..* *Mapa

	 **Agregar localización**
..*	*Nombre del lugar 
..*	*Tipo de baño 
..*	*Costo (solo se activa cuando el baño es privado o semi) 
..*	*save
