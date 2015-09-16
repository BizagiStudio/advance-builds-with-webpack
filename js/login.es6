let login = (username,password) => {
	if(username !== 'admin' || password !== 'radical2') {
		console.log("bad login");
	}
};

login('admin','asd');