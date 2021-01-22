const Patient = require("../models/patients");
const slugify = require("slugify");

exports.addPatient = (req, res) => {
  const patient = new Patient({
    name: req.body.name,
    slug: slugify(req.body.name),
    age: req.body.age,
    blood_grp: req.body.blood_grp,
    temperature: req.body.temperature,
    gender: req.body.gender,
    contact: req.body.contact,
    address: req.body.address,
    allegies: req.body.allegies,
    next_of_kin: req.body.next_of_kin,
    nok_address: req.body.nok_address,
    nok_contact: req.body.nok_contact,
  });
 
  patient.save((error, patient) => {
    if (error) return res.status(400).json({ error });
    if (patient) return res.status(200).json({ patient });
  });
};
exports.getPatients = (req, res) => {
  Patient.find({}).exec((error, patient) => {
    if (error) return res.status(400).json({ error });
    if (patient) {
      return res.status(200).json({ patient });
    }
  });
};
