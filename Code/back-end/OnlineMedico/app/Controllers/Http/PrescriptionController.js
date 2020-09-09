'use strict'

class PrescriptionController {
   // This method is used for file upload for prescription.
    async fileUploader({ request, response, auth }) {
        console.log(request.body)
        console.log(request)
    const scenarioFiles = []
      request.multipart.file('file', {}, async function (file) {
          const fileContent = await getStream.buffer(file.stream)
          console.log(file)
          scenarioFiles.push({
            fileContent: fileContent,
            name: file.clientName,
            type: `${file.type}/${this.subtype}`
          })
      })
    
      await request.multipart.process()
    
      // now all files have been processed
      await use('Database').table('files').insert(scenarioFiles)
        return 'File uploaded';
    }
}

module.exports = PrescriptionController
