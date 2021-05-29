const isLoggedIn = (req, res, next) => {
	if (!req.isAuthenticated()) {
		req.flash("error", "Please Login to Add New Products");
		return res.redirect("/login");
	}
	next();
};

module.exports = {
	isLoggedIn,
};
