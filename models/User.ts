import  mongoose, { Schema, model } from  "mongoose";

//interface
export interface UserDocument {
    _id: string;
    email: string;
    password: string;
    name: string;
    phone: string;
    image: string;
    createdAt: Date;
    updatedAt: Date;
  }

  //scheme for user document - structure & validation rules
  const UserSchema = new Schema<UserDocument>({
    email: {
      type: String,
      unique: true,
      required: [true, "Required: Your Email"],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Email is invalid",
      ],
    },
    password: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: [true, "Required: Your Name"]
    }
  },
  {
    timestamps: true,
  }
);


const  User  =  mongoose.models?.User  ||  model<UserDocument>('User', UserSchema);
export  default  User;