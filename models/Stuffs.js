'use strict';

/**
 * Module dependencies
 */

var mongoose = require('mongoose');

// end module dependencies

var StuffSchema = new mongoose.Schema({
  name: String
});

mongoose.model('Stuff', StuffSchema);
