import { userValidSchema } from "../services/validation.service"
export const superAdmincheck = async (req, res, next) => {
    try {
        const {email, password, role} = req.body[0]
        const {error} = userValidSchema.validate(req.body[0])
        if(error){
            res.status(400).send("Invalid data", error.message)
        }
        else{
            if(role === 'superadmin'){
                next()
            }
            else{
                res.send("You are not admin")
            }
        }
    } catch (err) {
        res.send("Something went wrong")
    }
}