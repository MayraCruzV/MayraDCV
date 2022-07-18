package mx.edu.utez.practica1javaweb.service.administration.person;

import mx.edu.utez.practica1javaweb.model.administration.person.beanPerson;
import mx.edu.utez.practica1javaweb.utility.conexionMysql2;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class DaoPerson {
       // Logger logger = LoggerFactory.getLogger(DaoPerson.class);
        public beanPerson consultaLogin (beanPerson acceso){
            beanPerson login=null;
            try{
                Connection con= conexionMysql2.getConnection();
                String sqlLogin="SELECT * FROM acceso WHERE useer=? AND pass=?;";
                PreparedStatement ps=con.prepareStatement(sqlLogin);
                ps.setString(1,acceso.getUser());
                ps.setString(2,acceso.getPass());
                ResultSet res= ps.executeQuery();
                if(res.next()){
                    login=new beanPerson(res.getInt("id_acceso"),
                            res.getString("useer"), res.getString("pass"));
                    System.out.println(res.getInt("id_acceso"));
                    System.out.println(res.getInt("useer"));
                    System.out.println(res.getInt("pass"));
                }
            }catch(Exception e){
                e.printStackTrace();
                //logger.error(e.getMessage());
            }
            return login;
        }

    //Metodo para registrar en la tabla usuarios
    public boolean registrarUser(beanPerson acceso) {
        try (Connection con = conexionMysql2.getConnection()) {
            try (PreparedStatement pstm = con.prepareStatement("insert into acceso(useer,pass) values(?,?)")) {
                pstm.setString(1, acceso.getUser());
                pstm.setString(2, acceso.getPass());
                return pstm.executeUpdate() == 1;
            } catch (Exception e) {
                e.printStackTrace();
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return false;
    }
    }

