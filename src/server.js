const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const jwt = require('jsonwebtoken');
// Use CORS middleware
app.use(cors());
app.use(express.static('public'));

// Connect to MongoDB
mongoose.connect('mongodb+srv://Vithyawessalini:7Ty1Nlwmpt05br4g@cluster0.95wjl6y.mongodb.net/petadoption', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.json());

const Volunteer = mongoose.model('Volunteer', {
  email: String,
  name: String,
  dob: String,
  phoneNumber: String,
  address: String,
  education: String,
  occupation: String,
  organization: String,
  skills: String,
  agreement: Boolean,
});

app.post('/vsign', async (req, res) => {
  const {
    email,
    name,
    dob,
    phoneNumber,
    address,
    education,
    occupation,
    organization,
    skills,
    agreement,
  } = req.body;

  try {
    if (
      !email ||
      !name ||
      !dob ||
      !phoneNumber ||
      !address ||
      !education ||
      !occupation ||
      !organization ||
      !skills ||
      agreement === undefined
    ) {
      return res.status(400).json({ message: 'Please fill in all fields' });
    }

    const newVolunteer = new Volunteer({
      email,
      name,
      dob,
      phoneNumber,
      address,
      education,
      occupation,
      organization,
      skills,
      agreement,
    });

    await newVolunteer.save();

    res.status(201).json({ message: 'Volunteer data saved successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads'); // Create an 'uploads' directory to store uploaded files
  },
  filename: (req, file, cb) => {
    const extname = path.extname(file.originalname);
    cb(null, Date.now() + extname); // Rename the file with a timestamp
  },
});

const upload = multer({ storage });

const RescueForm = mongoose.model('RescueForm', {
  email: String,
  name: String,
  photo: String,
  phoneNumber: String,
  description: String,
  location: String,
});

app.post('/rform', upload.single('file'), async (req, res) => {
  const { email, name, phoneNumber, description, location } = req.body;

  try {
    if (!email || !name || !phoneNumber || !description || !location || !req.file) {
      return res.status(400).json({ message: 'Please fill in all fields' });
    }

    const newRescueForm = new RescueForm({
      email,
      name,
      phoneNumber,
      description,
      location,
      photo: req.file.filename,
    });

    await newRescueForm.save();

    res.status(201).json({ message: 'Rescue Form saved successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


const CrueltyForm = mongoose.model('CrueltyForm', {
  email: String,
  name: String,
  photo: String,
  phoneNumber: String,
  description: String,
  location: String,
});

app.use('/uploads', express.static('uploads'));
app.post('/cform', upload.single('file'), async (req, res) => {
  const { email, name, phoneNumber, description, location } = req.body;

  try {
    if (!email || !name || !phoneNumber || !description || !location || !req.file) {
      return res.status(400).json({ message: 'Please fill in all fields' });
    }

    const newCrueltyForm = new CrueltyForm({
      email,
      name,
      phoneNumber,
      description,
      location,
      photo: req.file.filename,
    });

    await newCrueltyForm.save();

    res.status(201).json({ message: 'Rescue Form saved successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});
app.use('/uploads', express.static('uploads'));


const AdoptionForm = mongoose.model('AdoptionForm', {
  name: String,
  dateOfBirth: String,
  gender: String,
  occupation: String,
  address: String,
  phoneNumber: String,
  altPhoneNumber: String,
  email:String,
  specificAnimal:String,
  agreement:Boolean,
});

app.post('/aform', async (req, res) => {
  const formData = req.body;

  try {
    if (!validateFormData(formData)) {
      return res.status(400).json({ message: 'Invalid Adoption form data' });
    }

    const newAdoptionForm = new AdoptionForm(formData);
    await newAdoptionForm.save();

    res.status(201).json({ message: 'Adoption form data saved successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error for Adoption form' });
  }
});

function validateFormData(formData) {
  return (
    formData.name &&
    formData.dateOfBirth &&
    formData.gender &&
    formData.occupation &&
    formData.address &&
    formData.phoneNumber
  );
}


const User = mongoose.model('User', {
  name :String,
  email :String,
  password :String,
  confirmpassword:String,
  contactNumber :String,
  address:String
});


app.post('/sign', async (req, res) => {
    const {
      name ,
      email ,
      password ,
      confirmpassword,
      contactNumber ,
      address,
    } = req.body;

    try {


      if ( !name ||
      !email ||
      !password ||
      !confirmpassword||
      !contactNumber ||
      !address) {
        return res.status(400).json({ message: 'Please fill in all fields' });
      }

      const newUser = new User({
        name ,
      email ,
      password ,
      confirmpassword,
      contactNumber ,
      address,
      });

    
      await newUser.save();

      
      res.status(201).json({ message: 'Registration successful!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

  app.post('/login', async (req, res) => {
    const { name, password } = req.body;
  
    try {
      const user = await User.findOne({ name });
      if (!user ) {
        return res.status(401).json({ message: 'Invalid username or password' });
      }
      
      if (password !== user.password) {
        return res.status(401).json({ message: 'Invalid username or password' });
      }
  
      // Create and send a JWT token for successful login
      const token = jwt.sign({ userId: user._id }, 'your-secret-key', {
        expiresIn: '1h', // You can adjust the token expiration time
      });
  
      res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  app.get('/getProfile', async (req, res) => {
    try {
      const token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, 'your-secret-key');
      const user = await User.findById(decoded.userId);
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.json(user);
    } catch (error) {
      res.status(401).json({ message: 'Unauthorized' });
    }
  });
  const Donation = mongoose.model('Donation', {
    email: String,
    name: String,
    paymentImage: String,
    phoneNumber: String,
  });
  
  // Donation submission endpoint
  app.post('/dform', upload.single('paymentImage'), async (req, res) => {
    // Extract data from request body
    const { email, name, phoneNumber } = req.body;
  
    try {
      // Validate data
      if (!email || !name || !phoneNumber || !req.file) {
        return res.status(400).json({ message: 'Please fill in all fields' });
      }
  
      // Create a new Donation instance
      const newDonation = new Donation({
        email,
        name,
        phoneNumber,
        paymentImage: req.file.filename,
      });
  
      // Save the new Donation data to the database
      await newDonation.save();
  
      // Respond with a success message
      res.status(201).json({ message: 'Donation Form saved successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
