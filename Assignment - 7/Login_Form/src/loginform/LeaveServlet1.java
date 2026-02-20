package loginform;

import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class LeaveServlet1 extends HttpServlet {

    private static final long serialVersionUID = 1L;

    protected void doPost(HttpServletRequest request,
                          HttpServletResponse response)
                          throws ServletException, IOException {

        String name = request.getParameter("name");

        request.setAttribute("name", name);

        RequestDispatcher rd =
        request.getRequestDispatcher("success.jsp");
        rd.forward(request, response);
    }
}
