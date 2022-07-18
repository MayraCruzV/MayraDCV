<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>


<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/font/bootstrap-icons.css">
    <title>Iniciar Sesión</title>
    <link rel="stylesheet" href="css/loggin.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/bxslider/4.2.12/jquery.bxslider.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/bxslider/4.2.12/jquery.bxslider.min.js"></script>
</head>

<body class="text-center">
<h1>Iniciar sesión</h1>
<a href="WEB-INF/inte/loggin.jsp" class="iconoreg"><i class="bi bi-person-circle"></i></a>
<div class="contenedor">


    <div class="login">
        <div class="top-row">
            <img src="imagenes/halcon.png" alt="logo" class="logo">
        </div>

        <form class="form-control bg-dark bg-opacity-50" action="ServletPerson" method="post">
        <div class="contenido">
            <h1>Iniciar Sesión</h1>

            <p>Correo Electrónico</p>
            <input type="text"  id="user" name="user" placeholder="correo@utez.edu.mx" class="text">
            <p>Contraseña</p>

            <input type="password"id="pass" name="pass"  placeholder="Ingresa una contraseña" class="text">

            <input type="hidden" value="inicioSesion" name="accion" class="text">
            <button type="submit" class="boton">Entrar</button>
        </div>
        </form>
    </div>
</div>




<div class="${clase}" role="alert">
    <h4>${mensaje}</h4>
</div>
    <script src="js/bootstrap.js"></script>

</body>

</html>