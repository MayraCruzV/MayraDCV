package mx.edu.utez.practica1javaweb.model.administration.person;

public class beanPerson {
    private int id;
    private String nombre;
    private String useer;
    private String pass;

        public beanPerson(int id, String nombre, String useer, String pass) {
            this.id = id;
            this.nombre = nombre;
            this.useer = useer;
            this.pass = pass;
        }

        public beanPerson(int id, String useer, String pass) {
            this.id = id;
            this.useer = useer;
            this.pass = pass;
        }

        public beanPerson(String useer, String pass) {
            this.useer = useer;
            this.pass = pass;
        }

    public beanPerson(String name, String useer, String pass) {
        this.useer = useer;
        this.pass = pass;
        this.nombre = name;
    }


        public void setId(int id) {
            this.id = id;
        }

        public void setNombre(String nombre) {
            this.nombre = nombre;
        }

        public void setUser(String useer) {
            this.useer = useer;
        }

        public void setPass(String pass) {
            this.pass = pass;
        }




        public int getId() {
            return id;
        }

        public String getNombre() {
            return nombre;
        }

        public String getUser() {
            return useer;
        }

        public String getPass() {
            return pass;
        }


    }

