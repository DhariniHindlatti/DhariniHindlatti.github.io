const express=require("express")
const app = express()
app.use(express.json())
const mongoose = require("mongoose")
//const bcrypt = require("bcryptjs")  // to encrypt the password before sending to database.
const cors = require("cors") // for cross domain operations
app.use(cors())


const mongoUrl = "mongodb+srv://dharinihindlatti:dharini@cluster0.2sa7csl.mongodb.net/wardrobe?retryWrites=true&w=majority" 
mongoose.connect(mongoUrl, {
    useNewUrlParser: true
}).then(() => console.log("connected to db"))
    .catch(e => console.log(e))

    
// app.post("/post", async (req, res) => {
//     console.log(req.body)
//     const { data } = req.body
//     try {
//         if (data == "Charan") {
//             res.send({ status: "OKAY" })
//         } else { res.send({ status: "User not found" }) }

//     } catch (error) {
//         res.send({ status: "Something went wrong, try again!" })
//     }

// })

require("./model")
const User = mongoose.model("vwcollection")

app.post("/register", async (req, res) => {
    const { name} = req.body

   // const encryptedPassword = await bcrypt.hash(password, 10)
    try {
        const olduser = await User.findOne({ name }) //we use await to wait for the db to fetch the results , or else the previous value is considered. 
        if (olduser) {
            return res.send({ error: "User already exists" })

        }
        await User.create({
            name

        })
        res.send({ status: "OKAY" })
    } catch (error) {
        res.send({ status: "Something went wrong" })
    }
});


// app.post("/login-user", async (req, res) => {
//     const {  email, password } = req.body

//     const encryptedPassword = await bcrypt.hash(password, 10)
//     try {
//         const user = await User.findOne({ email }) //we use await to wait for the db to fetch the results , or else the previous value is considered. 
//         if (!user) {
//             return res.send({ error: "User not found" })

//         }
//         await User.create({
//             fname,
//             lname,
//             email,
//             password: encryptedPassword

//         })
//         res.send({ status: "OKAY" })
//     } catch (error) {
//         res.send({ status: "Something went wrong" })
//     }
// });
app.post('/display', async (req, res) => {
    const { token } = req.body;
    console.log(token)
    try {
        //const user = jwt.verify(token, JWT_SECRET_KEY)
        //const useremail = user.email
        User.findOne({ email: useremail }).then((data) => {
            res.send({ status: "ok", data: data })
        }).catch((error) => {
            res.send({ status: "error", data: error })

        })
    }

    catch (error) {

    }

})

app.listen(5000, () => {
    console.log("server started")
})

//mongodb+srv://charan:<password>@cluster0.lxfbhr0.mongodb.net/?retryWrites=true&w=majority



//mongo username:charan
//pass:bestproject
