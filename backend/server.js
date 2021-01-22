const express=require('express')
const env=require('dotenv')
const cors=require('cors')
const bodyParser=require('body-parser')
const mongoose =require('mongoose')
const userRouter=require('./routes/users')
const adminRoute=require('./routes/admin/admin')
const caterRoute=require('./routes/catergory')
const productRoute=require('./routes/products')
const cartRoute=require('./routes/cart')
const initialDataRoute=require('./routes/admin/initialData')
const doctorRoute=require('./routes/doctors')
const patientRoute=require('./routes/patients')
const getDocRoute=require('./routes/doctors')
const getPatientsRoute=require('./routes/patients')
const medicineRoute=require('./routes/medicine')
const getMedicRoute=require('./routes/medicine')
const startDataRoute=require('./routes/admin/startData')
const labRoute=require('./routes/lab')
const app=express()
const path=require('path')

//configuration 
env.config();

//database connection
mongoose.connect(
    process.env.MONGO_DB_DATABASE,
{ 
    useUnifiedTopology: true, 
    useNewUrlParser: true,
    useCreateIndex: true
 }
).then(()=>{
    console.log('Successfully connected to the database');
}).catch(()=>{
    console.log('Error in connecting to the database');
})
//middleware
app.use(express.json())

//routes
app.use(cors())
app.use('/public', express.static(path.join(__dirname, 'uploads')))
app.use('/api', userRouter) 
app.use('/api', adminRoute)
app.use('/api', caterRoute)
app.use('/api', productRoute)
app.use('/api', cartRoute)
app.use('/api', initialDataRoute)
app.use('/api', doctorRoute);
app.use('/api', patientRoute)
app.use('/api', getDocRoute);
app.use('/api', getPatientsRoute);
app.use('/api', medicineRoute)
app.use('/api', startDataRoute)
app.use('/api', labRoute)


//listening
app.listen(process.env.PORT, ()=>{console.log(`Server running port ${process.env.PORT}`)})