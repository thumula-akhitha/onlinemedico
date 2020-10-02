'use strict'
const Medicine = use("App/Models/Medicine");
const _ = use("lodash");

class MedicineController {
    //This function is used for search/filter medicines by user.
    async searchProduct({ params, request, response }) {
            console.log(params.medicineCode)
       // const queryParam = request.all();
        let product;
       // console.log(queryParam.search)
        // if (queryParam && queryParam.search) {
            product = await Medicine.query()
               
                .where(function () {
                    this.where('title', 'like', '%' + params.medicineCode + '%')
                        .orWhere('description', 'like', '%' + params.medicineCode + '%')
                })
                .fetch();
    //    // } else {
    //         const courses = await Medicine.query()
    //         .where('medicineId', params.MedicineCode)
    //         .fetch();
    //     }

        // console.log(courses.rows)
        // if (courses == null) {
        //     logger.error("CourseController-searchCourse, course not found");
        //     return response.status(404).json({
        //         message: "Medicine not found",
        //     });
        // }
       // logger.debug("CourseController-searchCourse, Succesfully retrived Products");
        return response.ok(product);
    }
//Adds the medicine to database
    async addMedicine({ auth, request, response, params }) {
        const medicineDetails = request.all();
        medicineData = await Medicine.findOrCreate(medicineDetails);
    return response.status(200).json(medicineData);
    }
    // Returns all medicines
    async getMedicines({ auth, request, response, params }) {
        console.log("cameee")
           const medicine = await Medicine.all();
           console.log(medicine)

           return response.status(200).json(medicine);
    }
    async updateMedicine({ auth, request, response, params }) {
        const medicine = request.all();
        let medicineData = await Medicine.find(params.id);

        if (!medicineData) {
            logger.error("UserController-update, user not found");
            return response.status(404).json({
                error: {
                    status: 404,
                    message: "Medicine not found",
                },
            });
        }
        
        medicineData = _.merge(medicineData, medicine);
        

        await medicineData.save();
        logger.debug("UserController-update, Succesfully updated Medicine");
        return response.status(200).json(medicineData);
    }
}

module.exports = MedicineController
