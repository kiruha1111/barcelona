<!DOCTYPE html>
<html>
<head>
	<meta charset = "UTF-8">
    <title>Форма для регистрации</title>
	<link href="css/style1.css" rel="stylesheet">
</head>
<body>
	<form action="register.php" method="post">
		<div><input type="text" placeholder="login" name="login"></div>
		<div><input type="text" placeholder="password" name="pass"></div>
		<div><input type="text" placeholder="repeat password" name="repeatpass"></div>
		<div><input type="text" placeholder="email" name="email"></div>
		<div><button type="submit">Зарегистрироваться</button></div>
	</form>
	
	<form action="login.php" method="post">
		<div><input type="text" placeholder="login" name="login"></div>
		<div><input type="text" placeholder="password" name="pass"></div>
		<div><button type="submit">Войти</button></div>
	</form>
</body>
</html>