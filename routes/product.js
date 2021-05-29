const express = require("express");
const router = express.Router();
const Product = require("../models/product");
const Review = require("../models/review");
const { isLoggedIn } = require("../middleware");

// Display all the products

router.get("/products", async (req, res) => {
	try {
		const products = await Product.find({});
		res.render("products/index", { products });
	} catch (e) {
		console.log("Something Went Wrong");
		req.flash("error", "Cannot Find Product");
		res.render("error");
	}
});

// Get the form for new product

router.get("/products/new", isLoggedIn, (req, res) => {
	res.render("products/new");
});

// Create New Product

router.post("/products", isLoggedIn, async (req, res) => {
	try {
		await Product.create(req.body.product);
		req.flash("success", "Product Created Successfully!");
		res.redirect("/products");
	} catch (e) {
		console.log(e.message);
		req.flash("error", "Cannot Create Product, Something went wrong");
		res.render("error");
	}
});

// show particular product

router.get("/products/:id", async (req, res) => {
	try {
		const product = await Product.findById(req.params.id).populate(
			"reviews"
		);
		res.render("products/show", { product });
	} catch (e) {
		console.log(e.message);
		req.flash("error", "Cannot Find Product");
		res.redirect("/error");
	}
});

// To get the edit form

router.get("/products/:id/edit", isLoggedIn, async (req, res) => {
	const product = await Product.findById(req.params.id);
	res.render("products/edit", { product });
});

// To update

router.patch("/products/:id", isLoggedIn, async (req, res) => {
	await Product.findByIdAndUpdate(req.params.id, req.body.product);
	req.flash("success", "Updated Successfully!");
	res.redirect(`/products/${req.params.id}`);
});

// To delete

router.delete("/products/:id", isLoggedIn, async (req, res) => {
	await Product.findByIdAndDelete(req.params.id);
	res.redirect("/products");
});

// creating comments

router.post("/products/:id/review", isLoggedIn, async (req, res) => {
	const product = await Product.findById(req.params.id);
	const review = new Review({
		user: req.user.username,
		...req.body,
	});

	product.reviews.push(review);
	await review.save();
	await product.save();
	res.redirect(`/products/${req.params.id}`);
});

router.get("/error", (req, res) => {
	res.status(500).render("error");
});

module.exports = router;
