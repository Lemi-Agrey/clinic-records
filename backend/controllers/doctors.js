const Doctor=require('../models/doctors')

exports.addDoctor= (req, res)=>{
    const {name, gender, address, status, contact, email, time_available, occupation}=req.body;
    const doctor= new Doctor({
        name,
        gender,
        address,
        status,
        contact,
        email,
        time_available,
        occupation
    })

    doctor.save((error, doctor)=>{
        
        if(error) return res.status(400).json({error})
        if(doctor) return res.status(200).json({doctor})
            
        })
    
}
exports.getDoctors=(req, res)=>{
    Doctor.find({})
    .exec((error, doctor)=>{
        if(error) return res.status(400).json({error})
        if(doctor){
            return res.status(200).json({doctor})
        }
    })
}