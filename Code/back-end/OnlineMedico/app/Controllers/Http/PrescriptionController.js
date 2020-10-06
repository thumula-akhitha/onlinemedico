'use strict'
const getStream = use('get-stream')
class PrescriptionController {
  
   // This method is used for file upload for prescription.
    async fileUploader({ request, response, auth }) {
      console.log("enteererer")
    const scenarioFiles = {}
    
     await request.multipart.file('file', {}, async function (file) {
          const fileContent = await getStream.buffer(file.stream)
       
          scenarioFiles.fileContent =fileContent,
          scenarioFiles.name= file.clientName,
          scenarioFiles.type= `${file.type}/${this.subtype}`
            
         
      })
      await request.multipart.field((name,value)=>{
     
        scenarioFiles.email = value
        
        console.log("good valueee " +name + " "+value )
      });
     await  request.multipart.field((date,value)=>{
        scenarioFiles.dob = value
        
        console.log("good valueee " +date + " "+value )
      });
     
     
    
      await request.multipart.process()
    
      // now all files have been processed
      await use('Database').table('files').insert(scenarioFiles)
        return 'File uploaded';
    }
}

module.exports = PrescriptionController