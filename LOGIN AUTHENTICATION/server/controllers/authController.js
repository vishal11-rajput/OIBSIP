const User = require('../models/user')
const {hashPassword, comparePassword} = require('../helpers/auth')


const test = (req,res)=>{
    res.json('test is working')
}

//for register
const registerUser = async(req,res)=>{
    try{
        const{name,email,password} = req.body
        //name
        if(!name){
            return res.json({
                error: 'name is required'
            })
        }
        if(!email){
            return res.json({
                error: 'email is required'
            })
        }
        if(!password || password.length <6){
            return res.json({
                error: 'password is required and should be atleast 6 characters' 
            })
        }
        //email
        const exist = await User.findOne({email})
        if(exist){
            res.json({
                error: 'email already used, please use another email'
            })
        }

        const hashedPassword = await hashPassword(password)

        //creating user in database
       const user = await User.create({
        name,
        email,
        password: hashedPassword,
       })
       res.json(user)
        
    }
    catch(err){
        console.log(err)
    }
}

//for login
const loginUser = async (req,res) =>{
    try{
        const {email,password} = req.body

        // checking if user already exists
        const user = await User.findOne({email})
        if(!user){
            return res.json({
                error: 'no user found with this email'
            })
        }

        // checking if password exists
        const match = await comparePassword(password, user.password)
        if(match){
           
            res.json('password matches');
        }
        if(!match){
            res.json({
                error: 'password does not match'})}
     }
    catch(err){
        console.log(err);
    }
}


module.exports= {
    test,
    registerUser,
    loginUser
};