import mongoose, {Schema} from "mongoose"

const userSchema =new Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        lowercase: true,
        trim:true,
        index:true

    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase: true,
        trim:true,
       

    },
    fullname:{
        type:String,
        required:true,
        trim:true,
    
    },
     avatar:{
        type:String, //cloudnary url 
        required:true,
      
    },
     coverImage:{
        type:String,
       
       
    },
    watchHistory:{
        type:Schema.Types.ObjcectId,
        ref:"Video"
    },
     password:{
        type:String,
        required:true,
    },
    refreshToken:{
        type:String
    }
    
}
,
{
    timestamps:true
})

userSchema.methods.generateAccessToken = function(){
    return jwt.sign({
        _id:this.id,
        email: this.email,
        username:this.usrname,
        fullName:this.fullName
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
        expiresIn: proceess.env.ACCESS_TOKEN_EXPIRY
    }
)
}
userSchema.methods.generateRefreshToken = function(){

}
export const User = mongoose.model("User",userSchema)