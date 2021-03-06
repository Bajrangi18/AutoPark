body {
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  height: 100vh;
}
#loginBox {
  width: 80vw;
  position: absolute;
  top: 18vh;
  left: 10vw;
  background-color: white;
  height: 55vh;
  border-radius: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

}

#loginHead {
  font-family: 'Montserrat', sans-serif;
  font-family: 'Poppins', sans-serif;
  font-family: 'Radio Canada', sans-serif;
  font-family: 'Raleway', sans-serif;
  font-family: 'Roboto', sans-serif;
  font-family: 'Ubuntu', sans-serif;
font-size: 5vh;
align-items: center;
}
#logos {
  position: absolute;
  top: 40vh;
  left: 9vw;
}

@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}
