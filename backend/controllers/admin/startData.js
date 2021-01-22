const Catergory = require("../../models/catergory");
const Medicine = require("../../models/medicine");

function createCatergories(catergories, parentId) {
  const catergoryList = [];
  let catergory;
  if (parentId == null) {
    catergory = catergories.filter((cat) => cat.parentId == undefined);
  } else {
    catergory = catergories.filter((cat) => cat.parentId == parentId);
  }
  for (let cate of catergory) {
    catergoryList.push({
      _id: cate._id,
      name: cate.name,
      slug: cate.slug,
      parentId: cate.parentId,
      children: createCatergories(catergories, cate._id),
    });
  }
  return catergoryList;
}

exports.startData = async (req, res) => {
  const categories = await Catergory.find({}).exec();
  const medicines = await Medicine.find({})
    .select("id name price quantity slug description productPitures category")
    .exec();
  res.status(200).json({
    categories: createCatergories(categories),
    medicines,
  });
};
