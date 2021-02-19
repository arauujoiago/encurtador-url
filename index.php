<?php $flag = $_GET['errorcode'];
 ?>

<!doctype html>
<html lang="pt-br">

<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta charset="utf-8">

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato|Montserrat&display=swap">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/stylelogin.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" integrity="sha384-gfdkjb5BdAXd+lj+gudLWI+BXq4IuLW5IT+brZEZsLFm++aCMlF1V92rMkPaX4PP" crossorigin="anonymous">

    <title>Login - Sala Virtual</title>
    <link rel="shortcut icon" href="img/favicon.png">
</head>

<body>
    <?php if($flag == 3){echo('<div class="alert alert-danger" id="alerta" role="alert"> Matrícula e/ou senha errados!</div>');} ?>
    <div class="container text-center d-flex justify-content-center align-middle" style="padding: 50px 0px;">
        <div class="container h-100">
            <div class="d-flex justify-content-center">
                <div class="user_card">
                    <!-- <span><i id="icone" class="fas fa-users"></i></span> -->
                    <img src="img/logo.svg" id="logo">
                    <div class="d-flex justify-content-center form_container" style="margin-top: 10px !important;">
                        <form method="POST" action="http://salavirtual.unifacex.com.br/login/index.php">
                            <div class="input-group mb-3">
                                <div class="input-group-append">
                                    <span class="input-group-text"><i class="fas fa-user"></i></span>
                                </div>
                                <input type="text" name="username" autofocus id="username" class="form-control input_pass" placeholder="Matrícula">
                            </div>
                            <div class="input-group mb-3">
                                <div class="input-group-append">
                                    <span class="input-group-text"><i class="fas fa-key"></i></span>
                                </div>
                                <input type="password" name="password" autofocus id="senha" class="form-control input_pass" placeholder="Senha">
                            </div>
                            <div class="d-flex justify-content-center mt-3 login_container">
                                <button type="submit" name="button" id="loginbutton" class="btn login_btn"><span id="logintext">Entrar</span><div class="spinner-border" id="spinner" role="status">
  <span class="sr-only">Loading...</span>
</div></button>
                            </div>
                            <div class="input-group mt-2 mx-auto justify-content-center"><a href="http://salavirtual.unifacex.com.br/login/forgot_password.php">Esqueceu sua senha?</a></div>
                            <a href="http://salavirtual.unifacex.com.br/interno/videos/acessando_sala_virtual.mp4">Veja um tutorial de como acessar.</a>
 </form>
                    </div>
                </div>

            </div>
            <div class="d-flex justify-content-center">
                <div id="footerLogin">
                    <div class="page-footer text-center my-3">
                        <spam><b>NEaD - Unifacex</b></br>suporteead@unifacex.com.br</spam>
                    </div>
<div id="social">
<a href="https://twitter.com/unifacexbr" target="_blank"><img src="img/twitter.png" id="socialIcon"></a>
<a href="https://www.facebook.com/unifacexbr" target="_blank"><img src="img/facebook.png" id="socialIcon"></a>
<a href="https://www.instagram.com/unifacexbr/" target="_blank"><img src="img/instagram.png" id="socialIcon"></a>
<a href="https://www.linkedin.com/in/centro-universit%C3%A1rio-facex-unifacex-a5925276" target="_blank"><img src="img/linkedin.png" id="socialIcon"></a>
</div>


                </div>
            </div>
        </div>
<!--
<div id="social">
<a href="https://twitter.com/unifacexbr" target="_blank"><img src="img/twitter.png" id="socialIcon"></a>
<a href="https://www.facebook.com/unifacexbr" target="_blank"><img src="img/facebook.png" id="socialIcon"></a>
<a href="https://www.instagram.com/unifacexbr/" target="_blank"><img src="img/instagram.png" id="socialIcon"></a>
<a href="https://www.linkedin.com/in/centro-universit%C3%A1rio-facex-unifacex-a5925276" target="_blank"><img src="img/linkedin.png" id="socialIcon"></a>
</div>
-->
</div>
</div>
</body>

<footer class="page-footer container">
<script
  src="https://code.jquery.com/jquery-3.5.1.js"
  integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc="
  crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <script src="./js/script.js"></script>
</footer>

</html>
