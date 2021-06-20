const Category = require("../models/category");

exports.getCategoryById = (req, res, next, id) => {
  Category.findById(id).exec((err, catey) => {
    if (err) {
      return res.status(400).json({
        err: "Category not found",
      });
    }

    req.category = catey;
    next();
  });
};

exports.createCategory = (req, res) => {
  const category = new Category(req.body);

  category.save((err, catey) => {
    if (err) {
      return res.status(400).json({
        err: "Can't create a category",
      });
    }
    return res.json({ catey });
  });
};

exports.getAllCategories = (req, res) => {
  Category.find.exec((err, cate) => {
    if (err) {
      return res.status(400).json({
        err: "Can't create a category",
      });
    }
    return res.json({ cate });
  });
};
