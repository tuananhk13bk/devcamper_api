import { Schema, model } from "mongoose";
import bootcampSchemaDefinition from "./definition";
// import bootcampSchemaDefinition from "./definition";

// const bootcampSchema = new Schema(bootcampSchemaDefinition.properties);

const bootcampSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please add a name"],
    unique: true,
    trim: true,
    maxlength: [50, "Name can not be more than 50 characters"]
  },
  slug: String,
  description: {
    type: String,
    required: [true, "Please add a description"],
    maxlength: [500, "Description can not be more than 50 characters"]
  },
  website: {
    type: String,
    match: [
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
      "Please use a valid URL with HTTP or HTTPS"
    ]
  },
  location: {
    type: {
      type: String,
      enum: ["Point"],
      required: true
    },
    coordinates: {
      type: [Number],
      required: true,
      index: "2dsphere"
    },
    formattedAddress: String,
    street: String,
    city: String,
    state: String,
    zipCode: String,
    count: String,
    careers: {
      type: [String],
      required: true,
      enum: [
        "Web Development",
        "Mobile development",
        "UI/UX",
        "Data Science",
        "Business",
        "Other"
      ]
    },
    averageRating: {
      type: Number,
      min: [1, "Rating must be at least 1"],
      max: [10, "Rating must can not be more than 10"]
    },
    averageCost: {
      type: Number
    },
    photo: {
      type: String,
      default: "no-photo.jpg"
    },
    housing: {
      type: Boolean,
      default: false
    },
    jobAssistance: {
      type: Boolean,
      default: false
    },
    jobGuarantee: {
      type: Boolean,
      default: false
    },
    acceptGi: {
      type: Boolean,
      default: false
    },
    createdAt: {
      type: Date,
      default: Date.now()
    }
  }
});

const BootcampModel = model("bootcamps", bootcampSchema);

export default BootcampModel;
