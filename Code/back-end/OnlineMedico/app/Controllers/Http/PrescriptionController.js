'use strict'
const getStream = use('get-stream')
class PrescriptionController {
  
   // This method is used for file upload for prescription.
    async fileUploader({ request, response, auth }) {
      console.log("enteererer")
    let scenarioFiles = {},names
    
     await request.multipart.file('file', {}, async function (file) {
          const fileContent = await getStream.buffer(file.stream)
       
          scenarioFiles.fileContent =fileContent,
          scenarioFiles.name= file.clientName,
          scenarioFiles.type= `${file.type}/${this.subtype}`
            
         
      })
      await request.multipart.field((name1,value)=>{
     
        scenarioFiles.email = `${value}`
        
        console.log("good valueee " +name1 + " "+value)
      });
    
    
      await request.multipart.process()
    
      // now all files have been processed
      await use('Database').table('prescription').insert(scenarioFiles)
        return 'File uploaded';
    }
}

module.exports = PrescriptionController