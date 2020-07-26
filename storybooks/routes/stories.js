const express = require("express");
const router = express.Router();
const { ensureAuth } = require("../middleware/auth");
const Story = require("../models/Story");


// @desc        Show Add Page
// @route       GET /stories/add

router.get("/add", ensureAuth, (req, res) => {
	res.render("stories/add");
});

// @desc        Process Add Form 
// @route       Post /stories

router.post("/", ensureAuth, async (req, res) => {
	try {
		req.body.user = req.user.id;
		await Story.create(req.body);
		res.redirect("/dashboard");
	} catch (err) {
		console.error(err);
		res.render("error/500");
	}
});

// @desc        Show All Stories
// @route       GET /stories

router.get("/", ensureAuth, async (req, res) => {
	try {
		const stories = await Story.find({ status: "public" })
			.populate("user")
			.sort({ createdAt: "desc" })
			.lean();
		res.render("stories/index", {
			stories,
		});
	} catch (err) {
		console.error(err);
		res.render("error/500");
	}
});

//@desc        Get Single Story
//@route       get /stories/:id

router.get("/:id", ensureAuth, async (req, res) => {
	try {
        
        let story = await Story.findById(req.params.id)
        .populate('user')
        .lean();

		if (!story) {
			return res.redirect("error/404");
        }
        res.render('stories/show', {
            story
        })
		
	} catch (err) {
		console.error(err);
		res.redirect("error/404");
	}
});

//@desc        Show Edit Page
//@route       GET /stories/edit/:id

router.get("/edit/:id", ensureAuth, async (req, res) => {
	try {
		const story = await Story.findOne({
			_id: req.params.id,
		}).lean();

		if (!story) {
			return res.redirect("error/404");
		}

		if (story.user != req.user.id) {
			res.redirect("/stories");
		} else {
			res.render("stories/edit", {
				story,
			});
		}
	} catch (err) {
		console.error(err);
		res.redirect("error/500");
	}
});

//@desc        Edit Story
//@route       put /stories/:id

router.put("/:id", ensureAuth, async (req, res) => {
	try {
		let story = await Story.findById(req.params.id).lean();
		if (!story) {
			return res.redirect("error/404");
		}
		if (story.user != req.user.id) {
			res.redirect("/stories");
		} else {
			story = await Story.findOneAndUpdate({ _id: req.params.id }, req.body, {
				new: true,
				runValidators: true,
			});
			res.redirect("/dashboard");
		}
	} catch (err) {
		console.error(err);
		res.redirect("error/500");
	}
});

//@desc        Delete Story
//@route       delete /stories/:id

router.delete("/:id", ensureAuth, async (req, res) => {
	try {

		let story = await Story.findByIdAndDelete(req.params.id);
		res.redirect("/dashboard");
		
	} catch (err) {
		console.error(err);
		res.redirect("error/500");
	}
});

//@desc        Get User Stories
//@route       get /stories/user/:userId
router.get("/user/:userId", ensureAuth, async (req, res) => {
	try {
        let stories = await Story.find({
            user : req.params.userId,
            status: 'public'
        })
        .populate('user')
        .lean();
        res.render('stories/index',{
            stories
        });
	} catch (err) {
		console.error(err);
		res.redirect("error/500");
	}
});


module.exports = router;
