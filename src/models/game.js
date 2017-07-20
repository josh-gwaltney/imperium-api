/**
 * Imperium 4X (Shared) - Game
 * ===
 *
 * @module game
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
    cells: []
});

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export default mongoose.model('Game', gameSchema);