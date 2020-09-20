'use strict'
const getStream = use('get-stream')
class PrescriptionController {
   // This method is used for file upload for prescription.
    async fileUploader({ request, response, auth }) {
    const scenarioFiles = []
      request.multipart.file('file', {}, async function (file) {
          const fileContent = await getStream.buffer(file.stream)
          scenarioFiles.push({
            fileContent: fileContent,
            name: file.clientName,
            type: `${file.type}/${this.subtype}`
          })
      })
      request.multipart.field((name,value)=>{
        console.log("test " +name + " "+value )
      });
    
      await request.multipart.process()
    
      // now all files have been processed
      await use('Database').table('files').insert(scenarioFiles)
        return 'File uploaded';
    }
}

module.exports = PrescriptionController