<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/font/bootstrap-icons.css">
    <title>Registro de usuario</title>
    <link rel="stylesheet" href="">
    <link rel="stylesheet" href="css/registro.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/bxslider/4.2.12/jquery.bxslider.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/bxslider/4.2.12/jquery.bxslider.min.js"></script>
</head>

<body>
<main>
    <form action="" class="formulario" id="formulario">
        <div class="titulogo">
            <img class="logo" src="Imagenes/SRD.png" alt="">
            <h1>Registro</h1>
            <img class="halcon" src="imagenes/halcon.png" alt="">


        </div>
        <div class="formulario__grupo" id="grupo__fecha">
            <label for="fecha" class="formulario__label">Fecha de hoy</label>
            <div class="formulario__grupo-input">
                <input type="date" class="formulario__input" name="fecha" id="fecha">
                <i class="formulario__validacion-estado bi bi-x-circle-fill"></i>
            </div>
            <p class="formulario__input-error"></p>
        </div>

        <!--grupo nombre-->
        <div class="formulario__grupo" id="grupo__nombre">
            <label for="nombre" class="formulario__label">Escribe tu nombre o nombres</label>
            <div class="formulario__grupo-input">
                <input type="text" class="formulario__input" name="nombre" id="nombre" placeholder="Javier Alejandro">
                <i class="formulario__validacion-estado bi bi-x-circle-fill"></i>
            </div>
            <p class="formulario__input-error">El nombre solo puede contener letras.</p>
        </div>

        <!--grupo apellidos-->
        <div class="formulario__grupo" id="grupo__paterno">
            <label for="paterno" class="formulario__label">Escribe tu apellido paterno</label>
            <div class="formulario__grupo-input">
                <input type="text" class="formulario__input" name="paterno" id="paterno" placeholder="Apellido paterno">
                <i class="formulario__validacion-estado bi bi-x-circle-fill"></i>
            </div>
            <p class="formulario__input-error">El apellido solo puede contener letras.</p>
        </div>

        <div class="formulario__grupo" id="grupo__materno">
            <label for="materno" class="formulario__label">Escribe tu apellido materno</label>
            <div class="formulario__grupo-input">
                <input type="text" class="formulario__input" name="materno" id="materno" placeholder="Apellido materno">
                <i class="formulario__validacion-estado bi bi-x-circle-fill"></i>
            </div>
            <p class="formulario__input-error">El apellido solo puede contener letras.</p>
        </div>

        <!--grupo genero-->
        <div class="formulario__grupo" id="grupo__genero">
            <label for="genero" class="formulario__label">Genero</label>
            <div class="formulario__grupo-input formulario__input">
                <label for="radio" class="formulario__input">Masculino</label>
                <input type="radio" name="sexo" id="sexo" required>
                <label for="radio" class="formulario__input">Femenino</label>
                <input type="radio" name="sexo" id="sexo">
                <i class="formulario__validacion-estado bi bi-x-circle-fill"></i>
            </div>
            <p class="formulario__input-error">Debes llenar el campo.</p>
        </div>

        <!--grupo telefono-->
        <div class="formulario__grupo" id="grupo__telefono">
            <label for="telefono" class="formulario__label">Ingresa tu número de telefono</label>
            <div class="formulario__grupo-input">
                <input type="text" class="formulario__input" name="telefono" id="telefono" placeholder="7772597800">
                <i class="formulario__validacion-estado bi bi-x-circle-fill"></i>
            </div>
            <p class="formulario__input-error">El número telefonico debe tener 10 digitos.</p>
        </div>

        <!--grupo matricula-->
        <div class="formulario__grupo" id="grupo__matricula">
            <label for="matricula" class="formulario__label">Escribe tu matricula</label>
            <div class="formulario__grupo-input">
                <input type="text" class="formulario__input" name="matricula" id="matricula" placeholder="20173tn201">
                <i class="formulario__validacion-estado bi bi-x-circle-fill"></i>
            </div>
            <p class="formulario__input-error">La matricula debe contener 10 dígitos.</p>
        </div>

        <!--grupo carrera-->
        <div class="formulario__grupo" id="grupo__carrera">
            <label for="carrera" class="formulario__label">Nombre de la carrera</label>
            <div class="formulario__grupo-input">
                <select class="formulario__input" name="carrera" id="carrera" required>
                    <option value="">Seleccionar</option>
                    <option value="1">Infraestructura de Redes Digitales</option>
                    <option value="2">Desarrollo de Software Multiplataforma</option>
                    <option value="3">Diseño Digital</option>
                    <option value="4">Diseño y Moda Industrial</option>
                </select>
                <i class="formulario__validacion-estado bi bi-x-circle-fill"></i>
            </div>
            <p class="formulario__input-error">El campo debe ser llenado obligatoriamente.</p>
        </div>

        <!--fechas-->
        <div class="formulario__grupo" id="grupo__cuatrimestre">
            <label for="cuatrimestre" class="formulario__label">Cuatrimestre a revalidar</label>
            <div class="formulario__grupo-input">
                <select class="formulario__input" name="cuatrimestre" id="cuatrimestre" required>
                    <option value="">Seleccionar</option>
                    <option value="1">Primero</option>
                    <option value="2">Segundo</option>
                    <option value="3">Tercero</option>
                    <option value="4">Cuarto</option>
                    <option value="5">Quinto</option>
                    <option value="6">Sexto</option>
                    <option value="7">Septimo</option>
                    <option value="8">Octavo</option>
                    <option value="9">Noveno</option>
                    <option value="10">Decimo</option>
                    <option value="11">Undecimo</option>
                </select>
                <i class="formulario__validacion-estado bi bi-x-circle-fill"></i>
            </div>
            <p class="formulario__input-error">El campo debe ser llenado obligatoriamente.</p>
        </div>
        </div>
        <!--grupo correo-->
        <div class="formulario__grupo" id="grupo__correo">
            <label for="correo" class="formulario__label">Escribe Tu Correo Institucional</label>
            <div class="formulario__grupo-input">
                <input type="email" class="formulario__input" name="correo" id="correo" placeholder="ejemplo@utez.edu.mx">
                <i class="formulario__validacion-estado bi bi-x-circle-fill"></i>
            </div>
            <p class="formulario__input-error">El correo debe ser el institucional.</p>
        </div>

        <!--grupo contraseña-->
        <div class="formulario__grupo" id="grupo__password">
            <label for="password" class="formulario__label">Escribe una contraseña<a href="" class=""></a></label>
            <div class="formulario__grupo-input">
                <input type="password" class="formulario__input" name="password" id="password" placeholder="">
                <i class="formulario__validacion-estado bi bi-x-circle-fill"></i>
            </div>
            <p class="formulario__input-error">La longitud de la contraseña debe ser al menos de 8 caracteres haciendo uso de mayúsculas, números o caracteres especiales.</p>
        </div>

        <!--grupo contraseña2-->
        <div class="formulario__grupo" id="grupo__password2">
            <label for="password2" class="formulario__label">Repetir contraseña</label>
            <div class="formulario__grupo-input">
                <input type="password" class="formulario__input" name="password2" id="password2" placeholder="">
                <i class="formulario__validacion-estado bi bi-x-circle-fill"></i>
            </div>
            <p class="formulario__input-error">Ambas contraseñas deben ser iguales.</p>
        </div>
        <!-- Grupo términos y Condiciones-->
        <div class="formulario__grupo" id="grupo__terminos">
            <label class="formulario__label">
                <input class="formulario__checkbox" type="checkbox" name="terminos" id="terminos">
                Acepto los Terminos y Condiciones
            </label>
        </div>

        <div class="formulario__mensaje" id="formulario__mensaje">
            <p><i class="fas fa-exclamation-triangle"></i> <b>Error:</b> Por favor rellena el formulario correctamente. </p>
        </div>
        <div class="formulario__grupo formulario__grupo-btn-enviar">
            <button type="submit" class="formulario__btn">Enviar</button>
            <p class="formulario__mensaje-exito" id="formulario__mensaje-exito">Formulario enviado exitosamente!</p>
        </div>
    </form>
</main>
<script src="js/formulario.js"></script>
</body>

</html>