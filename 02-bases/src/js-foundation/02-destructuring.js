

 const {SHELL, USERNAME, JAVA_HOME}  = process.env;

 console.log(SHELL, USERNAME, JAVA_HOME);

 const characters = ['spiderman', 'ironman', 'doctor strange',  'capitan america']

 const [,,capitanAmerica] = characters;

 console.log(capitanAmerica)