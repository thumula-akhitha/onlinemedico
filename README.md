# OnlineMedico

## Team Members
1. Akhitha Tumula

    <img src="Images/akhitha-picture.jpeg" alt="drawing" width="100"/>

2. Rohan Bhandari
    
    <img src="Images/rohan.jpg" alt="drawing" width="100"/>
    
3. RethimaReddy Polam

    <img src="Images/Rethima.jpeg" alt="Rethima" width="100"/>

4. Kavya Reddy Mylapurapu

    <img src="Images/kavya.jpg" alt="drawing" width="100"/>

5. Sravani Jaidi

    <img src="Images/Sravani.jpeg" alt="drawing" width="100"/>

6. Satish Kumar Mandapalli
   
    <img src="Images/satishkumar_Photo.jpg" alt="drawing" width="125" height="160"/>


### About OnlineMedico
1. Our project Online medico is a website that will help people find their medication and buy them easily.The drug provider will add the medicine that are available in store and general users will buy the products online from the providers.
2. Users can also upload prescription to get the medicine delivered to their address.
Once the order is placed they can track the package from the website itself.
## Profile Links
1. [Akhitha Tumula](https://github.com/thumula-akhitha)
2. [Rohan Bhandari](https://github.com/rohan6471)
3. [RethimaReddy Polam](https://github.com/Rethima-Reddy)
4. [Kavya Reddy Mylapurapu](https://github.com/kavyareddy536886)
5. [Sravani Jaidi](https://github.com/Sravani537520/)
6. [Satish Kumar Mandapalli](https://github.com/mandapallisatish64)
## Executing Project In Local :
1. Clone the project to local system.
2. Install XAMPP Server and open phpmyadmin and create onlinemedico database.
3. Open backend in editor and run below commands:
  1. aonis migration:run (Create tables in mysql database)
  2. adonis seed --files='CustomerSeeder.js'(Inserts testing data into customer table).
  3. adonis seed --files='MedicineSeeder.js,AddressSeeder.js,CardDetailSeeder.js' (Creates data into respesctive tables).
  4. Create prescription table manually in phpmyadmin with following fields.(fileContent - longblob,name - varchar,email - varchar,fullname - varchar,dob - varchar)
4. Now run adonis serve --dev command to execute back end.
5. Now open front end in another editor and run npm install command.


