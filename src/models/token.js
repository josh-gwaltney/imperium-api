/**
 * Imperium 4X (Shared) - Token
 * ===
 *
 * @module token
 */

////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////
import mongoose from 'mongoose';

////////////////////////////////////////////////////////////////////////////////
// Definitions
////////////////////////////////////////////////////////////////////////////////
const SCHEMA = mongoose.Schema;
const tokenSchema = new SCHEMA({
  token: String,
  expires: Number
});

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export default mongoose.model('Token', tokenSchema);