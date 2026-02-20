<!DOCTYPE html>
<html>
<head>
<title>Leave Form</title>
<link rel="stylesheet" href="style.css">
</head>
<body>

<div class="card">
<h2>Leave Application</h2>

<form action="LeaveServlet1" method="post">

<input type="text" name="name" placeholder="Your Name" required>

<input type="date" name="fromDate" required>
<input type="date" name="toDate" required>

<textarea name="reason" placeholder="Reason" required></textarea>

<button type="submit">Apply Leave</button>

</form>
</div>

</body>
</html>
