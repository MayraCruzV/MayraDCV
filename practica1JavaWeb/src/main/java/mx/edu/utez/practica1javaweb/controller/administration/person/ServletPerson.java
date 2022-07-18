package mx.edu.utez.practica1javaweb.controller.administration.person;

import mx.edu.utez.practica1javaweb.model.administration.person.beanPerson;
import mx.edu.utez.practica1javaweb.service.administration.person.DaoPerson;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;
import java.io.InputStream;

@WebServlet(name = "ServletPerson", urlPatterns = "/ServletPerson")
public class ServletPerson extends HttpServlet {
        @Override
        protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        }

        @Override
        protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
            String mensaje="";
            String clase="";
            String peticion=request.getParameter("accion");
            RequestDispatcher dispatcher=null;
            HttpSession sesionLogin;
            beanPerson usuario;

            switch (peticion){
                case "inicioSesion":
                    sesionLogin =request.getSession(true);
                    usuario = new beanPerson(request.getParameter("user"), request.getParameter("pass"));
                    DaoPerson daoUsuario=new DaoPerson();
                    usuario=daoUsuario.consultaLogin(usuario);
                    System.out.println(request.getParameter("useer"));
                    System.out.println(request.getParameter("pass"));
                    if(usuario !=null){
                        sesionLogin.setAttribute("user", usuario.getUser());
                        sesionLogin.setAttribute("pass",usuario.getPass());
                        sesionLogin.setAttribute("id",usuario.getId());
                        mensaje="Bienvenido al sistema " + usuario.getUser();
                        dispatcher =request.getRequestDispatcher("menuprincipal.jsp");
                        request.getRequestDispatcher(mensaje);

                    }else{
                        System.out.println("No se encontró en la BD!");
                        mensaje = "Datos incorrectos, verifica tu usuario y/o contraseña.";
                        clase="alert alert-danger";
                        dispatcher=request.getRequestDispatcher("index.jsp");
                        request.getRequestDispatcher(mensaje);

                    }

                    break;
                case "registrar":
                    String pass=request.getParameter("pass");
                    String user=request.getParameter("user");
                    String name=request.getParameter("name");
                    System.out.println("nombre: " + name);
                    System.out.println("user: " + user);
                    System.out.println("pass: " + pass);

                    usuario=new beanPerson(name,user,pass);
                    if(new DaoPerson().registrarUser(usuario)){
                        request.setAttribute("mensaje","Usuario registrado correctamente!");
                        System.out.println("El usuario ha sido registrado");
                        dispatcher =request.getRequestDispatcher("menuprincipal.jsp");
                        request.getRequestDispatcher(mensaje);
                    }else{
                        request.setAttribute("mensaje","Error al registrar el usuario!");
                        dispatcher =request.getRequestDispatcher("menuprincipal.jsp");
                        request.getRequestDispatcher(mensaje);
                    }
                    doGet(request,response);
                    break;


                case "cerrarSesion":
                    break;
                default:
                    break;

            }
            request.setAttribute("mensaje",mensaje);
            request.setAttribute("clase",clase);
            dispatcher.forward(request,response);

        }
    }

