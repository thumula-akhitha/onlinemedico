'use strict'

class MedicineController {
    async searchProduct({ params, request, response }) {

        const queryParam = request.all();
        let product;
        console.log(queryParam.search)
        if (queryParam && queryParam.search) {
            product = await Product.query()
               
                .where(function () {
                    this.where('productCode', 'like', '%' + queryParam.search + '%')
                        .orWhere('productName', 'like', '%' + queryParam.search + '%')
                })
                .fetch();
        } else {
            const courses = await Course.query()
            .where('programId', params.programId)
            .fetch();
        }

        // console.log(courses.rows)
        if (courses == null) {
            logger.error("CourseController-searchCourse, course not found");
            return response.status(404).json({
                message: "Products not found",
            });
        }
        logger.debug("CourseController-searchCourse, Succesfully retrived Products");
        return response.ok(product);
    }
}

module.exports = MedicineController
