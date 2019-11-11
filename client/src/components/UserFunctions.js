import axios from "axios";

export const register = async newUser => {
  const response = await axios
    .post("users/register", {
      first_name: newUser.first_name,
      last_name: newUser.last_name,
      email: newUser.email,
      password: newUser.password
    });
  console.log("Registered");
};

export const uploadfileuserinfo =  async fileuserinfo => {
 try {
    const response = await axios
      .post("FileinfoSave/", {
        Email_id: fileuserinfo.Email_id,
        File_description: fileuserinfo.File_description,
        Download_link: fileuserinfo.Download_link,
        File_upload_time: fileuserinfo.File_upload_time,
        File_updated_time: fileuserinfo.File_updated_time,
        File_delete_flag: fileuserinfo.File_delete_flag,
        File_deleted_time: fileuserinfo.File_deleted_time,
        File_Update_flag: fileuserinfo.File_Update_flag,
        Country: fileuserinfo.Country_Name
      });
    return response.data;
  }
  catch (err) {
    console.log(err);
    alert(err);
  }
 // console.log(response);
};

export const login = async user => {
  try {
    const response = await axios
      .post("users/login", {
        email: user.email,
        password: user.password
      });
    console.log('login response', response);
    localStorage.setItem("usertoken", response.data);
    localStorage.setItem("email", user.email);
    return response.data;
  }
  catch (err) {
    console.log(err);
    alert(err);
  }
};



export const returnallfiles =  async emailid => {
  console.log('in return all file api', emailid);
  try {
    const response = await axios
      .get("returnfiles/", {
        params: {
          Email_id: emailid
        }
      });
    console.log('all files', response);
    return response.data;
  }
  catch (err) {
    console.log(err);
    alert(err);
  }
  // console.log(response);
 };

 export const deletefile =  async key => {
  console.log('in delete all file api key', key);
  try {
     const response = await axios
       .get("returnfiles/delete", {
         params: {
           key: key
         }
       });
     console.log('all files', response);
     return response.data;
   }
   catch (err) {
     console.log(err);
     alert(err);
   }
  // console.log(response);
 };

 //deletefileinfor from database
 export const deletefilefromdatabase =  async id => {
  console.log('in delete all file api', id);
  try {
     const response = await axios
       .delete("returnfiles/deletefromdatabase", {
         params: {
           id: id
         }
       });
     console.log('Deleted from database', response);
     return response;
   }
   catch (err) {
     console.log(err);
     alert(err);
   }
  // console.log(response);
 };


 export const sesmailfunctionality =  async email => {
  console.log('in sesemailfunctionality', email);
  try {
     const response = await axios
       .get("https://77k3rsl8sb.execute-api.us-east-1.amazonaws.com/prod/sesdeleteemail", {
         params: {
           email: email
         }
       });
       console.log('printing response ', response);
     if (response == null) {
       console.log("email sent");
     }
   }
   catch (err) {
     console.log(err);
     alert(err);
   }
  // console.log(response);
 };




 export const returnAdminfiles =  async () => {
  try {
     const response = await axios
       .get("returnfiles/admin");
     console.log('all admin files', response);
     return response;
   }
   catch (err) {
     console.log(err);
     alert(err);
   }
  // console.log(response);
 };


 
 export const updatedatabase =  async (idfileupdate) => {
  console.log('in updatefile userfunction.js', idfileupdate);
  try {
     const response = await axios
       .post("returnfiles/updatedatabase", {
         
           idUser_file_details: idfileupdate
         
       });
      return response;
   }
   catch (err) {
     console.log(err);
     alert(err);
   }
 };


 export const dashboard =  () => {
  return axios
     .get("dashboard/")
     .then(response => {
       console.log('In dashboard Userfunctions.js', response);
       return response;
     })
     .catch(err => {
       console.log(err);
       alert(err);
     });
  // console.log(response);
 };

 export const CountryWisedashboard =  () => {
  return axios
     .get("dashboard/Country")
     .then(response => {
       console.log('In CountryWisedashboard Userfunctions.js', response);
       return response;
     })
     .catch(err => {
       console.log(err);
       alert(err);
     });
  // console.log(response);
 };

 export const UnitedStatesdashboard =  () => {
  return axios
     .get("dashboard/UnitedStatesCountry")
     .then(response => {
       console.log('In UnitedStatesCountry Userfunctions.js', response);
       return response;
     })
     .catch(err => {
       console.log(err);
       alert(err);
     });
  // console.log(response);
 };

 export const Indiadashboard =  () => {
  return axios
     .get("dashboard/IndiaCountry")
     .then(response => {
       console.log('In Indiadashboard Userfunctions.js', response);
       return response;
     })
     .catch(err => {
       console.log(err);
       alert(err);
     });
  // console.log(response);
 };

 export const Japandashboard =  () => {
  return axios
     .get("dashboard/JapanCountry")
     .then(response => {
       console.log('In Japandashboard Userfunctions.js', response);
       return response;
     })
     .catch(err => {
       console.log(err);
       alert(err);
     });
  // console.log(response);
 };
 
 export const Chinadashboard =  () => {
  return axios
     .get("dashboard/ChinaCountry")
     .then(response => {
       console.log('In Chinadashboard Userfunctions.js', response);
       return response;
     })
     .catch(err => {
       console.log(err);
       alert(err);
     });
  // console.log(response);
 };

 export const Singaporedashboard =  () => {
  return axios
     .get("dashboard/SingaporeCountry")
     .then(response => {
       console.log('In Singaporedashboard Userfunctions.js', response);
       return response;
     })
     .catch(err => {
       console.log(err);
       alert(err);
     });
  // console.log(response);
 };