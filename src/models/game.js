/**
 *
 * ===
 *
 */

////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////

import mongoose from 'mongoose';

////////////////////////////////////////////////////////////////////////////////
// Definitions
////////////////////////////////////////////////////////////////////////////////

const SCHEMA = mongoose.Schema;

const gameSchema = new SCHEMA({

});

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////

export default mongoose.model('Game', gameSchema);