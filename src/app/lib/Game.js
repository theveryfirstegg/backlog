
import mongoose, {Schema} from "mongoose";

mongoose.connect(process.env.MONGO_URL)
mongoose.Promise = global.Promise


const gameschema = new Schema({
    id: Number,
    name: String,
    background_image: String,
    genres: Array,
    metacritic: Number,
    playtime: Number,
    progress: Number,

})

const Game = mongoose.models.Game || mongoose.model("Game", gameschema)
export default Game;


