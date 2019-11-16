const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// pointSchema
const pointSchema = new Schema({
  type: {
    type: String,
    default: "Point",
    required: true
  },
  coordinates: {
    type: [Number],
    index: "2dsphere",
    required: true
  }
});

// inviteeSchema
const inviteeSchema = new Schema({
  name: String,
  status: String,
  invited: Boolean
});

// imgSchema
// will not work before body-parser implementation
const imgSchema = new Schema({
  img: {
    data: Buffer,
    contentType: String
  }
})

// eventSettingsSchema
const eventSettingsSchema = new Schema({
  ticketURL: String,
  media: {
    coverImg: imgSchema,
    hostImg: [imgSchema],
    userImg: [imgSchema]
  },
  tags: {
    hostTags: [String],
    userTags: [String]
  }
})

// create event Schema
const eventSchema = new Schema({
  private: {
    // id: Number, // mongoDB automatically assigns id
    adminId: Number,
    location: {
      type: pointSchema,
      required: true
    },
    dateCreated: Date,
    lastUpdated: Date,
    eventPrivacy: String
  },
  public: {
    name: String,
    time: Date,
    date: Date, // can possibly be merged with time
    venue: String,
    price: String,
    host: String, // admin
    description: String,
    rating: Number, // type: float
    eventSettings: eventSettingsSchema,
    attendance: {
      list: [inviteeSchema]
    }
  }
})
