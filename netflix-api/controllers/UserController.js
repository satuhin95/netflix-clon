const User = require('../models/UserModel');

module.exports.getLikedMovies = async(req,res)=>{
    try {
        const {email} = req.body;
        const user = await User.findOne({email});
        if (user) {
            return res.json({msg:"Success",movies:user.likedMovies})
        }else{
            return res.json({msg:"User  email not found"})
        }
    } catch (error) {
        return res.json({msg:"Error fatching movies."});
    }
}
module.exports.unlikedMovie = async(req,res)=>{
    try {
        const {email,movieId} = req.body;
        const user = await User.findOne({email});
        if (user) {
            const {likedMovies} = user;
            const movieIndex =likedMovies.findIndex(({id})=>(id===movieId))
            if(!movieIndex){
                res.status(400).send({msg:"Movie not found"})
            }
            likedMovies.splice(movieIndex,1);
           await User.findByIdAndUpdate(user._id,{
            likedMovies,
           },{new:true})
           return res.json({msg:"Movie Deleted", movies:likedMovies})
        }
    } catch (error) {
        return res.json({msg:"Error remove movie to the list"});
    }
}

module.exports.addToLikedMovies = async(req,res)=>{
    try {
        const {email,data} = req.body;
        const user = await User.findOne({email});
        if (user) {
            const {likedMovies} = user;
            const movieAlreadyLiked = likedMovies.find(({id})=>(id===data.id))
            if(!movieAlreadyLiked){
                await User.findByIdAndUpdate(user._id,{
                    likedMovies:[...user.likedMovies,data],
                },{new:true}
                );
            }else {
                return res.json({msg:"Movie already added to the liked list."})
            }
        }else{
            await User.create({email,likedMovies:[data]});
            return res.json({msg:"Movie  added Successfully."})
        }
    } catch (error) {
        return res.json({msg:"Error adding movie to the list"});
    }
}