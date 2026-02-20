package loginform;

import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class LoginServlet1 extends HttpServlet {

    private static final long serialVersionUID = 1L;

    protected void doPost(HttpServletRequest request,
                          HttpServletResponse response)
                          throws ServletException, IOException {

        String user = request.getParameter("username");
        String pass = request.getParameter("password");

        if(user.equals("admin") && pass.equals("123")) {

            response.sendRedirect("leaveForm.jsp");

        } else {

            response.getWriter().println(
            "<h2>Invalid Login</h2><a href='login.jsp'>Try Again</a>");
        }
    }
}
